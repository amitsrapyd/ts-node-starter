export function sum(...nums: number[]) {
  return nums.reduce((t, n) => t + n);
}
/**
 *
 * @param m multiplier
 * @param nums an array of numbers
 * @returns an array of multiplied numbers
 */
export function multiply(m: number, ...nums: number[]) {
  return nums.map((n) => m * n);
}
