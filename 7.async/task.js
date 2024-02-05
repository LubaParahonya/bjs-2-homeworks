class AlarmClock {
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null;

    }

    addClock(time, callbackFunc){
        if( typeof time === "undefined" || typeof callbackFunc === "undefined" ){
           throw new Error("Отсутствуют обязательные аргументы");
        }
        else {
        for(let i=0; i< this.intervalId.length; i++){
           if(this.intervalId[i].time === time){
              return console.warn('Уже присутствует звонок на это же время');
           }
   
       this.alarmCollection.push({time: time, callbackFunc: callback, canCall: true});
        }
   
   
       }
   }


    removeClock(time){
        const result = this.alarmCollection.filter((time) => this.alarmCollection.time === time)
        const addClock = this.alarmCollection.indexOf(result);
            if(addClock > 0){
                this.alarmCollection.splice(addClock, 1);
            }
      
        }

    getCurrentFormattedTime(){
        const currentTime = new Date().toLocaleDateString();
        return currentTime;

    }

    start(){
        if(this.intervalId !== undefined){
            return;
        }


    }

    stop(){
        clearInterval(this.intervalId)
        this.intervalId = null

    }

    resetAllCalls(){
        forEach((canCall) => canCall => true )

    }

    clearAlarms(){
        stop();
        this.alarmCollection = [];

    }

}