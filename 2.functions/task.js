function getArrayParams(...arr) {
  let max = arr[0];
  let min = arr[0];
  let sum = 0;
  let avg;
  for(let i = 0; i < arr.length; i++){
   if(arr[i] > max) {
     max = arr[i]   
   }
   if(arr[i] < min) {
      min = arr[i]   
    }
   sum += arr[i];

  }
   avg = +((sum/arr.length).toFixed(2))

   return { min: min, max: max, avg: avg };
 }


 function summElementsWorker(...arr) {
  if(arr.length <= 0) {
    return 0
  }
   arr = arr.reduce((sum, elem) => sum += elem)
  return arr
}


function differenceMaxMinWorker(...arr) {
  if(arr.length <= 0){
    return 0
  }
  let i;
  let max = arr[0];
  let min = arr[0];
  let difference;
    for(i = 0; i < arr.length; i++){
      max = Math.max(max, arr[i]);
      min = Math.min(min, arr[i]);  }
    difference = max - min;

    return difference
  }

  function differenceEvenOddWorker(...arr) {
    if(arr.length <= 0) {
      return 0
   }
   let evenSum = 0;
   let oddSum = 0;
   let i;
   let diff;
     for(i = 0; i < arr.length; i++){
       if(arr[i]%2 === 0){
         evenSum += arr[i];
       } else {
         oddSum += arr[i];
       }
     }
    diff = evenSum - oddSum;
    return diff
  }


  function averageEvenElementsWorker(...arr) {
    if(arr.length <= 0) {
      return 0
  }
  let event = 0;
  let i;
  let count = 0;
  let average;
    for(i = 0; i < arr.length; i++){
      if(arr[i]%2 === 0){
        event += arr[i];
        count ++
      }
    }
     average = event/ count;
    return average
  }

    function makeWork (arrOfArr, func) {
      let maxWorkerResult = func(...arrOfArr[0])
      let i;
      for(i = 0; i < arr.length; i++){
        maxWorkerResult = Math.max(maxWorkerResult, func(...arrOfArr[i]));
      }

      return maxWorkerResult
    }