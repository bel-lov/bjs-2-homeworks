function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    let hash = args.join(',');
    console.log(hash);
    const idx = cache.findIndex((item) => item.hash === hash);
    
    if(idx !== -1){
      console.log("Из кеша: " + cache[idx]['value']);
      return "Из кеша: " + cache[idx]['value'];
    } 
      let result = func(...args); 
      
      cache.push({ 'hash': hash, 'value': result}); 
        //console.log(cache);
      
      if(cache.length > 5){
        cache.shift();
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
  };
  return wrapper;
};


// const addThree = (a, b, c) => a + b + c;

// const upgradedAddThree = cachingDecoratorNew(addThree);

// upgradedAddThree(1, 2);
// upgradedAddThree(1, 2);
// upgradedAddThree(1, 2, 3); // вычисляем: 6
// upgradedAddThree(1, 2, 3); // из кэша: 6
// upgradedAddThree(2, 2, 3); // вычисляем: 7
// upgradedAddThree(3, 2, 3); // вычисляем: 8
// upgradedAddThree(4, 2, 3); // вычисляем: 9
// upgradedAddThree(5, 2, 3); // вычисляем: 10
// upgradedAddThree(6, 2, 3); // вычисляем: 11   (при этом кэш для 1, 2, 3 уничтожается)
// upgradedAddThree(1, 2, 3); // вычисляем: 6  (снова вычисляем, кэша нет)
// upgradedAddThree(1,2,3);



function debounceDecoratorNew(func, ms) { 
  let timeout;
  let flag = false;
  return function(){
    const fnCall = ()=> {func.apply(this, arguments)}
    
      clearTimeout(timeout);
      timeout = setTimeout(fnCall, ms)
    if(!flag){
      flag = true;
      return fnCall();
    }
  };
}

const sendSignal = () => console.log("Сигнал отправлен");

const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);

setTimeout(upgradedSendSignal); // Сигнал отправлен
setTimeout(upgradedSendSignal, 300); // проигнорировано так как от последнего вызова прошло менее 2000мс (300 - 0 < 2000)
setTimeout(upgradedSendSignal, 900); // проигнорировано так как времени от последнего вызова прошло: 900-300=600 (600 < 2000)
setTimeout(upgradedSendSignal, 1200); // проигнорировано так как времени от последнего вызова прошло: 1200-900=300 (300 < 2000)
setTimeout(upgradedSendSignal, 2300); // проигнорировано так как времени от последнего вызова прошло: 2300-1200=1100 (1100 < 2000)
setTimeout(upgradedSendSignal, 4400); // Сигнал отправлен так как времени от последнего вызова прошло: 4400-2300=2100 (2100 > 2000)
setTimeout(upgradedSendSignal, 4500); // Сигнал будет отправлен, так как последний вызов debounce декоратора (спустя 4500 + 2000 = 6500) 6,5с

function debounceDecorator2(func, ms) { 
  let timeout;
  let flag = false;
  debounceDecorator2.count = 0;
  return function(){
    const fnCall = ()=> {func.apply(this, arguments)}
    debounceDecorator2.count++
      clearTimeout(timeout);
      timeout = setTimeout(fnCall, ms)
    // fnCall.count += 1;
    console.log(debounceDecorator2.count);
    if(!flag){
      flag = true;
      return fnCall();
    } 
  };
}







