const num2: number = 124

function indentity(num:number):number {
  return num -1
}

console.log(indentity(100))

let num1: number;
let str1: string;
let bool: boolean;

num1 = 123
num1 = 124.345

str1 = '1234'

bool = false

// 数组

let boolArray: boolean[]

boolArray = [true, false]
console.log(boolArray[0], boolArray[1])
console.log(boolArray.length)

// 接口是typescript 能合并众多类型声明到一个类型中

interface Name {
  first: string;
  second: string
}

let basicName: Name

basicName = {
  first: 'John',
  second: 'Deo'
}
// 特殊类型 any null undefined void

let power: any;
power = '123'

power = 123

let num: number;
power = num

// null和undefined被标注了any类型一样，都能被复制给任意类型的变量

let num5: number
num5 = null

function log(message: string):void {
  console.log(message)
}

// 算法和数据结构并不会依赖对象的实际类型， 我们仍要每个变量强制进行约束, 在函数中接收一个列表，并且返回这个列表的返乡排序
// 这里的约束指的是传入到函数的参数和函数的返回值

function reverse<T>(items:T[]): T[] {
  const toreturn = []
  for (let i = items.length - 1; i >= 0; i--) {
    toreturn.push(items[i])
  }
  return toreturn
}

const sample = [1,2,3]
let reversed = reverse(sample)
console.log(reversed)

interface Point {
  x: number,
  y: number
}
declare const myPoint: Point
interface Point {
  z: number
}
// 类可以实现接口
interface Point1 {
  x: number;
  y:number;
  z: number
}
class MyPoint implements Point1 {
  x: number;
  y: number;
  z: number
}

let foo: Point = new MyPoint()

// 数字型枚举与数字类型

enum CardSuit {
  Cluds,
  Diamonds,
  Hearts,
  Spades
}

let Card = CardSuit.Cluds
Card = 1
enum Color {
  Red,
  Green,
  Blue
}

let col = Color.Red
let col1 = Color[0]
console.log(col, col1)

// 数字型枚举和字符串枚举
enum Tristate {
  False,
  True,
  Unknown
}
console.log(Tristate[0])



