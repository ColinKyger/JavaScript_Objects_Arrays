console.log("Hello World!\n==========\n");

// Exercise 1
console.log("EXERCISE 1:\n==========\n");
const numbers = [2, 22, 12, 17, 18, 39, 129];

let sumOfValues = 0;
function arraySum(arrOfNum) {
    arrOfNum.forEach((number) => sumOfValues += number);
        return sumOfValues;
    
}

console.log(arraySum(numbers));
// Exercise 2
console.log("EXERCISE 2:\n==========\n");

const newBook = {
    title: 'This is a Book Title',
    pages: 9999,
    readCount: 0,
};

newBook.info = function() {
    return `${newBook.title}, ${newBook.pages}, ${newBook.readCount}`;
}

console.log(newBook.info())

// Exercise 3
console.log("EXERCISE 3:\n==========\n");
let sentence = "The quick brown fox jumps over the lazy dog";

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString(sentence));

// Exercise 4
console.log("EXERCISE 4:\n==========\n");
let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function csvToArray(str, delimiter = ",") {
    const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");
    const arr = rows.map(function (row) {
        const values = row.split(delimiter);
        const el = headers.reduce(function (object, header, index) {
          object[header] = values[index];
          return object;
        }, {});
        return el;
      });
      return arr;
}

console.log(csvToArray(csvData))