import express from "express";
import { ExpressUtilities } from "../src";

const app = express();

// Ratelimit middleware
app.use((req, res, next) => {
  utils.ratelimiter?.isRatelimited(req).then((data) => {
    console.log(data);
    if (data.ratelimited) {
      // Do anything you want to
      res.setHeader("Retry-After", data.retryAfter);
      res.reply(429, {
        message: "Too many requests",
        retryAfter: data.retryAfter,
      });
    } else {
      next();
    }
  });
});

// Mem-based ratelimiter
let utils = new ExpressUtilities({
  ratelimiter: {
    type: "memory",
    options: {
      // 5 requests max in 60 seconds
      maxRequests: 5,
      timeWindow: 60,
    },
  },
  expressApp: app,
  debugMode: true,
  controllers: {
    controllers: [__dirname + "/controllers/*.ts"],
  },
  healthRoute: '/health', // Returns node.js current worker's health
  production: true // Automatically enables compression via https://www.npmjs.com/package/compression
});

// Redis Ratelimiter:
// let utils = new ExpressUtilities({
//   ratelimiter: {
//     type: "memory",
//     options: {
// 5 requests max in 60 seconds
//       maxRequests: 5,
//       timeWindow: 60,
//       url: "redis://localhost:6379",
//     },
//   },
//   expressApp: app,
//   debugMode: true,
//   controllers: {
//     controllers: [__dirname + "/controllers/*.ts"],
//   },
//   healthRoute: '/health', // Returns node.js current worker's health
//   production: true // Automatically enables compression via https://www.npmjs.com/package/compression
// });

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
