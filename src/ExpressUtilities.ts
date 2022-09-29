import { InitializationOptions } from "./@types/index.interfaces";
import { RedisRatelimiter } from "./ratelimiter/redis";
import { ControllersManager } from "./decorators/Controller/Manager";
import { getCurrentWorkerHealth } from './utils';
import "./prototypes/index";
import { MemoryRatelimiter } from "./ratelimiter/memory";
import compression from "compression";

export class ExpressUtilities {
  ratelimiter?: MemoryRatelimiter | RedisRatelimiter;
  options: InitializationOptions;
  constructor(options: InitializationOptions) {
    this.options = options;
    this.printBanner();
    if (options.ratelimiter) {
      this.debug("Initalizing Ratelimiter module");
      // Initialize ratelimiter according to options
      if (this.options.ratelimiter?.type === "redis") {
        this.ratelimiter = new RedisRatelimiter(
          this.options.ratelimiter.options
        );
      } else {
        this.ratelimiter = new MemoryRatelimiter(
          this.options.ratelimiter?.options!
        );
      }

      this.debug("Ratelimiter module initialized");
    }
    if (options.controllers) {
      this.debug("Initalizing Controllers");
      // Create a new controllers manager and load controllers
      new ControllersManager({
        controllers: options.controllers?.controllers!,
        container: options.controllers?.container,
      }).init(this.options.expressApp);
      this.debug("Controllers initialized");
    }
    if (options.healthRoute) {
      this.debug("Creating Health Route");
      // Create a health route
      this.options.expressApp.get(
        options.healthRoute,
        (req, res) => res.reply(200, getCurrentWorkerHealth())
      );
      this.debug("Health Route Created");
    }
    if (options.production) {
      this.debug("Production mode enabled");
      this.options.expressApp.use(compression());
    }
  }

  public printBanner() {
    console.log(`\x1b[35m
    ███████╗██╗░░░██╗████████╗██╗██╗░░░░░░██████╗
    ██╔════╝██║░░░██║╚══██╔══╝██║██║░░░░░██╔════╝
    █████╗░░██║░░░██║░░░██║░░░██║██║░░░░░╚█████╗░
    ██╔══╝░░██║░░░██║░░░██║░░░██║██║░░░░░░╚═══██╗
    ███████╗╚██████╔╝░░░██║░░░██║███████╗██████╔╝
    ╚══════╝░╚═════╝░░░░╚═╝░░░╚═╝╚══════╝╚═════╝░\x1b[0m`)
    console.log(`\x1b[37m
      \x1b[33mAuthored By:\x1b[0m \x1b[2mGaurish Sethia (https://gaurishsethia.me)\x1b[0m
      \x1b[33mVersion:\x1b[0m \x1b[2m1.0.0\x1b[0m
    \x1b[0m`)
  }

  debug(message: string) {
    if (!this.options.debugMode) return;
    process.stdout.write(
      `[\x1b[33mDEBUG\x1b[0m] \x1b[2m${new Date().toLocaleString()}\x1b[0m ${message}\n`
    );
  }
}
