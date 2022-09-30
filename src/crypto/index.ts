import crypto, { BinaryToTextEncoding } from 'crypto';

/**
 * Create a hash of the given string using the given algorithm.
 * @param {string} algorithm The algorithm to use
 * @param {string | Buffer | Object} data The data to hash
 * @param {BinaryToTextEncoding} outputFormat The output format
 * @returns 
 */
export function hash(algorithm: string, data: string | Buffer | Object, outputFormat: BinaryToTextEncoding) {
    let sum = crypto.createHash(algorithm);
    let isBuffer = Buffer.isBuffer(data);
    if (!isBuffer && typeof data === 'object') {
        data = JSON.stringify(data);
    }
    // @ts-ignore
    sum.update(data, isBuffer ? 'binary' : 'utf8');
    return sum.digest(outputFormat || 'hex');
}

/**
 * MD5 hash of the given string.
 * @param data The data to hash
 * @param outputFormat The output format
 */
export function md5(data: string | Buffer | Object, outputFormat: BinaryToTextEncoding) {
    return hash('md5', data, outputFormat);
}

/**
 * SHA1 hash
 * @param data The data to hash
 * @param outputFormat The output format
 */
export function sha1(data: string | Buffer | Object, outputFormat: BinaryToTextEncoding) {
    return hash('sha1', data, outputFormat);
}

/**
 * Sha256 hash of the given string.
 * @param data The data to hash
 * @param outputFormat The output format
 */
export function sha256(data: string | Buffer | Object, outputFormat: BinaryToTextEncoding) {
    return hash('sha256', data, outputFormat);
}
/**
 * Sha512 hash of the given string.
 * @param data The data to hash
 * @param outputFormat The output format
 */
export function sha512(data: string | Buffer | Object, outputFormat: BinaryToTextEncoding) {
    return hash('sha512', data, outputFormat);
}

/**
 * Hmac hash of the given string using the given algorithm.
 * @param algorithm The algorithm to use
 * @param key The key to use
 * @param data The data to encrypt
 * @param outputFormat The output format
 */
export function hmac(algorithm: string, key: string | Buffer, data: string | Buffer | Object, outputFormat: BinaryToTextEncoding) {
    let hmac = crypto.createHmac(algorithm, key);
    let isBuffer = Buffer.isBuffer(data);
    if (!isBuffer && typeof data === 'object') {
        data = JSON.stringify(data);
    }
    // @ts-ignore
    hmac.update(data, isBuffer ? 'binary' : 'utf8');
    return hmac.digest(outputFormat || 'hex');
}

/**
 * Encode given data using base64 encoding.
 * @param data The data to encrypt
 * @returns {string} The encrypted data
 */
export function base64Encode(data: string | Buffer) {
    return Buffer.from(data).toString('base64');
}

/**
 * Decode given data using base64 encoding.
 * @param data The data to decode
 * @returns {string} The decoded data
 */
export function base64Decode(data: string): string {
    return Buffer.from(data, 'base64').toString('utf8');
}