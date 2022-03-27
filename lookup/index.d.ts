/**
 * Return a value from a matched item from lookup array.
 *  
 * @param value `Type`: Value to lookup.
 * @param lookupArray `[Type, Result][]`: Arrays of item to match.
 * @param defaultValue `Result`: The default value to return if there's no match.
 * @returns `Result`: Value based on the first matched item. Will return `null` if there's no match,
 * or `defaultValue` if you define a default value.
 * @example
 * ```
 * const sides = 4;
 * const shapes = lookup(
 *    sides,
 *    [
 *      [4, "Square"],
 *      [3, "Triangle"],
 *    ]
 * );
 * console.log(shapes); // Square
 * ```
 */
export function lookup<T, U>(value: T, lookupArray: [T, U][], defaultValue: U | null): U | null;
