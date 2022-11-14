"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Method = exports.Trace = exports.Options = exports.Delete = exports.Patch = exports.Put = exports.Head = exports.Post = exports.Get = void 0;
require("reflect-metadata");
const index_interfaces_1 = require("../../@types/index.interfaces");
const methodFactory = (method, path, middlewares) => {
    return (target, propertyKey) => {
        if (!Reflect.hasMetadata("routes", target.constructor)) {
            Reflect.defineMetadata("routes", [], target.constructor);
        }
        const routes = Reflect.getMetadata("routes", target.constructor);
        routes.push({
            path,
            middlewares,
            requestMethod: method,
            handlerName: propertyKey,
        });
        Reflect.defineMetadata("routes", routes, target.constructor);
    };
};
const Get = (path, ...middlewares) => methodFactory(index_interfaces_1.HttpMethods.GET, path, middlewares);
exports.Get = Get;
const Post = (path, ...middlewares) => methodFactory(index_interfaces_1.HttpMethods.POST, path, middlewares);
exports.Post = Post;
const Head = (path, ...middlewares) => methodFactory(index_interfaces_1.HttpMethods.HEAD, path, middlewares);
exports.Head = Head;
const Put = (path, ...middlewares) => methodFactory(index_interfaces_1.HttpMethods.PUT, path, middlewares);
exports.Put = Put;
const Patch = (path, ...middlewares) => methodFactory(index_interfaces_1.HttpMethods.PATCH, path, middlewares);
exports.Patch = Patch;
const Delete = (path, ...middlewares) => methodFactory(index_interfaces_1.HttpMethods.DELETE, path, middlewares);
exports.Delete = Delete;
const Options = (path, ...middlewares) => methodFactory(index_interfaces_1.HttpMethods.OPTIONS, path, middlewares);
exports.Options = Options;
const Trace = (path, ...middlewares) => methodFactory(index_interfaces_1.HttpMethods.TRACE, path, middlewares);
exports.Trace = Trace;
const Method = (method, path, ...middlewares) => methodFactory(method, path, middlewares);
exports.Method = Method;
//# sourceMappingURL=index.js.map