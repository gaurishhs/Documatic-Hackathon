"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllersManager = void 0;
require("reflect-metadata");
const utils_1 = require("../../utils");
const path = __importStar(require("path"));
const AsciiTable = require("ascii-table");
class ControllersManager {
    constructor(options) {
        this.options = options;
    }
    init(app) {
        for (const controller of this.getControllers()) {
            const instance = this.getInstance(controller);
            const prefix = Reflect.getMetadata("prefix", controller);
            const routes = Reflect.getMetadata("routes", controller);
            let table = new AsciiTable("Routes")
                .setHeading("Method", "Path", "Middlewares", "Handler")
                .setJustify();
            routes.forEach((route) => {
                table.addRow(route.requestMethod.toUpperCase(), prefix + route.path, route.middlewares.length, route.handlerName);
                app[route.requestMethod](path.join("/", prefix, route.path), ...route.middlewares, (req, res, next) => Promise.resolve(instance[route.handlerName](req, res)).catch(next));
            });
            console.log(table.toString());
        }
    }
    getInstance(identifier) {
        if (this.options.container) {
            return this.options.container.get(identifier);
        }
        return new identifier();
    }
    getControllers() {
        const controllerClasses = this.options.controllers.filter((controller) => controller instanceof Function);
        return [...controllerClasses, ...this.loadControllers()];
    }
    loadControllers() {
        const controllerDirs = this.options.controllers.filter((controller) => typeof controller === "string");
        return (0, utils_1.loadControllerClassesFromDirs)(controllerDirs);
    }
}
exports.ControllersManager = ControllersManager;
//# sourceMappingURL=Manager.js.map