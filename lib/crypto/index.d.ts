/// <reference types="node" />
import { BinaryToTextEncoding } from 'crypto';
export declare function hash(algorithm: string, data: string | Buffer | Object, outputFormat: BinaryToTextEncoding): string;
export declare function md5(data: string | Buffer | Object, outputFormat: BinaryToTextEncoding): string;
export declare function sha1(data: string | Buffer | Object, outputFormat: BinaryToTextEncoding): string;
export declare function sha256(data: string | Buffer | Object, outputFormat: BinaryToTextEncoding): string;
export declare function sha512(data: string | Buffer | Object, outputFormat: BinaryToTextEncoding): string;
export declare function hmac(algorithm: string, key: string | Buffer, data: string | Buffer | Object, outputFormat: BinaryToTextEncoding): string;
export declare function base64Encode(data: string | Buffer): string;
export declare function base64Decode(data: string): string;
