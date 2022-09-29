import { RequestHandler } from "express";
import "reflect-metadata";
import { HttpMethods, IRoute } from "../../@types/index.interfaces";

const methodFactory = (
  method: HttpMethods,
  path: string,
  middlewares: RequestHandler[]
): MethodDecorator => {
  return (target, propertyKey): void => {
    if (!Reflect.hasMetadata("routes", target.constructor)) {
      Reflect.defineMetadata("routes", [], target.constructor);
    }

    const routes = Reflect.getMetadata(
      "routes",
      target.constructor
    ) as Array<IRoute>;

    routes.push({
      path,
      middlewares,
      requestMethod: method,
      handlerName: propertyKey,
    });

    Reflect.defineMetadata("routes", routes, target.constructor);
  };
};

// Create a new GET method decorator
export const Get = (
  path: string,
  ...middlewares: RequestHandler[]
): MethodDecorator => methodFactory(HttpMethods.GET, path, middlewares);

// Create a new POST method decorator
export const Post = (
  path: string,
  ...middlewares: RequestHandler[]
): MethodDecorator => methodFactory(HttpMethods.POST, path, middlewares);

// Create a new PUT method decorator
export const Head = (
  path: string,
  ...middlewares: RequestHandler[]
): MethodDecorator => methodFactory(HttpMethods.HEAD, path, middlewares);

// Create a new PUT method decorator
export const Put = (
  path: string,
  ...middlewares: RequestHandler[]
): MethodDecorator => methodFactory(HttpMethods.PUT, path, middlewares);

// Create a new PATCH method decorator
export const Patch = (
  path: string,
  ...middlewares: RequestHandler[]
): MethodDecorator => methodFactory(HttpMethods.PATCH, path, middlewares);

// Create a new DELETE method decorator
export const Delete = (
  path: string,
  ...middlewares: RequestHandler[]
): MethodDecorator => methodFactory(HttpMethods.DELETE, path, middlewares);

// Create a new OPTIONS method decorator
export const Options = (
  path: string,
  ...middlewares: RequestHandler[]
): MethodDecorator => methodFactory(HttpMethods.OPTIONS, path, middlewares);

// Create a new TRACE method decorator
export const Trace = (
  path: string,
  ...middlewares: RequestHandler[]
): MethodDecorator => methodFactory(HttpMethods.TRACE, path, middlewares);
export const Method = (
  method: HttpMethods,
  path: string,
  ...middlewares: RequestHandler[]
): MethodDecorator => methodFactory(method, path, middlewares);
