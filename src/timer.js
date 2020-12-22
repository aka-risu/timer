// import enterDate from "./enterDate";

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
    stopTimer() {
        clearInterval(this.intervalID)
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
let date = ''
// getDate()
const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('02 22 2021'),
});

 const refss = {
    formRef: document.querySelector(".js-form"),
    inputDay: document.querySelector(".js-form-day"),
    inputMonth: document.querySelector(".js-form-month"),
    inputYear: document.querySelector(".js-form-year"),
    submitbtn: document.querySelector(".submit")
}



   
    
    refss.formRef.addEventListener('submit', (e) => handleClick(e));
    
    function handleClick(e) {
        e.preventDefault()
        // let day = refss.inputDay.value
        // let month = refss.inputMonth.value
        // let year = refss.inputYear.value
        // date = new Date(`${month} ${day} ${year}`)

        let dateArray = refss.inputMonth.value.split("-")
        date = new Date(`${dateArray[1]} ${dateArray[2]} ${dateArray[0]}`)
        console.log(date)
        timer.targetDate = date;
        console.log(timer)
        timer.stopTimer()
        timer.init()
        return date
    }
