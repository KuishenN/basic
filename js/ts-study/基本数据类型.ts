// /**
//  * TypeScript和JavaScript有相同的数据类型，还提供了实用的枚举类型
//  * 
//  */

// // 布尔值
// let isDone: boolean = false

// // 数字(包含所有数字都是浮点型)
// let num: number = 500.3

// // 字符串, 字符串中包含了和ES6中的字符串模版
// let personName: string = 'kiven'

// // 数组
// let list1: number[] = [1, 2, 3]
// let list2:Array<number> = [1,2,3]

// // 元组(表示一个元素数量和类型的数组, 各元素的类型不必相同)
// let x: [string, number]
// x = ['hello', 10]

// // 枚举
// // 默认情况下从0开始作为元素编号
// enum Color{Red, Green, Blue}
// let c: Color = Color.Green

// // any 表示未确定的数据类型这些值是动态的内容

// // void 标记没有认可的数据类型， 一般用于函数的返回值和只能赋值undefined和null
// function warnUser(): void{
//   console.log('This is my warning message')
// }
// let unusable:void = undefined

// // null和undefined 事所有类型的子类，可以把null和undefined赋值给任意的数据类型

// // Object表示非基本数据类型
// declare function create(o: object | null): void;
// create({prop: 0}) // OK
// create(null) // OK

// // 类型断言
// let somevalue: any = 'this is a string'
// let strLength: number = (<string>somevalue).length
// console.log(strLength)

// // var let const
// /**
//  * var的缺点
//  *   1. 变量提升，
//  *   2. 没有块级作用域 
//  *   3. 异步的for循环中没有绑定变量 
//  *   4. 可以重复声明
//  *   5. 声明的全局变量绑定在window上
//  * 
//  *   let 
//  *    1. 块级作用域
//  *    2. 不可以重复声明
//  *    3. 存在暂存死区， 
//  *        在块级作用域中的声明变量之前不能使用，块级作用域声明的变量会屏蔽外部全局相同变量
//  *    4. for 循环中的每次循环中的块级作用域绑定
//  *
//  */

//  // 解构
//   // 数组解构 对象解构

//   // 函数声明
//   // 展开运算符


//   // 接口
//   /**
//    * typescript的核心原则就是对值所具有的解构进行类型检查，接口的作用域就是为自定义解构命名
//    */
// // 编译器检测对象必要的属性
// // function printLabel(labelledObj: {label: string}) {
// //   console.log(labelledObj.label)
// // }
// // let myObj = {size: 10, label: 'Size 10 Object'}
// // printLabel(myObj)

// // 使用接口描述
// interface labelledValue {
//   label: string
// }
// function printLabel(labelledObj: labelledValue) {
//   console.log(labelledObj.label)
// }
// let myObj = {size: 10, label: 'Size 10 Object'}
// printLabel(myObj)
import * as $ from 'jquery'
console.log(jQuery)