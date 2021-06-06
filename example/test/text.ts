const arr = [1, 1, 2, 3];
const newArr = [...new Set(arr)];

const arr1 = [];
arr.forEach(ele => {
  if (!arr1.includes(ele)) {
    arr1.push(ele);
  }
})

const arr2 = [];
arr.filter(ele => {
  
})

console.log(newArr, arr1);



