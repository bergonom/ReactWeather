function addPromise(a,b) {
  return new Promise(function(resolve, reject) {
    if(typeof a === "number" && typeof b === "number") {
      resolve(a + b);
    } else {
      reject("One of your arguments is not a number")
    }
  });
}

addPromise(3,4 ).then(function(sum) {
  console.log('sum = ', sum);
}, function(err) {
  console.log('err = ', err);
})
