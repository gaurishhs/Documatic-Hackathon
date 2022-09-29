import {
  IsRatelimitedResponse,
  MemoryRatelimiterOptions,
} from "../@types/index.interfaces";
import { Request } from "express";

export class MemoryRatelimiter {
  protected requests: Map<string, number>;
  protected readonly ttl: number;
  protected readonly maxRequests: number;
  /**
   * Create a new instance of MemoryRatelimiter
   * @param options
   */
  constructor(options: MemoryRatelimiterOptions) {
    this.requests = new Map();
    this.ttl = options.timeWindow;
    this.maxRequests = options.maxRequests;
  }
  // Check if the request is ratelimited
  async isRatelimited(req: Request): Promise<IsRatelimitedResponse> {
    return new Promise<IsRatelimitedResponse>((resolve) => {
      let count = this.requests.get(req.ip) || 0;
      count++;
      this.requests.set(req.ip, count);
      setTimeout(() => {
        this.requests.delete(req.ip);
      }, this.ttl * 1000);
      if (count > this.maxRequests) {
        resolve({
          ratelimited: true,
          retryAfter: this.ttl,
        });
      } else {
        resolve({
          ratelimited: false,
          retryAfter: 0,
        });
      }
    });
  }
}
