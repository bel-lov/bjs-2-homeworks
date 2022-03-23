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
let q = sum/arr1.length;
let avg = Number(q.toFixed(2));

  return { min: min, max: max, avg: avg };
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
  let max = func(arr[0]);
  let sumResults = 0;
  for (let i = 0; i < arr.length; i++ ){
    sumResults = func(arr[i]);
    if (max < sumResults){
      max = sumResults;
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let defference = 0;
  let min = array[0];
  let max = array[0];
   for (let i = 0; i < array.length; i++) { 
     if (min > array[i]){
        min = array[i];
      }
     if (max < array[i]){
       max = array[i];
     }
   }
 defference = Math.abs(max - min);
 return defference;
}
