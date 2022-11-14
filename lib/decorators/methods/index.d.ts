import { RequestHandler } from "express";
import "reflect-metadata";
import { HttpMethods } from "../../@types/index.interfaces";
export declare const Get: (path: string, ...middlewares: RequestHandler[]) => MethodDecorator;
export declare const Post: (path: string, ...middlewares: RequestHandler[]) => MethodDecorator;
export declare const Head: (path: string, ...middlewares: RequestHandler[]) => MethodDecorator;
export declare const Put: (path: string, ...middlewares: RequestHandler[]) => MethodDecorator;
export declare const Patch: (path: string, ...middlewares: RequestHandler[]) => MethodDecorator;
export declare const Delete: (path: string, ...middlewares: RequestHandler[]) => MethodDecorator;
export declare const Options: (path: string, ...middlewares: RequestHandler[]) => MethodDecorator;
export declare const Trace: (path: string, ...middlewares: RequestHandler[]) => MethodDecorator;
export declare const Method: (method: HttpMethods, path: string, ...middlewares: RequestHandler[]) => MethodDecorator;