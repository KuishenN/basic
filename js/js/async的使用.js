// 异步执行函数
/**
 * async 开启一个异步函数
 * 返回的是Promise对象
 */
async function timeout() {
  return 'hello world'
}
console.log(timeout())
timeout().then(res => {
  console.log(res)
})
console.log('首先执行')
// async函数中返回一个值，当待用该函数时，内部会调用Promise.resolve()方法把它转换一个promise对象返回，
// 如果timeout函数内容抛出错误，那么就会调用Promise.reject()返回一个promise对象

async function timeout(flag) {
  if (flag) {
    return 'hello world'
  } else {
    throw 'my god, failure'
  }
}
console.log(timeout(true))
console.log(timeout(false))

/**
 * await等待的意思
 * 后面可以跟任意的表达式,我们更多的是放置一个promise对象的表达式,await只能放置在async函数中
 */

  function doubleAfterSeconds(num) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(2 * num)
      }, 2000)
    })
  }
  // async function testResult() {
  //   //  等待后面promise对象执行完毕
  //   let result = await doubleAfterSeconds(30)
  //   console.log(result)
  // }
  testResult()

  async function testResult() {
    let first = await doubleAfterSeconds(30)
    let second = await doubleAfterSeconds(50)
    let thrid = await doubleAfterSeconds(30)
    
  }
  async function awaitFnRe(params) {
    let a1 = await test1()
    let a2 = await test2()
    console.log(a1, a2)
    return 1
  }
  awaitFnRe().then((res) => {
    console.log(res)
  })
  
  function test1 () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('报错了')
      }, 2000)
    })
  }
  function test2 (num2) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(3)
      }, 2000)
    })
  }
  function test3 (num3) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(5)
      }, 2000)
    })
  }

  async function awaitFn(n1) {
    let n2 = await test1(n1)
    let n3 = await test2(n2)
    let n4 = await test3(n3)
  }
  console.log(awaitFn(1))

// async总结
  async function awaitFnRe(params) {
    let a1 = await test1()
    return await test2(a1)
  }
  awaitFnRe().then((res) => {
    console.log(res)
  })
  
  async function test1 () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(2)
      }, 2000)
    })
  }
  async function test2 (num2) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(3 * num2)
      }, 2000)
    })
  }

  /**
   * async总结
   * 1. async函数返回值的是一个promise对象，相当于被promise.reslove(value)包装， 可以进行then和catch操作，
  //  * 2. async使用return直接返回的值相当于promise.reslove(value)操作
   * 
   * 3. await的操作后面跟的是一个promise对象
   * 4. await的异步操作报错reject操作会终止后面的执行,通过外部的catch可以扑捉到
   * 5. await的异步操作是上次的await的值可以在下一个await使用
   */

  var store = {
    nextId: 1,
    cache: {},
    add: function (fn) {
      if (!fn.id) {
        fn.id = this.nextId++
        this.cache[fn.id] = fn
        return true
      }
    }
  }

  // 添加函数 
  function f(){}
  console.log(store.add(f), '添加新函数')
  console.log(store.add(f), '添加新函数')
  console.log(store.cache) 