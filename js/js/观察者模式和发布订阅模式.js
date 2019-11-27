// 发布订阅模式 主要原理是依次去获取调度中心的状态，整个数据是在调度中心获取的， 发布者和观察者之间不存在直接的联系

// class Subject {
//   constructor () {
//     this.arr = []
//   }
//   on(fn) {
//     this.arr.push(fn)
//   }
//   emit() {
//     this.arr.forEach(ele => ele())
//   }
// }
// class Observer {
//   update () {

//   }
// }



// let s1 = new Subject()
// const fs = require('fs')
// const path = require('path')
// console.log(path.resolve(), '12')
// let school = {}
// fs.readFile('./name.txt', 'utf8', (err, data) => {
//   school.name = data
//   s1.emit()
// })
// fs.readFile('./age.txt', 'utf8', (err, data) => {
//   console.log(err, data)
//   school.age = data
//   s1.emit()
// })
// let o1 = new Observer()
// s1.on(() => {
//   console.log('事件1')
// })
// s1.on(() => {
//   if (Object.keys(school).length === 2) {
//     console.log(school)
//   }
// })
// o1.update()


// 观察者模式

class Subject {
  constructor (state) {
    this.state = state
    this.observerList = []
  }
  attach(o) { // 观察者和被观察者之间产生关系
    this.observerList.push(o)
  }
  setState(newState) {
    this.state = newState
    this.observerList.forEach(o => o.update(newState))
  }
}
class Observer {
  constructor(name) {
    this.name = name
  }
  update(state) {
    console.log(this.name + state)
  }
}
let s1 = new Subject('很开心')
let o1 = new Observer('爸爸')
let o2 = new Observer('妈妈')

s1.attach(o1)
s1.attach(o2)
s1.setState('不开心')