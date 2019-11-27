## Date日期操作基础讲解

> Date是日期类，通过它可以对时间进行处理

```javascript
var time  = new Date()  // => 获取的是当前客户端本机时间， 还可以获取时间的标准格式
[一个日期格式对象]
typeof new Date()  => 'object'

[方法]
time.getFullYear()  获取当前的年份
time.getMonth() 获取当前的月份(0-11)
time.getDate()  获取月份日期
time.getDay()   获取当前的星期(0-6)
time.getHours() 获取小时
time.getMinutes() 获取当前分钟
time.getSeconds() 获取当前秒
time.getMillSeconds() 获取毫秒
time.getTime() 获取时间戳
time.toLocalDateString(): 获取当前的年月日


var time = new Date('2017-10-01')  // 获取指定时间的时间格式
var time = new Date('2017/10/01')  // 获取指定时间的标准时间
```

## 数组的数据类型

> typeof([]) => 'object' 数组也是对象数据类型的
> 类数组 元素的集合(collections) arguments

```js
for(let i = 0; i < arr.length; i++) {
  循环体
}
for(let key in arr) {  
  console.log(arr[key])
}

for循环只能遍历私有的一些属性
forIn循环可以遍历处公共的方法
```

### 数组中常用方法

> Array.prototype

1. 方法的意义
2. 方法参数
3. 方法的返回值
4. 是否改变原数组

```js
let arr = [1,2,3]
push [尾部增加]: 数组末尾追加元素，任意类型参数 返回当前数组长度，原数组发生改变
arr.push(4,5)  //[1,2,3,4,5]
unshift [头部增加]: 数组末尾追加元素，任意类型参数 返回当前数组长, 原数组发生改变
arr.unshift(6) //[6,1,2,3,4,5]
arr[arr.length] = 100 // 使用对象方式，向对象的末尾追加元素

pop[尾部删除]: 数组末尾删除元素，无参数，返回删除项，原数组发生改变
arr.pop() // [6,1,2,3,4,5]
shift[头部删除]: 数组头部删除元素，无参数，返回删除项，原数组发生改变, 之后的元素索引都会改变
delete arr[0] // [1,2,3,4,5] 删除指定索引对象 索引不会发生变化，length的长度不变
arr.length-- // 删除数组的最后一项

splice[增删改] splice(n,m):从索引n开始删除m个, 返回一个删除元素的新数组,原数组发生变化
splice(0)  清空数组
splice() 一项都不删除
splice(n,m,x) 原有删除的基础上插入内容
splice(n,0,x) 在索引n元素的前面插入数据
splice(0,0,x)
splice(arr.length,0,x)
splice(0,1)
splice(arr.length-1)

slice[查询]: 从索引n开始找到m处(不包含m) 返回查询部分组成的数组,原数组不变，slice支持负数索引
slice(n) 从n处找到末尾
slice()  数组克隆

concat[数组拼接] 将多个数组拼接在一起,参数任意元素,返回拼接后的数组，原数组不变

[toString]数组转化为字符串, 把数组转化为字符串以,做分割， 没有参数，返回转换后字符串， 原数组不变
[join]已指定的分隔符转化为字符串,和split相对应
[数组求和]
var total = 0;
//1
for (var i = 0; i < arr.length, i++) {
  total += arr[i]
}
//2
total = eval(arr.join('+')) // 把js字符串当成表达式执行

[reverse]数组排序：数组倒叙, 无参数，排序后的结果,原数组发生改变
[sort]数组排序：数组排序，参数无或者回调函数，排序后的结果，原数组发生变化,回调函数[a-b升序] [b-a降序]

[indeOf/lastIndexOf]:数组是否包含某一项，返回数值当前的索引，查询不到返回-1，原数组不变，
*ie6-8*不兼容字符串方法兼容
Array.prototype.myIndex = function(value) {

  var result = -1
  for(var i = 0; i< this.length; i++) {
    if (value === this[i])
    result = i
    break
  }
  return result
}
[forEach/map/filter/find/reduce...] 数组遍历
arr.forEach(ele => {})
arr.map(ele => { return ele})
```

## 字符串的常用方法
- 1 在js中使用单引号和双引号包裹起来的，由0到多个字符组成的，以数字为索引，从0开始
- 2 有一个length可以获取当前字符串的长度 
  - str.length: 获取字符串的长度
  - str[0]：获取字符串的第一个字符
  - str[str.length-1]: 获取字符串的最后一个字符
  - str[10000] => undefined 不存在的字符是undefined
- 3 常用字符长的方法
  - 3.1 charAt()/charCodeAt(): 返回当前字符的索引的字符， 找不到返回和和当前字符索引的ASCll值
    - [ASCLL 48-57 -> 0-9 65-90 -> a-z 97-122 -> A-Z]
  - 3.2 substr&&substring&&slice
    - 实现字符串的截取
    - substr(n,m): 从字符索引n开始，截取m个字符
    - substring(n,m): 从字符索引n开始，截取索引m处
    - slice(n, m): 从字符索引n开始，截取索引m处,支持负数截取
    - slice(): 字符串的复制
  - 3.3 toUpperCase()/toLowerCase() 字符串全部转换大/小写
  - 3.4 indexOf&&lastIndexOf
    - indexOf():查看当前字符串在当前的索引，不存在返回-1
    - lastIndexOf(): 自右向左查看当前字符串的索引
  - `split():把当前的字符串按照特定字符拆分为数组与数组的join()对应,支持正则表达式`
  - replace(新字符，老字符): 实现字符串的替换，可以使用正则匹配多次
  - trim()/trimLeft()/trimaRight():去除两边的空格