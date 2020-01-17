// 接口： 是对所有具有的结构进行类型检查。接口的作用是为这些类型接口和为你的代码或第三方代码定义契约

function printLabel(labelledObj:  {label: string}) {
  console.log(labelledObj.label)
}
let myObj = {size: 10, label: 'Size 10 Object'}
// 接口中的类型变量必须全部存在 而且类型匹配
printLabel(myObj)

namespace a {
  interface LabelledObj {
    label: string
  }
  function printLabel(labelledObj:LabelledObj) {
      console.log(labelledObj.label)
  }
  let myObj = {size: 10, label: 'Size 10 Object'}
  printLabel(myObj)
}
namespace b {
  interface SquareConfig {
    color?: string,
    width: number
  }
  function createSquare(config:SquareConfig): {color: string, area: number} {
    let newSquare = {color: 'white', area: 10}
    
    if (config.color) {
      newSquare.color = config.color
    }
    if (config.width) {
      newSquare.area = config.width * config.width
    }
    return newSquare
  }
  let mySquare = createSquare({width: 10})
  console.log(mySquare)

  // 只读属性

  interface Point {
    readonly x: number;
    readonly y: number
  }

  let p1: Point = {x: 3, y: 4}
  console.log(p1.x)
  // p1.x = 10
}
namespace b {
  // 接口表示函数类型

  interface SearchFunc {
    (source:string, subString: string):boolean
  }
}

namespace c {
  // declare const myPoint: {x: number, y: number}

  interface Point {
    x: number;
    y: number
  }
  declare const myPoint: Point
  
  interface Point {
    z: number
  }

  let myPoint1: Point
  myPoint1 = {
    x: 1,
    y: 2,
    z: 3
  }

  // 类实现接口继承, 继承接口的对象必须全部实现类中的属性和方法
  class MyPoint implements Point {
    x: number;
    y: number;
    z: number
  }

  let foo: Point = new MyPoint()

  interface Crazy {
    new (): {
      hello: number
    }
  }

  class CrazyClass implements Crazy {
    constructor() {
      return {hello: 2}
    }
  }
  
  const crazy = new CrazyClass()
} 

namespace e {
  // 枚举类型
  enum CardSuit {
    Clubs,
    Diamonds,
    Hearts,
    Spades
  }
  let Card = CardSuit.Clubs
  console.log(typeof Card)

  // 数字类枚举

  enum Color {
    Red,
    Green,
    Blue
  }
}

namespace d {
  // 参数注解

  let sampleVariable: {bar: number}

  function foo(sampleVariable:{bar: number}) {
    
  }

  // 返回类型注解

  interface Foo {
    foo: string
  }

  function foo1(sample: Foo): Foo {
    return sample
  }
  // 可选参数
  function foo3(bar: number, bas: string = 'hello') {
    console.log(bar, bas)
  }

  // 重载

  function padding(all: number): {top:number, right: number, bottom:number, left: number};
  function padding(topAndBottom: number, leftAndRight: number):{top:number, right: number, bottom:number, left: number};
  function padding(top:number, right: number, bottom: number, left: number): {top:number, right: number, bottom:number, left: number};
  function padding(a: number, b?: number, c?: number, d?:number) {
    if (b== undefined && c=== undefined && d === undefined) {
      b = c = d = a
    } else if (c == undefined && d == undefined) {
      c = a
      d = b
    } 
    return {
      top: a,
      right: b,
      bottom: c,
      left: d
    }
  }
  padding(1)
  padding(2,1)

  // 函数声明
  type LongHand = {
    (a: number): number
  }
  type ShortHand = (a:number) => number
}

namespace f {
  interface ReturnString {
    (): string
  }
  // 重载实现 

  interface Overloaded {
    (foo: string): string;
    (foo: number): number
  }
  function stringOrNumber(foo: number): number;
  function stringOrNumber(foo: string): string;
  function stringOrNumber(foo: any): any {
    if (typeof foo === 'number') {
      return foo * foo
    } else if(typeof foo === 'string') {
      return `hello ${foo}`
    }
  }
  const overloaded: Overloaded = stringOrNumber;

  // 尖头函数
  const simple: (foo:string) => string = foo => foo.toString()

  // 可实例化 

  interface  CallMeWithNewToGetString {
    new (): string
  }
  declare const Foo: CallMeWithNewToGetString
  const bar = new Foo()
}
namespace g {
  // typescript会推断当前的数据类型和属性， 我们可以使用类型断言的方式来覆盖ts的类型推断
  interface Foo {
    bar: number;
    bas: string
  }
  // const foo:Foo = {}
  // (foo as Foo).bar = 123
  // foo.bas = 'hello'

  // as foo <foo>

  // let foo1: any
  // let bar = <string> foo1 
}