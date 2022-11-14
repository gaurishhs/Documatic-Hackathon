import { IsRatelimitedResponse, MemoryRatelimiterOptions } from "../@types/index.interfaces";
import { Request } from "express";
export declare class MemoryRatelimiter {
    protected requests: Map<string, number>;
    protected readonly ttl: number;
    protected readonly maxRequests: number;
    constructor(options: MemoryRatelimiterOptions);
    isRatelimited(req: Request): Promise<IsRatelimitedResponse>;
}
