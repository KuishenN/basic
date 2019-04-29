function unique(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let curr = arr[i];
    // 把数组的当前想和后面的每一项进行比较
    for (let j = i + 1; j < arr.length; j++) {
      let nextCurr = arr[j];
      if (curr === nextCurr) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}
var arr = [1, 2, 3, 4, 5, 5, 1, 2, 5, 3, 4, 5];
// console.log(unique(arr))

function unique2(arr) {
  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j].indexOf(curr) !== -1) {
        arr[j].splice(j, 1);
      }
    }
  }
}
console.log(unique2(arr));

function bubble(arr) {
  // 外层循环比较的是比较的轮数
  for (let i = 0; i < arr.length - 1; i++) {
    // 内层循环比较的是元素个数
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // -i为了去掉已经排好的个数
      //  arr[j] //当前本次循环的那一项
      //  arr[j+1] // 当前项的后一项
      if (arr[j] > arr[j + 1]) {
        // 交换两个数的位置
        var temp = arr[j];
        arr[j] = arr[j + 1];
        a[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubble([1, 2, 3, 4, 6]));

// 递归：自己调用自己
function fn(num) {
  if (num > 100) {
    return 0;
  }
  if (num % 15 === 0) {
    return num + fn(num + 1)
  }
  fn(num + 1);
}


// 快速排序： 找到中间的值，
// 值> 中间项 放右边
// 值< 中间项 放左边
/**
 * 快速排序
 * @param {要排序的数组} arr 
 */
function quick(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  //1. 找到当前数组的中间项
  var middleIndex = Math.floor(arr.length / 2)
  // 左右两个数组
  var leftArr = []
  var rightArr = []
  for (let i = 0; i < arr.length; i++) {
    if (i !== middleIndex) { // 中间项的index
      arr[i] >= arr[middleIndex] ? rightArr.push(arr[i]) :  leftArr.push(arr[i])
    }
  } 
  // 组合原数组
  arr = [].concat(quick(leftArr),arr[middleIndex], quick(rightArr))
  return arr
}
console.log(quick([1,2,4,5,6,8,9,1,2,4]))
