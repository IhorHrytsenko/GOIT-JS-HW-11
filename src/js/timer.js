const refs = {
    days: document.querySelector("span[data-value=days]"),
    hours: document.querySelector("span[data-value=hours]"),
    mins: document.querySelector("span[data-value=mins]"),
    secs: document.querySelector("span[data-value=secs]"),
}

class Timer {
    constructor(day = 1, hour = 0, min = 0, sec = 0, MINUS = 1000){

    this.day = day;
    this.hour = hour;    
    this.minutes = min;
    this.seconds = sec;

    this.startDate = new Date(),
    this.endDate = new Date(),
    this.deltaTime = this.endDate - this.startDate,
    this.MINUS = MINUS
    };

    // возращает значения дня, часов, минут, секунд для отображения на странице
    timeComponent() {
    const days = Math.floor(this.deltaTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((this.deltaTime % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((this.deltaTime % (1000 * 60)) / 1000);

    return {days, hours, mins, secs}
    };

    // указываем время для обратного отсчета d - дни, h - часы, m - минуты, s - секунды 
    setTimerDay(d){
        return this.endDate.setDate(this.startDate.getDate() + d);
     };

    setTimerHours(h){
        return this.endDate.setHours(this.startDate.getHours() + h);
    };

    setTimerMinutes(m){
        return this.endDate.setMinutes(this.startDate.getMinutes() + m);
    };

    setTimerSeconds(s){
        return this.endDate.setSeconds(this.startDate.getSeconds() + s);
    };

    setTime(d = this.day, h = this.hour, m = this.minutes, s = this.seconds){
        this.setTimerDay(d);
        this.setTimerHours(h);
        this.setTimerMinutes(m);
        this.setTimerSeconds(s);
        return this.deltaTime = this.endDate.getTime() - this.startDate.getTime();
    };

    // отнимает от времени указанное значение
    changeDeltaTime(){
       return this.deltaTime -= this.MINUS;
     }

}

const timer = new Timer(0,5,0,5,1000);

timer.setTime(); 

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
