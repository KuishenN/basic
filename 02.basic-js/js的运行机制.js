var a = 12
var b = a
console.log(b)

var obj = {
  n: 10,
  m: obj.n * 10
}
console.log(obj.m)

//  obj.n * 10, 在进行创建值的过程中出错

var fn = 1
function fn() {
  console.log(2)
}
console.log(fn(), '122')


for (let i = 0, j = 1; console.log(i), i < 5; i++) {
  console.log(j, 'j')
  console.log(i)
}

var obj = {name: 'anan',}
for (const key in object) {
  if (object.hasOwnProperty(key)) {
    const element = object[key];
    
  }
}

var obj = {name: 'anan', age:8, 1:'ccc', 2: 'aaaa'}
for(var key in obj) {
  console.log(obj[key]);
}