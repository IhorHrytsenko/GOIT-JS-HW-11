const refs = {
    days: document.querySelector("span[data-value=days]"),
    hours: document.querySelector("span[data-value=hours]"),
    mins: document.querySelector("span[data-value=mins]"),
    secs: document.querySelector("span[data-value=secs]"),
}

const timer = {

    startDate : new Date(),
    endDate : new Date(),
    deltaTime: this.endDate - this.startDate,
    MINUS: 1000,

    timeComponent(deltaTime) {
    const days = Math.floor(this.deltaTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((this.deltaTime % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((this.deltaTime % (1000 * 60)) / 1000);

    return {days, hours, mins, secs}
    },

    // указываем время для обратного отсчета d - дни, h - часы, m - минуты, s - секунды 
    setTimerDay(d){
        return this.endDate.setDate(this.startDate.getDate() + d);
     },

    setTimerHours(h){
        return this.endDate.setHours(this.startDate.getHours() + h);
    },

    setTimerMinutes(m){
        return this.endDate.setMinutes(this.startDate.getMinutes() + m);
    },

    setTimerSeconds(s){
        return this.endDate.setSeconds(this.startDate.getSeconds() + s);
    },

    setDeltaTime(d = 2, h = 0, m = 0, s = 0){
        this.setTimerDay(d);
        this.setTimerHours(h);
        this.setTimerMinutes(m);
        this.setTimerSeconds(s);
        return this.deltaTime = this.endDate.getTime() - this.startDate.getTime();
    },

    changeDeltaTime(){
       return this.deltaTime -= this.MINUS;
     },

}

timer.setDeltaTime(0, 0, 0, 10);


const interval = setInterval(() => {
    if (timer.deltaTime !== 0){
    timer.changeDeltaTime();
    refs.days.textContent = timer.timeComponent(timer.deltaTime).days;
    refs.hours.textContent = timer.timeComponent(timer.deltaTime).hours;
    refs.mins.textContent = timer.timeComponent(timer.deltaTime).mins;
    refs.secs.textContent = timer.timeComponent(timer.deltaTime).secs;
    }
    if(timer.deltaTime === 0){
    refs.days.textContent = "Finish!"; 
    refs.hours.textContent = "Finish!";
    refs.mins.textContent = "Finish!";
    refs.secs.textContent = "Finish!";
    clearInterval(interval);
}
    
}, 1000);


const ddd = new Date(2021, 07, 13, 15,00,00);

console.log(ddd);