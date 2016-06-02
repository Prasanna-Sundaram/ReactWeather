// var names = ['Andrew','Julie','Jen'];
//
// names.forEach(function (name){
//   console.log('forEach',name);
// })
//
// names.forEach((name) => {
//   console.log('arrowFunc',name);
// });
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('Andrew'));

// var person = {
//   name: 'Prasanna',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
//
// person.greet();

// Challenge Area

// function add(a,b)
// {
//   return a+b;
// }
//
// console.log(add(1,3));

var addExpression = (num1,num2) =>  num1 + num2;
var addStatement = (num1,num2) => {
 return num1 + num2;
};

console.log('Expression returns ' + addExpression(4,5));
console.log('Statement returns ' + addStatement(4,5));
