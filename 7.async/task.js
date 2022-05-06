class AlarmClock{
    constructor(){
      this.alarmCollection = [];
      this.timerId = null;
    }
    
    addClock (time, callback, id){
        if (!id){
            throw new Error("id не был передан");
        }
  else if (this.alarmCollection.find(item => item.id === id))
  {
            return console.error('Такой id уже существует');
        }
    
  else {
     this.alarmCollection.push({id, time, callback});
  }
}

removeClock(id) {
    let callLength = this.alarmCollection.length;
    this.alarmCollection.splice(this.alarmCollection.findIndex(item => item.id === id),1);
    if(callLength < this.alarmCollection.length){
        return true;
    }
    else{
        return false;
    }
     }

     getCurrentFormattedTime(){
        //const timeNow = 
       return new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
          });
    }

    start() {
        let checkClock = (alarm) => {
            if (alarm.time === this.getCurrentFormattedTime()) {
             alarm.callback();
            }
        }
        if (!this.timerId) {
            this.timerId = setInterval(() => { this.alarmCollection.forEach(alarm => checkClock(alarm)) }, 1000)
        }
    }
    stop(){
        if(this.timerId){
          clearInterval(this.timerId);
          this.timerId = null;
        }
    }
    printAlarms(){
        console.log(`Всего будильников ${this.alarmCollection.length}`);
       this.alarmCollection.forEach(item => console.log(`Будильник №${item.id} заведен на ${item.time}`))
      } 

      clearAlarms(){
        this.stop();
        this.alarmCollection = [];
        console.log('Все будильники удалены')
      }
    }

function testCase() {
    clock = new AlarmClock();
    console.log(clock);
    clock.addClock("17:12", () => {
        console.log('Пора вставать');
        clock.printAlarms();
        clock.stop();
        clock.printAlarms()
    }, 1);
    clock.addClock("16:55", () => console.log('Пора вставать'), 2);
    clock.addClock("16:45", () => console.log('Пора вставать'), 3);
    clock.addClock("16:55", () => console.log('Пора вставать'), 4);
    clock.addClock("16:45", () => console.log('Пора вставать'), 5);
    clock.addClock("04:03", () => console.log('Пора вставать'), 6);
    clock.start();
    clock.printAlarms();
    clock.removeClock(2);
}



