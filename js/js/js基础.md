# 浅谈前端发展史

- 第一阶段
  - 从C/S(client(应用程序) server)() -> B/S (Brower(浏览器) server)
- 第二阶段:
  - 从静态到动态，从后端到前端 前后端分离
  - 后台：完成数据的分析和业务逻辑编写
  - 前端： 网页制作，js交互效果，数据的交互和绑定
  - 技术栈
    - javascript AJAX(跨域技巧:nginx cors jsonp proxy), jQuery...
- 第三阶段
  - 从前端到全端(从pc到移动端)
    - 技术栈： H5 css3 响应式布局， zepto hybrid(混合APP)
- 从前端到全栈
  - 全栈开发： 前后端都可以，NODE(Express/Koa...)
- 为了前端的发展和维护，js诞生了前端高性能的高性能的框架：Vue React webpack...

## 浏览器基础

- 浏览器内核
  - Webkit内核(v8)
    - Google/Safari/Opera/大部分国内浏览器
  - Gecko内核(Firefox)
  - Trident引擎(Internet)
  - 浏览器内核的作用：按照一定的规范,把代码给予GPU(显卡)绘制成对应的图形和页面等
  - 为什么会痴线兼容性：
    - 部分浏览器提前开发的更好的功能，后期会被W3C收录，但是在收录之前，会出新一定的兼容性

## JavaScript

- JS时一门轻量级的客户端脚本语言(全栈编程语言)
- 编程语言:具备一定逻辑的，拥有自己的编程思想(面向对象[OOP]，面向过程)
- JS的组成部分

  - ECMAScript:JS的核心语法
  - BOM  浏览器对象模型，提供各种API，让js操作浏览器
  - DOM: 文档对象模型,提供各种API让js操作HTML元素(DOM元素)

## JS的变量

- 不是具体的值，是用来存储值的容器，存储的值可以改变,所以称为变量
  - var(es3)
  - function(es3) 创建函数,存储的值是函数
  - let [es6]
  - const [es6] 创建常量
  - import [es6] 给予模块化到处信息
  - class [es6] 给予es6创建类

   ```js
   var [变量名] = 值
   let [变量名] = 值
   const [变量名] = 值
   function 变量名() {

   }
   var n = 13
   ```

- 基本数据类型
  - 数字 number
  - 字符串 string
  - 布尔 boolean
  - null
  - undefined
- 引用数据类型
  - 对象 object
    - 普通对象
    - 数组
    - 正则
    - 日期
    - ...
  - 函数
- ES6新增特殊的类型Symbol,特殊类型

```js
[基本数据类型]
 var n = 13  // 0 -13 10.2 NaN不是一个有效数据，但是属于number类型
var s = 'a'; //'{}'，所有使用单引号和双引号包裹起来的都是字符串
var bool = true // false 只有两个值

[引用数据类型]
var o = {name: 'anan', age: 9} //{}包含多组键值对 {}空对象
var arr = [1,2,3] // []包裹起来的，包含0项或多项，这种是数组对象 []空数组
var reg = /-?(\d|([1-9]\d+))(\.\d+)?/g  // 由元字符组成一个完整的正则
function fn () {
}
[Symbol]
创建出来的是唯一的值
var a = Symbol('anan')
var b = Symbol('anan')
```

## JS代码如何被运行以及运行后如何被输出

- [如何被运行]
  - 把代码运行在浏览器中(浏览器内核来进行渲染)
  - 给予Node来运行(Node也是一个基于V8引擎渲染和解析js的)
- [如何被输出]
  - alert:在浏览器中通过弹窗的方式输出(alert的输出结果都是字符串)
    - alert先计算的表达式的结果，在使用toString()转化输出

  ```js
   var num = 12
   var str = 'anan'
   alert(num)

   alert([12, 23])  // '12,23'
   alert({name: 'anan'}) // '[object Object]'
  ```

  - confrim:和alert的用法一致，只不过包含确认和取消两个按钮,确认返回的是true， 取消返回的是false
  - prompt: 在confirm的基础上增加了输入框
  - console.log: 在浏览器控制台输出日志
  - 控制台
    - Elements: css和html的结构和样式
    - Console: 控制台js代码的输出结果，也可以之间编写js代码
    - Sources: 前端源代码
    - netWork: 网络交互
    - Application: 本地存储 cookies...
  - console.dir: 比log输出的更加详细一些
  - console.table: 把一个Json数据按照表格的方式输出
  - ...
- 数据类型的刨析
  - number数字类型
  NaN:not a number 它是数字类型的，它是一个不是有效数字的值
  - isNaN: 检测当前值是不是有效数字，
    - 返回true代表的是不是有效数字
    - 返回false代表的是有效数字

    ```js
    var num = 12
    isNaN(num) => false 检测变量存储的值是不是为有效数字
    isNaN('12') => false
    isNaN(true) => false
    isNaN(false)=> false
    isNaN(null) => false
    isNaN(undefined) => true
    isNaN({name: 'anan'}) => true
    isNaN([12]) => false
    isNaN([12,13]) => true
    isNaN(/^$/) => true
    isNaN(function(){}) => true
    ```

## 检测机制

### 数字类型

