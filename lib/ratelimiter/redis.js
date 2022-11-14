"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisRatelimiter = void 0;
const redis_1 = require("redis");
class RedisRatelimiter {
    constructor(options) {
        this.ttl = options.timeWindow;
        this.maxRequests = options.maxRequests;
        this.redisClient = (0, redis_1.createClient)({
            url: options.url,
        });
        this.redisClient.on("error", console.error);
        this.redisClient.connect();
    }
    async isRatelimited(req) {
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
        }
        else {
            return {
                ratelimited: false,
                retryAfter: 0,
            };
        }
    }
}
exports.RedisRatelimiter = RedisRatelimiter;
//# sourceMappingURL=redis.js.map