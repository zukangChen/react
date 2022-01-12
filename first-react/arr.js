let arr = [{ name: '1-1', child: [{ name: '1-2', child: [{ name: '1-3', child: [{ name: '1-4' }] }, { name: '1_3', child: [{ name: '1_4' }] }] }] }, { name: '2-1', child: [{ name: '2-2' }, { name: '2_2' }] }, { name: '3-1', child: [{ name: '3-2', child: [{ name: '3-3', child: [{ name: '3-4' }] }, { name: '3_3', child: [{ name: '3_4' }] }] }] }]
let curIndex = 0
function numberArr(n) {
  let numberArr = []
  for (let i = 0; i < n; i++) {
    numberArr[i] = []
  }
  return numberArr
}
let result = numberArr(4)
function flatArr(arr) {
  arr.forEach((item) => {
    const item1 = JSON.parse(JSON.stringify(item))
    if (item && item.child) {
      result[curIndex + 1] = [...result[curIndex + 1], ...item1.child]
    }
    if (curIndex === 0) result[curIndex].push(item1)
  })
  curIndex++
  if (curIndex < 3) flatArr(result[curIndex])
}
flatArr(arr)
console.log('结果：', result)

function getFloor(arr) {
  arr.forEach((item) => {
    let test = JSON.stringify(item).split('children')
    console.log('test', JSON.parse(test))
  })
}
getFloor(arr)