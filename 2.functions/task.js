// Задание 1
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    if ( arr[i] > max) {
        max = arr[i];
    }
    if (arr[i] < min){
         min = arr[i];
    }
    sum += arr[i]
}
let q = sum/arr.length;
let avg = Number(q.toFixed(2));

  return { min, max, avg};
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}

  return sum;
}


function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);
  let sumResults = 0;
  for (let i = 0; i < arrOfArr.length; i++ ){
    sumResults = func(arrOfArr[i]);
    if (max < sumResults){
      max = sumResults;
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let defference = 0;
  let min = arr[0];
  let max = arr[0];
   for (let i = 0; i < arr.length; i++) { 
     if (min > arr[i]){
        min = arr[i];
      }
     if (max < arr[i]){
       max = arr[i];
     }
   }
 defference = Math.abs(max - min);
 return defference;
}
