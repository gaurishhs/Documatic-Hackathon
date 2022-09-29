declare namespace Express {
  export interface Response {
    /**
     * Reply with a status code and content
     * @param code
     * @param message
     * @example
     * ```ts
     * // Reply with a status code and a message (any format) 
     * res.reply(200, "Hello World");
     * ```
     */
    reply(code: number, message: any): void;
  }
}
