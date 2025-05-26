//  Callback

function sum(a, b) {
  return a + b;
}

function calculate(a, b, callback) {
  return callback(a, b);
}

const ans = calculate(5, 10, sum);
console.log(ans);

// Callback Hell

const getData = (id, getNextData) => {
  setTimeout(() => {
    console.log(`data ${id}`);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
};

getData(1, () => {
  getData(2, () => {
    getData(3);
  });
});
