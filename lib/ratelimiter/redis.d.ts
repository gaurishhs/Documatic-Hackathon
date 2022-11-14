import { RedisRatelimiterOptions, IsRatelimitedResponse } from "../@types/index.interfaces";
import { Request } from "express";
export declare class RedisRatelimiter {
    protected redisClient: any;
    protected readonly ttl: number;
    protected readonly maxRequests: number;
    constructor(options: RedisRatelimiterOptions);
    isRatelimited(req: Request): Promise<IsRatelimitedResponse>;
}
