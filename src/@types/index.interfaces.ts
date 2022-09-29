import http from "http";
import https from "https";
import { RequestHandler } from "express";
import * as core from "express-serve-static-core";
import { RedisClientOptions } from "redis";

interface RatelimiterOptions {
  type: "memory" | "redis";
  options: MemoryRatelimiterOptions | RedisRatelimiterOptions;
}

export interface RedisRatelimiterOptions extends RedisClientOptions {
  maxRequests: number;
  timeWindow: number;
}

export interface MemoryRatelimiterOptions {
  maxRequests: number;
  timeWindow: number;
}

export interface IsRatelimitedResponse {
  ratelimited: boolean;
  retryAfter: number;
}

export interface InitializationOptions {
  healthRoute?: string;
  server?: http.Server | https.Server;
  expressApp: core.Express;
  controllers?: ControllersLoaderOptions;
  ratelimiter?: RatelimiterOptions;
  debugMode?: boolean | false;
  production?: boolean | false;
}

export interface IRoute {
  path: string;
  requestMethod: HttpMethods;
  handlerName: string | symbol;
  middlewares: RequestHandler[];
}

interface Container {
  get(identifier: string | symbol): Function;
}

export interface ControllersLoaderOptions {
  controllers: Function[] | string[];
  container?: Container;
}

export enum HttpMethods {
  POST = "post",
  GET = "get",
  DELETE = "delete",
  PATCH = "patch",
  PUT = "put",
  TRACE = "trace",
  HEAD = "head",
  OPTIONS = "options",
}

export interface WorkerStats {
  cpuUsage: string;
  memoryUsage: string;
  uptime: string;
}