import * as path from "path";
import os from 'os';
import { WorkerStats } from "../@types/index.interfaces";

const loadClassesFromFiles = function (exported: any, allLoaded: Function[]) {
  if (exported instanceof Function) {
    allLoaded.push(exported);
  } else if (exported instanceof Array) {
    exported.forEach((i: any) => loadClassesFromFiles(i, allLoaded));
  } else if (exported instanceof Object || typeof exported === "object") {
    Object.keys(exported).forEach((key) =>
      loadClassesFromFiles(exported[key], allLoaded)
    );
  }

  return allLoaded;
};

export function loadControllerClassesFromDirs(
  directories: string[],
  formats = [".js", ".ts"]
): Function[] {

  const allFiles = directories.reduce((allDirs, dir) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return allDirs.concat(require("glob").sync(path.normalize(dir)));
  }, [] as string[]);

  const dirs = allFiles
    .filter((file) => {
      const dtsExtension = file.substring(file.length - 5, file.length);
      return (
        formats.indexOf(path.extname(file)) !== -1 && dtsExtension !== ".d.ts"
      );
    })
    .map((file) => {
      return require(file);
    });

  return loadClassesFromFiles(dirs, []);
}

export function getCurrentWorkerHealth(): WorkerStats {
  // Get cpu usage percentage
  const cpuUsage = process.cpuUsage();
  const cpuUsagePercentage =
    ((cpuUsage.user + cpuUsage.system) / 1000000 / os.cpus().length) * 100;
  // Get memory usage 
  const memoryUsage = process.memoryUsage();
  const memoryUsagePercentage =
    (memoryUsage.heapUsed / memoryUsage.heapTotal) * 100;
  let uptime = process.uptime();
  const days = Math.floor(uptime / (60 * 60 * 24));
  uptime -= days * 60 * 60 * 24;
  const hours = Math.floor(uptime / (60 * 60));
  uptime -= hours * 60 * 60;
  const minutes = Math.floor(uptime / 60);
  uptime -= minutes * 60;
  const seconds = Math.floor(uptime);
  uptime -= seconds;
  const uptimeString = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  return {
    cpuUsage: `${Math.round(cpuUsagePercentage)}%`,
    memoryUsage: `${Math.round(memoryUsagePercentage)}%`,
    uptime: uptimeString,
  };
}