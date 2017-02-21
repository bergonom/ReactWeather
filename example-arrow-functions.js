// var names = ['joel','dude', 'leo', 'fart'];
//
// names.forEach(function(name) {
//   console.log("foreach", name);
// })
//
// names.forEach((name) => console.log("arrow", name));
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('Joel'));

function add(a,b) {
  return a + b;
}

var addArrow = (a,b) => a + b;

console.log(add(7,3));
console.log(add(71,33));

console.log(addArrow(7,3));
console.log(addArrow(71,33));
