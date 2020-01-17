export {}
const num: number = 123
function indentity(num:number):number {
  return num
}

// 原始类型

let num1: number
let str: string
let bool: boolean

// 数组
let boolArray: boolean[]
boolArray = [true, false]

// boolArray[0] = num

// 接口

interface Name {
  first: string
  second: string
}
let name: Name

name = {
  first: 'kiven',
  second: 'JIM'
}

// 内联类型注解
let name1: {
  first: string
  second: string
}
name = {
  first: 'Kiven',
  second: 'lucy'
}

// 范型：在许多的算法和数据结构中并不会依赖对象的实际类型，然而我仍然想在每个变量强制提供约束

function reverse<T>(items:T[]): T[] {
  const toreturn = []
  for (let i = items.length - 1; i>=0; i--) {
    toreturn.push(items[i])
  }
  return toreturn
}

const sample = [1, 2, 3]
let reversed = reverse<number>(sample)

console.log(reversed)

// 范型接口

interface Array<T> {
  reverse(): T[]
}

// 联合类型

function formatCommandLine(common: string[] | string) {
  let line = '';
  if (typeof common === 'string') {
    line = common.trim()
  } else {
    line = common.join(' ').trim()
  }
}
// 谓词判断
function isString (str: string): boolean {
  return typeof str === 'string'
}


// 交叉类型

// 类型别名


