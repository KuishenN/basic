let arr = [1,2,3,4,5]
console.log(arr.splice(0, 3))  // 返回的是攫取的数组
console.log(arr) // 原数组为截取后的数组
console.log(arr.splice(0, 3))

// 纯函数总能够更具输入来做缓存,实现缓存的是一种典型的方式

// var squareNumber = momeize(function(x){return x * x})

// squareNumber(4) // 16
// 缓存的简单实现

var memorize = f => {
  var cache = {}

  return (...args) => {
    var arg = JSON.stringify(args)
    cache[arg] = cache[arg] || f.apply(f, args)
    return cache[arg]
  }
}

//柯理化的概念： 只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数， 你可以一次性地调用 curry 函数，也可以每次只传一个参数分多次调用
let add = (x) => {
  return (y = 0) => {
    return x + y
  }
}
let increment = add(1)
let addTen = add(10)
increment(2)
console.log(increment(2))// 3

addTen(2) // 12


// 存储唯一的函数

let store = {
  nextId: 1,
  cache: {},
  add (fn) {
    if (!fn.id) {
      fn.id = this.nextId++;
      this.cache[fn.id] = fn;
      return true
    }
  }
}

let storeq = {
  cache: {},
  add (fn) {
    if (caches[fn.name] == fn.name) { // 是否有混存
      return cache[fn.name]
    } else {
      cache[fn.name] = fn
    }
  }
}

// 函数的记忆化：记忆化是一种构建函数的处理过程，能够记住上次的处理结果，当函数计算得到结果就会被计算出来, 如果另一个调用也适用
// 相同的参数，我们可以直接使用上次存储下来的值，而不是在计算一次
// 判断一个数字是否为素数
function isPrime(value) {
  if (!isPrime.answaers) {
    isPrime.answaers = {}
  }
  if (isPrime.answaers[value] !== undefined) {
    return isPrime.answaers[value]
  }
  let prime = value !== 0 && value !== 1 
  for (var i = 2; i < value; i++) {
    if (value % i === 0) {
      prime = false;
      break;
    }
  }
  return isPrime.answaers[value] = prime
}

function isPrime1(value) {
  for (let i = 2; i < value; i++) {
    if (value % i == 0) {
      console.log('不是素数')
      break;
    }
  }
  console.log('是素数')
}
console.log(isPrime1(5))

// 定义函数的方式： 1.函数声明 2. 箭头函数 3.函数构造函数 4.生成器函数
// 1. 函数声明
function functionDeclaration(params) {
  function innerFunction(params) {
    
  }
}
function doSomething(action) {
  action()
}

// 立即函数


let arr = [0,1,2,3,4,5,6]
let a = arr.splice(3,1)
// arr.forEach((ele, index) =>{
//   console.log(ele, index)
// })
arr.splice(2, 0, ...a)
console.log(arr)
arr.forEach((ele, index) =>{
  console.log(ele, index)
})