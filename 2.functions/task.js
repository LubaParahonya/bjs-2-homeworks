function getArrayParams(...arr) {
  let max = arr[0];
  let min = arr[0];
  let count = 0
  for(let i in arr){
   if(arr[i] > arr[i-1]) {
     max = arr[i]   
   }
   if(arr[i] < arr[i-1]) {
      min = arr[i]   
    }
   count += arr[i];
   
  }
   avg = +((count/arr.length).toFixed(2))
   let params = {}
   params.max = max
   params.min = min
   params.avg = avg
   return console.log(params)
 }


 function summElementsWorker(...arr) {
  arr = arr.reduce(function(sum, elem){
    return sum += elem
  })
   console.log(arr)
}

function differenceMaxMinWorker(...arr) {
  let i
  let max = arr[0]
  let min = arr[0]
  for(i in arr){
    max = Math.max(max, arr[i])
    min = Math.min(min, arr[i])  }
  difference = max - min
  return difference
}

function differenceEvenOddWorker(...arr) {
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
   return diff = evenSum - oddSum
  }

  function averageEvenElementsWorker(...arr) {
    let event = 0;
    let i;
    let count = 0;
      for(i in arr){
        if(arr[i]%2 === 0){
          event += arr[i]
          count ++
        }
      }
       return average = event/ count
    }

    function makeWork (arrOfArr, func) {
      let maxWorkerResult = func(...arrOfArr[0])
      let i
      for(i in arrOfArr){
        maxWorkerResult = Math.max(maxWorkerResult, func(...arrOfArr[i]))
      }
     
      return maxWorkerResult
    }