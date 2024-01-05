function getArrayParams(...arr) {
  let max = arr[0];
  let min = arr[0];
  let count = 0
  for(let i in arr){
   if(arr[i] > max) {
     max = arr[i]   
   }
   if(arr[i] < min) {
      min = arr[i]   
    }
   count += arr[i];

  }
   avg = +((count/arr.length).toFixed(2))
   let params = {}
   params.min = min
   params.max = max
   params.avg = avg
   return console.log(params)
 }


 function summElementsWorker(...arr) {
  if(arr.length > 0) {
 arr = arr.reduce(function(sum, elem){
   return sum += elem
 })
  } else {
    arr = 0
  }
  return console.log(arr) 
 
}

function differenceMaxMinWorker(...arr) {
  if(arr.length > 0){
    let i
    let max = arr[0]
    let min = arr[0]
    for(i in arr){
      max = Math.max(max, arr[i])
      min = Math.min(min, arr[i])  }
    difference = max - min
    }
    else {
      difference = 0
    }
    return difference
  }

  function differenceEvenOddWorker(...arr) {
    if(arr.length > 0) {
  let evenSum = 0;
  let oddSum = 0;
  let i;
    for(i in arr){
      if(arr[i]%2 === 0){
        evenSum += arr[i]
      } else {
        oddSum += arr[i]
      }
    }
   diff = evenSum - oddSum }
    else {
      diff = 0
    }
    return diff
  }
  

  function averageEvenElementsWorker(...arr) {
    if(arr.length > 0) {
  let event = 0;
  let i;
  let count = 0;
    for(i in arr){
      if(arr[i]%2 === 0){
        event += arr[i]
        count ++
      }
    }
     average = event/ count}
    else {
        average = 0
    }
    return average
  }

    function makeWork (arrOfArr, func) {
      let maxWorkerResult = func(...arrOfArr[0])
      let i
      for(i in arrOfArr){
        maxWorkerResult = Math.max(maxWorkerResult, func(...arrOfArr[i]))
      }
     
      return maxWorkerResult
    }