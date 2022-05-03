class AlarmClock{
    constructor(){
      this.alarmCollection = [];
      this.timerId = null;
    }
    
    addClock (time, callback, id){
        if (isNaN(id)){
            throw new Error("error text");
        }
  else if (this.alarmCollection.find(item => item.id === id))
  {
            return console.error('Такой id уже существует');
        }
    
  else {
    return this.alarmCollection.push({id, time, callback});
  }
}

removeClock(id) {
    this.alarmCollection.splice(this.alarmCollection.findIndex(item => item.id === id),1);
     }

     getCurrentFormattedTime(){
        const timeNow = new Date();
        const hours = timeNow.getHours().toString();
        const minutes = timeNow.getMinutes().toString();
        let resultTime = "";

      if (minutes.length < 2) {
           resultTime = hours + ":" + 0 + minutes;
        }  else if (minutes.length >= 2) {
           resultTime = hours + ":" + minutes;
        } 
     
        return resultTime
    }

    start() {
        let checkClock = (alarm) => {
            if (alarm.time === this.getCurrentFormattedTime()) {
                return alarm.callback();
            }
        }
        if (this.timerId === null) {
            this.timerId = setInterval(() => { this.alarmCollection.forEach(alarm => checkClock(alarm)) }, 1000)
        }
    }
    stop(){
        if(this.timerId !== undefined){
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



