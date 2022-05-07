const addThree = (a, b, c) => a + b + c;

function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(',');//args[0] + "," + args[1];
    console.log(hash)
    const idx = cache.findIndex((item)=> item.hash === hash);
    if(idx !== -1){
      console.log('Из кеша: ' + cache[idx].value)
    } else {
      let result = addThree(...args); 
      if(cache.length < 5){
       cache.push({ 'hash':hash, 'value':result}); 
        console.log(cache)
      }
      else{
        cache.shift();
        cache.push({ 'hash':hash, 'value':result}); 
      }
      console.log("Вычисляем: " + result);
    } 
  }  
  return wrapper;
}


const upgradedAddThree = cachingDecoratorNew(addThree);
upgradedAddThree(1,2,3);




function debounceDecoratorNew(func) {
  // Ваш код
}

function debounceDecorator2(func) {
  // Ваш код
}
