import "reflect-metadata";
import { Express } from "express";
import { ControllersLoaderOptions } from "../../@types/index.interfaces";
export declare class ControllersManager {
    protected readonly options: ControllersLoaderOptions;
    constructor(options: ControllersLoaderOptions);
    init(app: Express): void;
    protected getInstance(identifier: any): any;
    protected getControllers(): Function[];
    protected loadControllers(): Function[];
}
