// 1.Сделать функцию, которая будет позволять вызывать себя последовательно для
// суммирования и/или при выводе и/или математической операции вернет конечный
// результат fucn(2)(3)(5) = 10

// 1 способ

(() => {
  let i = 1;
  function sum(x) {
    console.log(`${i} call = ${x}`);
    i++;
    return (y) => {
      return sum(x + y);
    };
  }

  return sum(2)(3)(5);
})();

// 2 способ

function sum(x) {
  const nextFunc = (y) => sum(x + y);
  nextFunc.valueOf = () => x;
  return nextFunc;
}

// 2.Преобразовать строку в объект, разделяя свойства по точке.
// const str = "one.two.three.four.five"
// {
//   one: {
//     two: {
//       three: {
//         four: {
//           five: {
//           }
//         }
//       }
//     }
//   }
// }

const str = "one.two.three.four.five";
const arr = str.split(".").reverse();
const obj = arr.reduce((acc, item) => {
  let emptyObj = {};
  emptyObj[item] = acc;
  return emptyObj;
}, {});
console.log(obj);
