# js的基础语法

## 判断条件语句

- 1 if else_if else

  ```js
  [语法]
  if (condition1) {
  } else if (condition2) {
  } else {
  }
  ```

- 2 三元运算符

> 条件?成立执行:不成立执行

- 在三元运算符中不能出现关键词(break, continue , return)

```js
  var a = 5
  a === 10 ? (a+1, console.log(a)): a
```

- 3 switch...case
  - 用于if...else中一个变量在不同情况下的操作
  - *switch...case的匹配方式是按照全等(===)匹配

```js
  var num = 10
  switch (num) {
  case '10' :
    console.log(num)
    break;
  case 10 :
    console.log(num+1)
    break;
  default:
    console.log(num - 1)
  }
```

## 循环

> 重复执行形同的操作

```js
  for(var i=1; i<5; i++) {
    console.log(i)
    break; // 循环终止
    continue; // 结束本次循环
  }
  console.log(i)
```

## DOM操作

- API
  - document.getElementById(): 通过指定的id获取元素
  - document.getElementsByTagName(): 通过指定的标签名获取元素组
  - document.getElementByClassName()

## for..in

- for..in循环主要用于处理对象的
- *注意* obj.key obj['key'] obj[key]的区别

```js
  var obj = {name: 'anan', age:8, 1:'ccc', 2: 'aaaa'}
  for(var key in obj) {
    console.log(key)
  }
```

## 数据类型的转换

> 把其他数据类型转化为number类型

- isNaN Number parseInt parseFloat

```js
  [常用转化]
  true -> 1 false -> 0
  '' -> 0 '12' -> 12 '12px' -> 12/NaN
  'anan' -> NaN null -> 0 undefined -> NaN
  {} /^$/ function(){} -> NaN
  [] -> '' -> 0
  [12] -> 12 [12, 13] -> 12,13 -> 0
```

- Js的数学运算
  - 除了加法之外，其余的都是数学运算, 再遇到字符串的时候，是字符串拼接，只要不遇到字符串就是数学运算
  - 字符串拼接：是把其他数值转换为字符串再拼接
  - 对象的字符串拼接 ({}).toString === '[object, Object]'

```js
  1 - '1' -> 0
  10 * null -> 0
  10/undefined -> NaN
  10 * [10] -> 100
```

- 其他数据类型的值转化为布尔类型

> boolean ! !!

- 只有 0 NaN 空字符串 null undefined 为false,其他的为true
- == 转化为相同类型再比较
- === 类型和值进行比较
- 对象和对象比较，比较的是对象，对象和其他任何值比较都是转换为数字进行比较
- == 比较的时候，不同类型的值都会转化为数字进行比较(null === undefined)
- null和undefined和其他的任何值都不相等

```js
  [] == [] -> false
  [] == 0 -> true
  {} == NaN -> false NaN和任何值都不想等
  [] != [] -> true
  [] == '' -> true
  [] == true -> true
  ![] == true -> false
  [] == false -> true
  ![] == false -> true
```

- Math的常用方法

> Math提供了很多常用的方法

- Math.abs()
- Math.ceil()/math.floor :向上和向下取整
- Math.round() 四舍五入
- Math.random() 获取[0,1)之间的随机小数
- Math.max()/Math.min() 获取一组数的最大/最小值
- Math.pow()/Math.sqrt() 获取数的平方/开平方的值

## String的常用方法

- 1 在js中使用单引号和双引号包裹起来的，由0到多个字符组成的，以数字为索引，从0开始
- 2 有一个length可以获取当前字符串的长度 
  - str.length: 获取字符串的长度
  - str[0]：获取字符串的第一个字符
  - str[str.length-1]: 获取字符串的最后一个字符
  - str[10000] => undefined 不存在的字符是undefined
- 3 常用字符长的方法
  - 3.1 charAt()/charCodeAt(): 返回当前字符的索引的字符和和当前字符索引的ASCll值
    - [ASCLL 48-57 -> 0-9 65-90 -> a-z 97-122 -> A-Z]
  - 3.2 `substr&&substring&&slice`
    - 实现字符串的截取
    - `substr(n,m): 从字符索引n开始，截取m个字符`
    - substring(n,m): 从字符索引n开始，截取索引m处
    - slice(n, m): 从字符索引n开始，截取索引m处,支持负数作为索引
    
  - 3.3 toUpperCase()/toLowerCase() 字符串全部转换大/小写
  - 3.4 `indexOf&&lastIndexOf` 
    > 验证字符串是否存在, IE6-8不兼容
    - indexOf():查看当前字符串在当前的索引，不存在返回-1
    - lastIndexOf(): 自右向左查看当前字符串的索引, 不存在返回-1
  - split():把当前的字符串按照特定字符拆分为数组与数组的join()对应
  - replace(): 实现字符串的替换，可以使用正则匹配多次
  - trim()/trimLeft()/trimaRight():去除两边的空格