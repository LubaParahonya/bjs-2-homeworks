class AlarmClock {
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null;

    }

    addClock(time, callback){
        if( typeof time === "undefined" || typeof callback === "undefined" ){
           throw new Error("Отсутствуют обязательные аргументы");
        }
        else {
       if(this.alarmCollection > 0 && this.alarmCollection.includes(time) === true){
        console.warn('Уже присутствует звонок на это же время')
       } 
       else{
        this.alarmCollection.push({time: time, callback: callback, canCall: true});
       }
   
       }
   }


    removeClock(time){
        const result = this.alarmCollection.filter((item) => item.time === time)
        for(let i = 0; i < result.length; i++){
            const addClock = this.alarmCollection.indexOf(result[i]);
            if(addClock > 0){
                this.alarmCollection.splice(addClock, 1);
            }
        }
        }

    getCurrentFormattedTime(){
        const currentTime = new Date().toLocaleDateString().substr(0, 5);
        return currentTime;

    }

    start(){
        if(this.intervalId !== undefined){
            return;
        }else{
            setInterval(() => {
                const currentTime = new Date().toLocaleDateString()
                this.alarmCollection.forEach(DataTransferItem => {
                    if(item.time === currentTime && item.canCall === true){
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