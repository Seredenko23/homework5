function isPrime (num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) return false
  }
  return true
}

function factorial (num) {
  const arr = []
  for (let i = 1; i <= num; i++) {
    arr.push(i)
  }
  return arr.reduce((acc, curVal) => acc * curVal)
}

function fib (num) {
  let a = 0
  let b = 1
  for (let i = 0; i < num; i++) {
    a += b;
    [a, b] = [b, a]
  }
  return a
}

function isSorted (arr) {
  const tempArr = arr.slice().sort((a, b) => {
    return a - b
  })
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== tempArr[i]) return false
  }
  return true
}

function reverse (str) {
  const arr = str.split('')
  const length = arr.length
  for (let i = 0; i < arr.length / 2; i++) {
  	[arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]]
  }
  return arr.join('')
}

function indexOf (arr, el) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) return i
  }
  return -1
}

function isPalindrom (str) {
  let temp = str.toLowerCase().split('')
  temp = temp.map((val) => {
  	if (val !== ' ') return val
  })
  temp = temp.join('')
  for (let i = 0; i < temp.length / 2; i++) {
    if (temp[i] !== temp[temp.length - i - 1]) return false
  }
  return true
}

function missing (arr) {
  const predSum = (arr.length + 1) * (arr.length + 2) / 2
  const sum = arr.reduce((acc, val) => {
    return acc + val
  })
  return predSum - sum
}

function isBalanced (str) {
 	const arr = str.split('')
 	const brackets = []
 	for (let i = 0; i < arr.length; i++) {
 		if (arr[i] === '{') {
 			brackets.push(arr[i])
 		} else if (arr[i] === '}' && brackets.pop() !== '{') {
 			return false
 		}
 	}
 	return !brackets.length
}
