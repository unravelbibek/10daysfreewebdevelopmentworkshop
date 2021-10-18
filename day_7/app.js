// user details

console.log(address);
console.log(email);

var username = " \" firstName \" lastName";
var email    = 'someone@gmail.com';

console.log(username);
console.log(email);

var address  = '123 Temple St.';


// this is a comment

// this is another inline comment

/* 

    This is a multi line comment
    I can even go on the next line
    again on the new line
    no errors are displayed on the console due to this

*/

// const
const USER = ' \'sujal\'';

console.log(USER);

// let
let firstName = 'sujal';
let lastName  = 'khatiwada';

// concatenation , here + works as a concatenation operator, which joins two strings in this case
console.log(firstName + ' ' + lastName);



// let firstName = 'another name';
console.log(window.username);

var a1 = 'new variable';
var a1 = 'this is re-declaration';



// data types
// number
// boolean
// undefined
// null
// string
// symbol

// object



var firstNumber  = 30; // here, 10 is the value which is of the data type number


// var secondNumber = "20"; // here, 20 is a string value and it's data type is string
var secondNumber = "lastname";

console.log(firstNumber + ' ' + secondNumber);

// type coercion

// console.log(typeof 1.1+2.45);

// console.log(typeof -1);

// console.log(typeof 'sujal');
// console.log(123);

// boolean
console.log(typeof true);
console.log(typeof false);

let isAProgrammer = true;
let learningToCode = false;

console.log(isAProgrammer);
console.log(learningToCode);

var firstValue = null;
console.log(firstValue);
console.log(typeof firstValue);

const userDetails = {
    firstName : 'sujal',
    lastName  : 'khatiwada',
    age       : '22',
    tel       :'111-111-1111'
};

const countryPrimeMinisters = {
    nepal: 'Nepal pm',
    pakistan: 'Pakistan pm',
    countryCode: 123
};


const mobile = {
    name    : 'Iphone',
    price  : 110000,
    madeIn : 'China'
};

const glass = {
    name: 'Ray ban',
    price: '1100',
    color: 'red',
    soldBy: 'Ram '
};

console.log(typeof userDetails);

console.log(countryPrimeMinisters.pakistan);

console.log(mobile.name);