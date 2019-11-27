## Javascript

- 数据类型
  - Number String Boolean undefined null Object Symbol
- parseInt VS parseFloat
  - parseInt: 转化为为整数数字，传递第二个参数可以规定转换的进制，不能转换的字符串返回NaN
  - parseFloat: 转化为小数数值，不急收第二个参数，只能转化为十进制，不能转换的字符串返回NaN

- 数组
  ```js
    Array.prototype的方法
    constructor: ƒ Array()  //数组原型的构造器构造器，指向当前原型对象的构造函数
    concat: ƒ concat() // 拼接多个数组， 返回拼接后的数组
    copyWithin: ƒ copyWithin(target,start, end) // 复制当前数组片段到指定位置进行替换
    fill: ƒ fill() // 讲一个固定值替换数组元素
    find: ƒ find() // 返回第一个符合条件的元素,不存在返回udefined
    findIndex: ƒ findIndex() // 返回第一个符合元素的位置角标，不存在返回-1
    lastIndexOf: ƒ lastIndexOf() //自右向左查询，返回第一个元素符合条件的角标,找不到返回-1
    pop: ƒ pop() // 在数组的末尾删除一个元素
    push: ƒ push() //在数组的末尾添加一个或多个元素
    reverse: ƒ reverse() // 使数组元素反转
    shift: ƒ shift() // 在数组的头部添加元素
    unshift: ƒ unshift() // 在数组的头部删除一个元素
    slice: ƒ slice() // 截取数组的元素片段,原数组不发生变化
    sort: ƒ sort() // 对数组进行排序，改变原数组
    splice: ƒ splice() // 对数组进行插入, 删除 修改操作 原数组发生变化
    includes: ƒ includes() // 数组中是否包含某个元素，返回true 否则返回false
    indexOf: ƒ indexOf() // 获取元素在数组中的位置，不存在返回-1
    join: ƒ join() //以某种方式拼接数组数据，默认是 ','
    keys: ƒ keys() // 返回数据的角标的对象
    entries: ƒ entries()
    values: ƒ values()
    forEach: ƒ forEach() // 声明式遍历
    filter: ƒ filter() // 声明式筛选
    flat: ƒ flat() // 拉平多维数组
    flatMap: ƒ flatMap()
    map: ƒ map() // 数组遍历
    every: ƒ every() // 每个元素都符合
    some: ƒ some() // 有一个元素符合条件
    reduce: ƒ reduce() // 迭代数据
    reduceRight: ƒ reduceRight() // 迭代数据
    toLocaleString: ƒ toLocaleString()  // 数组string
    toString: ƒ toString()
    Symbol(Symbol.iterator): ƒ values() // 是迭代的对象 可以使用forof遍历
    Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}
    __proto__: Object  // 执行数组的原型对象
  ```