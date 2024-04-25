/**
* This module contains functions to add / subtract / multiply and divide 2 numbers. 
* @module
* 
*/

/**
 * This function helps you add 2 numbers
 * @param a first number
 * @param b second number
 * @returns addition of a and b
 */
export function add(a: number, b: number): number {
    return a + b;
}

/**
 * This function helps find the difference between 2 numbers
 * @param a first number
 * @param b second number
 * @returns difference of a and b
 */
export function subtract(a: number, b: number): number {
    return a - b;
}

/**
 * This function helps find the product of 2 numbers
 * @param a first number
 * @param b second number
 * @returns product of a and b
 */
export function multiply(a: number, b: number): number {
    return a * b;
}

/**
 * This function helps you divide 2 numbers
 * @param a first number
 * @param b second number
 * @returns division of a and b
 */
export function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}