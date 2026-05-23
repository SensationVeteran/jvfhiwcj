/**
 * Conditionally joins class name strings together, filtering out falsy values.
 *
 * @param classes - A list of class name strings or falsy values to be conditionally joined.
 * @returns A single space-separated string of truthy class names.
 *
 * @example
 * ```ts
 * cn("foo", false, "bar", undefined, "baz")
 * // => "foo bar baz"
 * ```
 */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}
