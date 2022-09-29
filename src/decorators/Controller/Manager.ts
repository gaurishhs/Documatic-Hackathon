import "reflect-metadata";
import { Express, NextFunction, Request, Response } from "express";
import { loadControllerClassesFromDirs } from "../../utils";
import * as path from "path";
const AsciiTable = require("ascii-table");
import {
  ControllersLoaderOptions,
  IRoute,
} from "../../@types/index.interfaces";

export class ControllersManager {
  /**
   * Create a new Controllers Manager
   * @param options
   */
  constructor(protected readonly options: ControllersLoaderOptions) { }
  // Register all controllers
  init(app: Express) {
    for (const controller of this.getControllers()) {
      const instance = this.getInstance(controller);

      const prefix = Reflect.getMetadata("prefix", controller);
      const routes: Array<IRoute> = Reflect.getMetadata("routes", controller);
      let table = new AsciiTable("Routes")
        .setHeading("Method", "Path", "Middlewares", "Handler")
        .setJustify();
      routes.forEach((route) => {
        // add ratelimit middleware
        table.addRow(
          route.requestMethod.toUpperCase(),
          prefix + route.path,
          route.middlewares.length,
          route.handlerName
        );
        app[route.requestMethod](
          path.join("/", prefix, route.path),
          ...route.middlewares,
          (req: Request, res: Response, next: NextFunction) =>
            Promise.resolve(instance[route.handlerName](req, res)).catch(next)
        );
      });

      console.log(table.toString());
    }
  }
  // Get an instance of the container
  protected getInstance(identifier: any) {
    if (this.options.container) {
      return this.options.container.get(identifier);
    }

    return new identifier();
  }

  // Get the controllers
  protected getControllers(): Function[] {
    const controllerClasses: Function[] = (
      this.options.controllers as any[]
    ).filter((controller) => controller instanceof Function);

    return [...controllerClasses, ...this.loadControllers()];
  }

  // Get the controllers
  protected loadControllers(): Function[] {
    const controllerDirs = (this.options.controllers as any[]).filter(
      (controller) => typeof controller === "string"
    );

    return loadControllerClassesFromDirs(controllerDirs);
  }
}
