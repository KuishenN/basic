/**
 * @desc 时间格式化处理
 * template 要获取的字符串样式
 */
String.prototype.formatTime = function (template = '{0}年{1}月{2}日 {3}:{4}:{5}') {
  let matchAry = this.match(/\d+/g);
  template = template.replace(/\{(\d+)\}/g, function (val, index) {
    return matchAry[index].padStart(2, 0) || '00'
  })
  return template
}
