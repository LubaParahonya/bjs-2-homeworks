class AlarmClock {
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null;

    }

    addClock(time, callback){
        if(time !== null && callback !== null){
            this.alarmCollection.push({time: time, callback: callback, canCall: true});
           if(this.alarmCollection.some((arr) => arr[time] === time) === true){
            console.warn('Уже присутствует звонок на это же время')
            }
          } 
        else {
           throw new Error("Отсутствуют обязательные аргументы");
        }
   }


    removeClock(time){ 
        this.alarmCollection = this.alarmCollection.filter((item) => item.time !== time)
        }

    getCurrentFormattedTime(){
        const date = new Date()
        return date.toLocaleTimeString().substr(0, 5);

    }

    start(){
        if(this.intervalId === null){  
            setInterval(() => {
                this.alarmCollection.forEach(item => {
                    if((item.time === this.getCurrentFormattedTime()) && item.canCall === true){
                        item.canCall = false
                        item.callback()
                    }
                });  
            }, 1000)
        }

    }

    stop(){
        
        clearInterval(this.intervalId)
        this.intervalId = null

    }

    resetAllCalls(){
        this.alarmCollection.forEach((item) => item.canCall = true )

    }

    clearAlarms(){
        stop();
        this.alarmCollection = [];

    }

}