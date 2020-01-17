namespace a {
  /**
   *  设计范型的目的是在成员之间提供有意义的约束
    1. 类的实力成员
    2. 类的方法
    3. 函数参数
    4. 函数返回值
   */

  // 1. 动机和实例
  class Queue {
    private data = []
    push = (item: number) => this.data.push(item)
    pop = () => this.data.shift()
  }
  // function add(a:number, b:number) {
  //   return a + b
  // }
  // 函数参数类型和返回值也可以通过赋值来推断， foo类型是Add二

  type Adder = (a:number, b: number) => number
  let foo: Adder = (a, b) => a + b

  function foo1(adder:Adder) {
    return adder(1, 2)
  }
}