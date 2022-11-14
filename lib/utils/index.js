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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentWorkerHealth = exports.loadControllerClassesFromDirs = void 0;
const path = __importStar(require("path"));
const os_1 = __importDefault(require("os"));
const loadClassesFromFiles = function (exported, allLoaded) {
    if (exported instanceof Function) {
        allLoaded.push(exported);
    }
    else if (exported instanceof Array) {
        exported.forEach((i) => loadClassesFromFiles(i, allLoaded));
    }
    else if (exported instanceof Object || typeof exported === "object") {
        Object.keys(exported).forEach((key) => loadClassesFromFiles(exported[key], allLoaded));
    }
    return allLoaded;
};
function loadControllerClassesFromDirs(directories, formats = [".js", ".ts"]) {
    const allFiles = directories.reduce((allDirs, dir) => {
        return allDirs.concat(require("glob").sync(path.normalize(dir)));
    }, []);
    const dirs = allFiles
        .filter((file) => {
        const dtsExtension = file.substring(file.length - 5, file.length);
        return (formats.indexOf(path.extname(file)) !== -1 && dtsExtension !== ".d.ts");
    })
        .map((file) => {
        return require(file);
    });
    return loadClassesFromFiles(dirs, []);
}
exports.loadControllerClassesFromDirs = loadControllerClassesFromDirs;
function getCurrentWorkerHealth() {
    const cpuUsage = process.cpuUsage();
    const cpuUsagePercentage = ((cpuUsage.user + cpuUsage.system) / 1000000 / os_1.default.cpus().length) * 100;
    const memoryUsage = process.memoryUsage();
    const memoryUsagePercentage = (memoryUsage.heapUsed / memoryUsage.heapTotal) * 100;
    let uptime = process.uptime();
    const days = Math.floor(uptime / (60 * 60 * 24));
    uptime -= days * 60 * 60 * 24;
    const hours = Math.floor(uptime / (60 * 60));
    uptime -= hours * 60 * 60;
    const minutes = Math.floor(uptime / 60);
    uptime -= minutes * 60;
    const seconds = Math.floor(uptime);
    uptime -= seconds;
    const uptimeString = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    return {
        cpuUsage: `${Math.round(cpuUsagePercentage)}%`,
        memoryUsage: `${Math.round(memoryUsagePercentage)}%`,
        uptime: uptimeString,
    };
}
exports.getCurrentWorkerHealth = getCurrentWorkerHealth;
//# sourceMappingURL=index.js.map