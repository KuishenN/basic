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

// call和applay的使用： 数组的回调函数

let arr = [1,2,3]

Array.prototype.myForeach = function (fn, content) {
  for (let i = 0; i < this.length; i++) {
    fn.call(this[i], i)
  }
}
arr.myForeach(function (item, index) {
  console.log(item, index)
})

function PrivateAttr () {
  var attr = 0
  this.getAttr = function () {
    return attr
  }
  this.setAttr = function () {
    attr++
  }
}

const attr1 = new PrivateAttr()
attr1.setAttr()
attr1.setAttr()
console.log(attr1.getAttr())


function A() { // 定义普通函数
  function B() {  // A中定义普通函数
    console.log('hello closure')
  }
  return B  // A中返回B
}
var c = A()
c() // hello closure  
//函数A中的函数B被A外的一个变量c引用
// 当一个内部函数被其外部函数之外的变量所用时，就形成了一个闭包


/**
 * 在javascript中，如果一个对象不再被引用，那么这个对象就会被GC回收，柔泽这个对象会一致保存在内存中
 * 在例子中，B定义在A中，B依赖了A, 而外部的c又引用了B，所以间接引用了A，也就是说A不会被GC回收,会一直存在内存中
 */
// 储存功能
function A() { // 定义普通函数
  var count = 0
  function B() {  // A中定义普通函数
    count ++
    console.log(count)
  }
  return B  // A中返回B
}
var c = A()
c() // hello closure
c() // hello closure  证明函数A没有被释放掉
c() // hello closure

// 闭包的高级用法，常用写法
// 作用： 初始化一个容器，然后可以给这个容器添加和移除子容器，
(function (document) {
  var viewport
  var obj = {
    init: function (id) {
      viewport = document.querySelector('#'+ id)
    },
    addChild: function (child) {
      viewport.addChild(child)
    },
    removeChild: function (child) {
      viewport.removeChild(child)
    }
  }
  window.jView = obj
})(document)

var f = function (document) {
  var viewport
  var obj = {
    init: function (id) {
      viewport = document.querySelector('#'+ id)
    },
    addChild: function (child) {
      viewport.appendChild(child)
    },
    removeChild: function (child) {
      viewport.removeChild(child)
    }
  }
  window.jView = obj
}
f(document)

/**
 * obj是在f中定义的对象，这个对象定义的方法，执行window.jView = obj就是在window的全局对象
 * 定一个jView变量，并将这个变量执行obj对象，就全局变量jView引用了Obj，而obj对象中的函数又引用了f的变量virwport, 
 * 因此viewport不会被Gc回收， vieqport会一直保存到内存中
 */

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(1)
  }, 500) 
})
p1.then(res => console.log(res))
const p2 = new Promise((resolve, reject) => {
  console.log(3)
})
p2.then(res => console.log(res))
