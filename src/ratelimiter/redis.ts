import {
  RedisRatelimiterOptions,
  IsRatelimitedResponse,
} from "../@types/index.interfaces";
import { createClient } from "redis";
import { Request } from "express";

export class RedisRatelimiter {
  protected redisClient: any;
  protected readonly ttl: number;
  protected readonly maxRequests: number;
  /**
   * Create a new instance of RedisRatelimiter
   * @param options
   */
  constructor(options: RedisRatelimiterOptions) {
    this.ttl = options.timeWindow;
    this.maxRequests = options.maxRequests;
    this.redisClient = createClient({
      url: options.url,
    });
    this.redisClient.on("error", console.error);
    this.redisClient.connect();
  }
  // Check if the request is ratelimited
  async isRatelimited(req: Request): Promise<IsRatelimitedResponse> {
    let count = await this.redisClient.incr(req.ip);
    let expiryAfter = await this.redisClient.ttl(req.ip);
    if (count === 1) {
      this.redisClient.expire(req.ip, 60);
    }

    if (count > this.maxRequests) {
      return {
        ratelimited: true,
        retryAfter: expiryAfter,
      };
    } else {
      return {
        ratelimited: false,
        retryAfter: 0,
      };
    }
  }
}
