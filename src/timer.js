class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.refs = this.ref(this.selector);
        this.updateTimer();
        this.init();
       
    }
    
    ref = (selector) => { 
       return {
        daysRef: document.querySelector(`${selector} [data-value="days"]`),
        hoursRef: document.querySelector(`${selector} [data-value="hours"]`),
        minsRef: document.querySelector(`${selector} [data-value="mins"]`),
        secsRef: document.querySelector(`${selector} [data-value="secs"]`),
        }
     }
   
    init() {        
        this.intervalID = setInterval(this.updateTimer, 1000)
           }
    updateTimer = () => {
            const date = Date.now()
            const deltaTime = this.targetDate.getTime() - date 
            
        if (deltaTime <= 0) {
            clearInterval(this.intervalID)
            this.renderTimer(0)
            return
        }
            this.renderTimer(deltaTime)
    }
   
    renderTimer(deltatime) {
            const time = this.getTimeComponents(deltatime)
        
            this.refs.daysRef.textContent = time.days
            this.refs.hoursRef.textContent = time.hours
            this.refs.minsRef.textContent = time.mins
            this.refs.secsRef.textContent = time.secs
        }
    getTimeComponents(timeDelta) {
        const days = this.pad(Math.floor(timeDelta / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((timeDelta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((timeDelta % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((timeDelta % (1000 * 60)) / 1000));
    return {days, hours, mins, secs}
    }
    pad(value) {
        return String(value).padStart(2, '0')
    }
}


const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Dec 21, 2020 15:53:00'),
});





