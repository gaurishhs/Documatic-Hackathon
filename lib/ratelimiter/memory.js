"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryRatelimiter = void 0;
class MemoryRatelimiter {
    constructor(options) {
        this.requests = new Map();
        this.ttl = options.timeWindow;
        this.maxRequests = options.maxRequests;
    }
    async isRatelimited(req) {
        return new Promise((resolve) => {
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
            }
            else {
                resolve({
                    ratelimited: false,
                    retryAfter: 0,
                });
            }
        });
    }
}
exports.MemoryRatelimiter = MemoryRatelimiter;
//# sourceMappingURL=memory.js.map