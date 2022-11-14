import { InitializationOptions } from "./@types/index.interfaces";
import { RedisRatelimiter } from "./ratelimiter/redis";
import "./prototypes/index";
import { MemoryRatelimiter } from "./ratelimiter/memory";
export declare class ExpressUtilities {
    ratelimiter?: MemoryRatelimiter | RedisRatelimiter;
    options: InitializationOptions;
    constructor(options: InitializationOptions);
    printBanner(): void;
    debug(message: string): void;
}
