function test(name) {
  var output = 'Hello ' + name + '...!';
  return function () {
    console.log(output);
  };
}

let a = test('Javascript')();
