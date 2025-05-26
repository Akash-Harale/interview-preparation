//  Callback

function sum(a, b) {
  return a + b;
}

function calculate(a, b, callback) {
  return callback(a, b);
}

const ans = calculate(5, 10, sum);
console.log(ans);