- 首先验证当前的值是不是数字类型的，如果不是，浏览器会把值转换为数字类型
  - 1.1 把非数字类型的值转化为数字
    - 其他基本数据类型的值转化为数字：使用Number()转换
    - Number('12') => 12
    - Number('12px') => NaN
    - Number(true/false) => 1/0
    - Number(null) => 0
    - Number(undefined) => NaN
    - 1.2 引用数字类型转化为数字，先把引用值待用toString()转化为字符串，再使用Number()转化为数字
    - Number({}) => ({}).toString() => [object Object] => NaN
    - Number([12,13]) =>[12,13].toString() => '12,13' => NaN
    - Number([12]) =>[12].toString() => '12' => 12
  - 1.2. 当前检测的值已经是数字类型，是有效数字返回false,不是返回true,数字中只有NaN不是有效数字
  - 1.3. parseInt/ parseFloat
    - parseInt: 把一个字符串当中正数的部分解析出来
    - parseFloat: 把字符串中的消暑部分解析出来

    ```js
    parseInt('12.5px') => 12
    parseFloat('12.5px') => 12.5
    parseInt('width: 12.5px') => NaN
    ```

  - 1.4 NaN的比较
    - NaN和任何值都不相等

    ```js
    if (Number(num) == NaN) {
        alert('num不是有效数字') // 永远不会执行，NaN和任何值都不相等
    }
    if (isNaN(num)) { // 正确的检测方式，而且只有一种
        alert('num不是有效数字')
    }
    ```

### 布尔类型

- Boolean
- !
- !!

```js
 Boolean(0)
 Boolean(NaN)
 Boolean('')
 Boolean(false)
 Boolean(undefined)
 Boolean(null)
```

- **`在js中只有0/NaN/''/false/undefined/null六个值转为Boolean为false，其余的都为true`**

### null 和 undefined

> 都代表空或者没有

- null: 空对象指针， 一般为手动复制的值,后续会分配值
- undefined: 为定义， 一般是浏览器自己分配

### object对象数据类型

> 普通对象

- 由大括号包裹起来的
- 由0到多组属性名和属性值组成
  - 属性：用来描述当前对象的特征，属性名是当前具有这个特
  征，属性值是对这个特征的描述,
- 对象的操作： 对键值对的增删改查

  ```js
  var obj =  {
      name: 'anan',
      age: 18
  }
  [获取]
  obj.name | obj['name'] //对象的属性名一般是字符串格式的，也可能是数字格式(属性值不固定，任何格式都可以) 
  
  [增/该]
  js对象中，属性名是不允许重复的，是唯一的
  obj.name = 'liukui'   => 修改原来name的属性zhi
  obj.sex = '男'  => 没有久添加该属性

  [删除]
  彻底删除，对象中不存在这个属性了
  `delete obj.age`
  假删除： 直接对对象的属性赋值为null
  `obj.age = null`

    在获取属性值的时候，如果当前对象有这个属性名，则可以正常的获取到，
    但是如果没有这个属性名,则获取的结果为undefined
  ```

- 'name'和 name的区别？
  => 'name'是一个字符串，代表的值
  => name是一个变量, 是一个容器，存储的是值的容器
    `obj[name] 存储的是obj对象name变量所对应的值作为obj属性的值`
- 当我们存储的属性值不是字符串或者数字的时候，浏览器会把这个值作为字符串toString()，
然后在进行存储
   `obj[{}] => 获取的时候实现把对象转化为字符串'[object Object]'`, 再对属性存储值

### 数组对象

- 本质：数组也是对象的一种特殊形式，数组的对应索引获取也是键值对获取
- 函数也是对象的一种表现形式

### js的内存运行机制

- 当浏览器内核渲染和解析js执行的时候，会提供一个共js指定的环境，我们把这个环境称为全局作用域
- 代码自上而下指定(之前要进行变量提升)

  ```js
  var a = 12
  var b = a
  b = 13
  console.log(b)

  var obj1 = {n: 100}
  var obj2 = obj1
  obj2['n'] = 200
  consoel.log(obj1.n)

  ```

- 解析
  - 基本数据类型的值会存在在当前作用域下(栈内存中)，
    - 栈内存本身会提供js代码的执行环境
    - 所有的基本数据类型都会在栈内存开辟一个值的存储空间
    `var a = 12`
    - 1 首先开辟一个空间存储12
    - 2 在当前作用域中声明一个变量a( var a )
    - 3 让声明的变量和存储的12进行关联(把存储的12赋值给a)
    `var b = a`
    - 1 基本数据类型是按照值来操作的，把原来a存储的值复制一份给b，和原来的值没有关系
        `b = 13`
    - 1 把新的内存空间的值13与b进行相关联
  - 引用数据类型的值不能存储到当前的作用域下,我们需要在堆中开辟一个空间名，把值凡在堆中的空间中
    - 引用类型是按照地址进行来操作的，复制的是相关联的地址，指向堆中的同一个内存空间，就会相互影响
    - 堆内存存储引用信息的值，对象存储的是键值对，函数存储的是代码字符串
    `var obj1 = {n: 100}`
    - 首先开辟一个内存空间,把对象的值放在这个空间中(地址)
    - 声明一个变量
    - 把这个变量和这个地址进行相关联
  - 引用数据类型和基本数据类型都是先进行存值操作

### 函数数据类型

> 函数数据类型也是按照引用类型来操作， 函数：具有一定功能的代码块

```js
function 函数名() {
    函数体
}
函数名() // 执行
```

- 函数在内存中的存储方式
  - 在堆中存储的函数体是以字符串存储， 函数执行就是把函数体中的代码执行
  - 函数执行的过程中会创建一个私有作用域
  - 函数也是变量，会预解析到作用域顶部