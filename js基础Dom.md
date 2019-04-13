
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
- document.body 获取整个body对象
- document.head 获取整个head对象
- [content].querySelector 一个元素对象
- [content].querySelectAll 获取元素集合

