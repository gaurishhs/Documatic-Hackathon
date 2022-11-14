"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressUtilities = void 0;
const redis_1 = require("./ratelimiter/redis");
const Manager_1 = require("./decorators/Controller/Manager");
const utils_1 = require("./utils");
require("./prototypes/index");
const memory_1 = require("./ratelimiter/memory");
const compression_1 = __importDefault(require("compression"));
class ExpressUtilities {
    constructor(options) {
        this.options = options;
        this.printBanner();
        if (options.ratelimiter) {
            this.debug("Initalizing Ratelimiter module");
            if (this.options.ratelimiter?.type === "redis") {
                this.ratelimiter = new redis_1.RedisRatelimiter(this.options.ratelimiter.options);
            }
            else {
                this.ratelimiter = new memory_1.MemoryRatelimiter(this.options.ratelimiter?.options);
            }
            this.debug("Ratelimiter module initialized");
        }
        if (options.controllers) {
            this.debug("Initalizing Controllers");
            new Manager_1.ControllersManager({
                controllers: options.controllers?.controllers,
                container: options.controllers?.container,
            }).init(this.options.expressApp);
            this.debug("Controllers initialized");
        }
        if (options.healthRoute) {
            this.debug("Creating Health Route");
            this.options.expressApp.get(options.healthRoute, (req, res) => res.reply(200, (0, utils_1.getCurrentWorkerHealth)()));
            this.debug("Health Route Created");
        }
        if (options.production) {
            this.debug("Production mode enabled");
            this.options.expressApp.use((0, compression_1.default)());
        }
    }
    printBanner() {
        console.log(`\x1b[35m
    ███████╗██╗░░░██╗████████╗██╗██╗░░░░░░██████╗
    ██╔════╝██║░░░██║╚══██╔══╝██║██║░░░░░██╔════╝
    █████╗░░██║░░░██║░░░██║░░░██║██║░░░░░╚█████╗░
    ██╔══╝░░██║░░░██║░░░██║░░░██║██║░░░░░░╚═══██╗
    ███████╗╚██████╔╝░░░██║░░░██║███████╗██████╔╝
    ╚══════╝░╚═════╝░░░░╚═╝░░░╚═╝╚══════╝╚═════╝░\x1b[0m`);
        console.log(`\x1b[37m
      \x1b[33mAuthored By:\x1b[0m \x1b[2mGaurish Sethia (https://gaurishsethia.me)\x1b[0m
      \x1b[33mVersion:\x1b[0m \x1b[2m1.0.0\x1b[0m
    \x1b[0m`);
    }
    debug(message) {
        if (!this.options.debugMode)
            return;
        process.stdout.write(`[\x1b[33mDEBUG\x1b[0m] \x1b[2m${new Date().toLocaleString()}\x1b[0m ${message}\n`);
    }
}
exports.ExpressUtilities = ExpressUtilities;
//# sourceMappingURL=ExpressUtilities.js.map