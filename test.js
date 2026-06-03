const obj = {
  name: "John",
  age: 30,
  city: "New York",
};

const arr = [1, 2, 3, [4, [4, [5, [6]]]]];
// Object.entries(obj).forEach(([keyof,val])=>console.log(keyof,":",val));
  function flat(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      newArr.push(arr[i]);
    } else {
       newArr=newArr.concat(flat(arr[i]));
    }
  }

  return newArr;
};
let flattenArray = flat(arr);

console.log(flattenArray);
