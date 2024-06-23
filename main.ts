//Assignment no 21
/*They think of something you could store in a Typescript object.
Write a program that creates objects containing these items.*/

/*let objectname = {                                                        //syntax of object
    key1: 'value1',
    key2: 'value2',
}; */
// let student = {
//     name: 'Saba',
//     rollnumber: 234,
//     grades: [90, 50, 60],
// };
// console.log(student.name);
// console.log(student.grades[1]);

// //type interface 

// let products = {
//     name:"mobile",
//     price:5000,
//     description:"Good in quality more space available",
// };
// console.log(products.price);

// //type interface
// interface Person {
//     name: string;
//     age: number;
//     city: string;
// }
// let person1: Person ={
//     name: "Ali",
//     age: 50,
//     city: "Islamabad",
// }

// let person2: Person ={
//     name: "Juni",
//     age: 45,
//     city: "Lahore",
// }
// console.log(person1.name);
// console.log(person2.name);

let objectContainingItems: {[key: string]: any} ={
   "laptop": {
       name: "laptop",
       price: "7000",
       description: "more ram and fast in process",
 },
    "mouse": {
       name: "mouse",
       price: "5000",
       description:"fast moving cursor",
 },
    "keyboard": {
       name: "keyboard",
       price: "6000",
       description: "godd in typing and fast in performance",
 }
};
console.log(objectContainingItems);

//Assignment no 22
/*Intentional Error: If you haven't recieved an array index error in one of your programs yet,try to make 
one happen.Change an index in one of your programs to produce an index error.Make sure you correct the error 
before closing the program.*/
 let intentionalError : number[] = [1,2,3,5,6,];
 console.log(intentionalError[10]);                     //intentional error produce
 
 let intentionalErrors : number[] = [1,2,3,5,6,];
 console.log(intentionalErrors[2]);
 
 //Assignment no 23
 /*Conditional tests:Write a series of conditional tests.Print a statement describing each test and your prediction
 for the results of each test.Your code should look something like this:
  let car = 'subaru';
  console.log('Is car == 'subaru'? I predict True.')
  console.log(car == 'subaru') 
  Look closely at your results, and make sure you understand why each line evaluate to True or False. 
  Create at least 10 tests.Have at least 5 tests evaluate to True and another 5 tests evaluate False.*/

  //test #1
  let car = 'subaru';
  console.log("Is car == 'subaru'? I predict True.");
  console.log(car == 'subaru');

  //test #2
  console.log("Is car == 'pujaro'? I predict False.");
  console.log(car == 'pujaro');

  //test #3
  console.log("Is car === 'subaru'? I predict True.");
  console.log(car === 'subaru');

  //test #4
  console.log("Is car === 'subaru'? I predict False.");
  console.log(car === 'subaru');

  //test #5
  console.log("Is car.length > 0? I predict True.");
  console.log(car.length > 0);

  //test #6
  console.log("Is car.length < 5? I predict False");
  console.log(car.length < 5);

  //test #7
  console.log("Is car.toUpperCase() === 'SUBARU'? I predict True.");
  console.log(car.toUpperCase() === 'SUBARU');
  
  //test #8
  console.log("Is car.toUpperCase() === 'subaru'? I predict True.");
  console.log(car.toUpperCase() === 'subaru');

  //test #9

  console.log("Is car.toLowerCase() === 'subaru'? I predict True.");
  console.log(car.toLowerCase() === 'subaru');
  
  //test #10
  console.log("Is car.indexof('u')? I predict True.");

 console.log(car.indexOf('u'));

 //Assignment no 24
 /*More Conditional test: you don't have to limit the number of tests you
 create to 10.If you want to try more comparisions,write more tests.Have at least one true and one false result
 for  each of the following:
 Test for equality and inequality with strings.
 Tests using lower case function.
 Numerical tests involving equality and inequality greater than and less than,greater than or equal to,and less than or equal to.
 Tests using "and" and "or" operators.
 Test whether an item in an array.
 Test wether an item is not in an array.*/
 
 //Test for equality and inequality with strings.
 const first1:string = "fine";
 const first2:string = "not fine";

 console.log(first1 === first2);
 console.log(first1 != first2);

// Tests using lower case function
const upperCase:string = "WELLDONE";
const lowerCase:string = "welldone";

console.log(upperCase.toLowerCase()=== lowerCase);


//Numerical tests involving equality and inequality greater than and less than,greater than or equal to,and less than or equal to.

const number1:number = 30;
const number2:number = 40;

console.log(number1 === number2);
console.log(number1 !== number2);
console.log(number1 > number2);
console.log(number1 < number2);
console.log(number1 >= number2);
console.log(number1 <= number2);

//Tests using "and" and "or" operators.

const e:number = 20;
const f:number = 30;
const g:number = 50;

console.log(e < f && f < g);                                        //true
console.log(e > f || f < g);                                        //true

//Test whether an item is in an array.

const item1:number[] = [1,2,3,4,5]
const itemtoFind:number = 4;

console.log(item1.indexOf(itemtoFind) !== -1);                            //true

//Test wether an item is not in an array.

console.log(item1.indexOf(7) === -1);                                      //true

//Assignment no 25
/*Alien colors#1: Imagine an alien was just shot down in a game.Create a variable called alien_color and assign it a value of 'green',
'yellow' or 'red'.
  Write an if statement to test whether the alien's color is green.If it is, print a message that the player just earned 5 points.
  Write one version of this program that passes the if test and another that fails.(The version that fails will have no output.*/

  let alien_color:string = "green";
  if (alien_color = "green") {
   console.log("the player just earned 5 points")
   
  }else{
   "fail"
  }
  let version:number = 10.8;
  if(version = 10.8) {
   console.log("the verion is:", version);

  }else(fail) => {
   console.log();
   
  }
   
  










 
 

  
  
  
  
  
  





