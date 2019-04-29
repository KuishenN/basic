
# 获取DOM的方法

- 1 document.getElementById 获取一个元素对象
  > 此方法的上下文只能是document
  - ID重复，获取的是第一个元素
  - IE7.0一下，会有兼容问题

- [content].getElementsByTagName 获取元素的集合
  > 可以指定上下文
  - 获取的是元素的集合(类数组集合)
- [content].getElementsByClassName 获取类名的元素集合
  > 通过类名获取元素的集合
  - IE6-8下是不兼容
- document.getElementsByName 获取Name的元素集合
  > 通过元素的Name属性值获取一组元素
  - 上下文也是document
- document.documentElement 获取整个HTML对象
  > 获取HTML的元素对象
  - document.documentElement.clientWidth 获取当前浏览器窗口的宽度
  - document.documentElement.clientHeight获取当前浏览器窗口的宽度
- document.body 获取整个body对象
  > 获取body的元素对象
  - document.body.clientWidth 获取当前浏览器窗口的宽度
  - document.body.clientHeight获取当前浏览器窗口的宽度
- document.head 获取整个head对象

- [content].querySelector 一个元素对象
- [content].querySelectAll 获取元素集合
  > IE6-8下不兼容, 一般多用于IE678
  - querySelector: 获取一个元素对象
  - querySelectAll: 获取的是一个元素的集合

## DOM的节点
  
> node: 节点，浏览器认为在一个HTML中所有的内容都是节点

- 元素节点
  - nodeType: 1
  - nodeName: 大写的标签名
  - nodeValue: null
- 文本节点
  - nodeType: 3
  - nodeName: #text
  - nodeValue: 文本内容
- 注释节点
  - nodeType: 8
  - nodeName: #document
  - nodeValue: 注释内容
- document文档节点
  - nodeType: 9
  - nodeName: #document
  - nodeValue: null

> 节点是用来描述页面中元素之间的关系的，可以根据已知的节点获取所有的节点数据

- childNodes
  > 获取当前元素下所有的子节点
- children
  > 获取所有的元素子节点(元素集合)
- parentNode
  > 获取当前的父节点对象
- previousSibling
  > 获取当前节点的上一个哥哥节点
- nextSibing
  > 获取当前元素的下一个弟弟节点
- previousElementSibling
  > 获取哥哥的元素节点
- nextElemntSibing
  > 获取弟弟的元素节点
- firstChild
  > 获取当前所有节点的第一个
- lastChild
  > 获取元素所有节点的最后一个
- firstElementChild
  > 获取当前所有元素的第一个
- lastElementChild
  > 获取当前所有元素的最后一个

## DOM的增删改

- document.createElement
  > 在js中动态的创建一个标签
- appendChild
  > 在标签中添加新元素
- insertBefore(new, old)
  > 在容器中插入元素
- 解析url的方式
  - 字符串拆分
  - 正则匹配
  - 创建a标签增加href属性

  ```js
  var link = document.createElement('a')
  link.href = '地址'
  link.search
  link.pathname
  link.host
  link.port
  link.protocol
  ```

- removeChild
  > 在当前容器中移除一个元素
- replaceChild
  > 元素替换
- cloneNode(false/true)
  - false: 只克隆当前元素的本身
  - true: 深度克隆，把当前元素以及所有后代进行克隆

- [set/get/remove]Attribute
  > 给当前元素设置/获取/移除属性(一般操作的是自定义属性)
  - box.setAttribute('myIndex', 0)
  - box.getAttribute('myIndex')
  - box.romeoveAttribute('myIndex')

  > 使用xxx.index和xxx.setAttribute(index,0)区别
  - xxx.index: 是把当前操作的元素当作一个普通对象, 为元素设置一个属性()
  - xxx.setAttribute: 把当前元素当作特殊的元素来处理，设置的自定义属性是和页面中的DOM元素映射在一起的(相等于扩展了dom的内置属性，如style, class, 会呈现在dom元素上)
