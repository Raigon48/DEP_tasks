/*
https://www.codewars.com/kata/word-count

Can you realize a function that returns word count from a given string?

You have to ensure that spaces in string is a whitespace for real.

What we want and finish of work:

countWords("Hello"); // returns 1 as int
countWords("Hello, World!") // returns 2
countWords("No results for search term `s`") // returns 6
countWords(" Hello") // returns 1
// ... and so on
*/

function countWords(sentence) {
    let result = [];
    let wordArray = sentence.match(/([^\s]+)/g);
    result = wordArray ? wordArray : [];
    return result.length;
}