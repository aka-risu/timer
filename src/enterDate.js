// const datepicker = require('js-datepicker');


// const picker = datepicker('.js-form-day')

// console.log(refs.submitbtn)
 function getDate() {
  const refs = {
    formRef: document.querySelector(".js-form"),
    inputDay: document.querySelector(".js-form-day"),
    inputMonth: document.querySelector(".js-form-month"),
    inputYear: document.querySelector(".js-form-year"),
    submitbtn: document.querySelector(".submit")
}
    let date = ''
    refs.formRef.addEventListener('submit', (e) => handleClick(e));
    // console.dir(refs.inputMonth.value)
    // refs.inputDay.addEventListener('input', (e) => { let day = e.target.value; return day });
    // console.log(day)
    function handleClick(e) {
        e.preventDefault()
        // console.log(day)
        let day = refs.inputDay.value
        let month = refs.inputMonth.value
        let year = refs.inputYear.value
        // refs.inputDay.addEventListener('input', (e) => day = e.target.value);
        // refs.inputMonth.addEventListener('input', (e) => month = e.target.value);
        // refs.inputYear.addEventListener('input', (e) => year = e.target.value);
        // const date = refs.inputMonth.value;
        // const date = e.target.value
        // console.log(day)
        // const d = date 
        // const ddate = date;
        // const a = ddate.split(" ")
        date = `${month} ${day} ${year}`
        console.log(date)
        // const data = new FormData(e.target)
        // console.log(data)
        return date
    }
    return date
}

// console.log(date)
// export 'date'
// refs.inputDay.addEventListener('input', (e) => console.dir(e.target.value))
// `${refs.inputMonth} ${refs.inputDay} ${refs.inputYear} `
// targetDate: new Date('Dec 21, 2020 15:53:00')
// console.dir(refs.inputDay)