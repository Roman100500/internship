const divEl = document.querySelector(".item");
const pEl = document.querySelector(".text");

(() => {
  setTimeout(() => {
    const promise1 = Promise.resolve("first promise complete").then((res) => {
      console.log(res);
    });
    divEl.style.backgroundColor = "red";
  }, 0);

  setTimeout(() => {
    const promise2 = Promise.resolve("complete");
    promise2.then((res) =>
      console.log(`second promise first microtask ${res}`)
    );
    promise2.then((res) =>
      console.log(`second promise second microtask ${res}`)
    );
  }, 0);

  setTimeout(() => {
    const promise3 = Promise.resolve("third promise complete").then((res) => {
      console.log(res);
    });
    pEl.textContent = "Hello friends";
  }, 0);
})();

// 2 Реализовать клон функции map(отдельная функция или прототип для массивов на ваше усмотрение)

Array.prototype.mapClone = function (cb) {
  if (!(this instanceof Array)) {
    throw new Error(`Array.prototype.mapClone ${this} wrong type`);
  }

  if (typeof cb !== "function") {
    throw new Error(`Array.prototype.mapClone ${cb} is not a function`);
  }

  const newArr = [];

  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i], i, this));
  }

  return newArr;
};

console.log([11, 44, 22, 33].mapClone((item, i, array) => [item, i, array]));
