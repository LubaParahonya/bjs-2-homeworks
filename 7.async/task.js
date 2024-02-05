class AlarmClock {
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null;

    }

    addClock(time, callback){
        const canCall = true
         if( typeof time === "undefined" || typeof callback === "undefined" ){
            throw new Error("Отсутствуют обязательные аргументы");
         }
         for(let i=0; i< this.intervalId.length; i++){
            if(this.intervalId[i].time === time){
               return console.warn('Уже присутствует звонок на это же время');
            }
         }
         
         let newClock = {time, callback, canCall}
         this.alarmCollection.push(newClock);
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