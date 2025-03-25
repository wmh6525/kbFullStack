// const { hello } = require('../test2/hello');

// function hello(name) {
//   console.log(name + ' 님, 안녕하세요?');
// }
// hello('홍길동');
// hello('홍길동');

// function outer() {
//   var outvalue = 5678;
//   function inner() {
//   var
//   invalue =  console.log("outvalue = " + outvalue);
//   }
//   inner();

//   console.log("invalue = " + invalue );// 에러
//   }
//   outer();
const hello = (name) => {
  console.log(`${name} 님, 안녕하세요?`);
};
module.exports = hello;
