//my very first algo challenge
function binarySearch(arr, target){
  const middle = Math.floor(arr.length / 2);
  let newArr = [];
  if(arr[middle] < target){
    newArr = arr.slice(middle);
  }else{
    newArr = arr.slice(0, middle);
  }
  while(newArr.length > 1){
    
   const newMiddle = Math.floor(newArr.length / 2)
   console.log(newMiddle)
   if(newArr.length === 2){
      if(target === newArr[0]){
        return newArr[0]
      }else{
        return newArr[1]
      }
    }
    if(newArr[newMiddle] < target){
    newArr = newArr.slice(newMiddle);
  }else{
    newArr = newArr.slice(0, newMiddle);
  }
  }
}
let arr = [];
for(let i = 1; i <=1000000; i++){
  arr.push(i)
}
const test = binarySearch(arr, 777777)
console.log(test)
