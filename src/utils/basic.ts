/**
 * Get random slice from an array
 * @param array The array to get the slice from
 * @returns {any} The random slice
 */
export function getRandomItemFromArray(array: any[]): any {
    return array[Math.floor(Math.random() * array.length)];
}

/**
 * Get a random number between min and max
 * @param min The minimum value
 * @param max The maximum value
 * @returns {number} A random number between the given min and max
 */
export function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Get a random string of the given length
 * @param length The length of the string to generate
 * @returns {string} The generated string
 */
export function getRandomString(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

/**
 * Wait for a given amount of time
 * @param ms The number of milliseconds to wait
 * @returns {Promise} A promise that resolves after the given number of milliseconds
 */
export async function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

