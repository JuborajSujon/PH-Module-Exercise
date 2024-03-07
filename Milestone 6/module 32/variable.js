// var varVariable = "This is var";
// if (true) {
//   console.log(varVariable);
//   let varVariable = "This is let";
//   console.log("hello");

//   var varVariable = "This is var";
//   var varVariable = "This is var again";
// }

// console.log(varVariable);

// if (true) {
//   // let letVariable = "This is let";
//   // let letVariable = "This is let again";
//   // console.log(letVariable);
// }

// // var a = 5;
// // console.log(a);
// let a = 10;
// console.log(a);

// var varVariable = "This is var";

// if (true) {
//   console.log(varVariable);
//   let varVariable = "This is let";
//   console.log(varVariable);
// }

// console.log(varVariable); // Output: "This is var"

var varVariable = "This is var";

if (true) {
  console.log(varVariable); // Access the outer varVariable
  let varVariable = "This is let";
  console.log(varVariable);
}

console.log(varVariable); // Output: "This is var"
