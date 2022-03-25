function compareArrays(arr1, arr2) {
  //let result;

  let result =  arr1.length === arr2.length && arr1.every((item,i)=> item === arr2[i]);

  return result; // boolean
}

/*function compareArrays(arr1, arr2) {

  let result = (arr1.every(
  function compareArrays1(item,i) {
      return arr1.length === arr2.length && arr1[i] === arr2[i]
        }
  ))
  return result;
  }
*/

function advancedFilter(arr) {
  let resultArr = arr.filter((item)=> item > 0).filter((item)=>  item % 3 === 0).map((item) => item *10);

  
  return resultArr; // array
}
