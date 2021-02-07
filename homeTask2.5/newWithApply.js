/*
    https://www.codewars.com/kata/new-with-apply
*/

function construct(classRef) {
    const func = classRef.bind.apply(classRef, arguments);
    return new func();
}