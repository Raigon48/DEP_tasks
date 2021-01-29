/*
    https://www.codewars.com/kata/function-composition
*/

function compose(f, g) {
    return (...args) => f(g(...args));
}