namespace Bubble {
	/**
	 * 冒泡排序的思想：循环每一轮，根据当前和后一个进行比较找到每一轮的最大值，让在后面
	 *
	 */
	const bubble = (arr: number[]): number[] => {
		// 外层循环控制循环的次数
		for (let i = 0; i < arr.length - 1; i++) {
			// 循环的轮数 不用和自己进行比较，循环length-1次
			for (let j = 0; j < arr.length - 1 - i; j++) {
				// 每轮比较的次数 i 是当前轮已经拍好，已经排序好的个数
				if (arr[j] > arr[j + 1]) {
					// 前一个比后一个大，放在后面
					[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				}
			}
		}
		return arr;
	};
	let arr = [1, 4, 8, 10, 9, 29, 3];
	console.log(bubble(arr));
}

namespace insert {
	/**
	 *
	 * @param arr 待排序的数组
	 * @核心思想：根据已经排序好的数组中与当前的要排序的元素进行比较，确定当前元素插入的位置,找到要插入的位置
	 */
	const insert = (arr: number[]): number[] => {
		// 假设第一个为最大的数
		let sortedArr: number[] = [arr[0]]; // 存储已经排序的数组
		for (let i = 1; i < arr.length; i++) {  // 待插入的元素
			//循环剩余的数组的匀速确定插入的位置
			for (let j = sortedArr.length-1; j >= 0 ; j--) { // 找到插入的位置
				if (arr[i]> sortedArr[j]) {
					// 插入j位置的上一个
          sortedArr.splice(j+1, 0, arr[i]);
					break;
        }
        if (j == 0) {
          sortedArr.unshift(arr[i])
        }
			}
		}
		return sortedArr;
	};
  let arr = [1, 2, 6, 0, 3, 7, 12, 16];
  
  console.log(insert(arr))


  function sum(n:number):number {
    if (n == 1)  return 1
    return n + sum(n-1)
  }
  console.log(sum(10))
}
namespace c {
	type qucikArr = (arr: number[]) => number[]
	let quick: qucikArr = (arr) => {
		// 1. 知道中间值
		if (arr.length <= 1) return arr
		let middleIndex = Math.floor(arr.length/2)
		let middleValue = arr.splice(middleIndex, 1)[0]
		let leftArr = []
		let rightArr = []
		for (let i = 0; i < arr.length; i++) {
			if (middleValue> arr[i]){
				leftArr.push(arr[i])
			} else {
				rightArr.push(arr[i])
			}
		}
    return quick(leftArr).concat(middleValue, quick(rightArr))
	}
	let arr = [1,5,0,2,7,10,19,6]
}