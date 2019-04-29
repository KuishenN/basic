function quick(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  //1. 找到当前数组的中间项
  var middleIndex = Math.floor(arr.length / 2)
  var leftArr = []
  var rightArr = []
  for (let i = 0; i < arr.length; i++) {
    if (i !== middleIndex) {
      arr[i] >= arr[middleIndex] ? rightArr.push(arr[i]) :  leftArr.push(arr[i])
    }
  } 
  arr = [].concat(quick(leftArr),arr[middleIndex], quick(rightArr))
  return arr
}
console.log(quick([1,2,4,5,6,8,9,1,2,4]))
