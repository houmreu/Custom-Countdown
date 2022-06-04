const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")

let dateI = "07 12 2022"
function countdown()
{
    const useDate = new Date(`${dateI}`)
    const currentDate = new Date()
    const totalseconds = (useDate - currentDate) / 1000

    const days = Math.floor(totalseconds / 3600 / 24)
    const hours = Math.floor(totalseconds / 3600) % 24
    const minutes = Math.floor(totalseconds / 60) % 60
    const seconds = Math.floor(totalseconds) % 60
    daysEl.innerHTML = formatTime(days)
    hoursEl.innerHTML = formatTime(hours)
    minutesEl.innerHTML = formatTime(minutes)
    secondsEl.innerHTML = formatTime(seconds)
}

function formatTime(time)
{
    return time < 10 ? `0${time}` : time;
}

function change()
{
    changeDate()
    changeText()
}

function changeText()
{
    const mainTextI = document.getElementById("mainTextInput")
    const mainText = document.getElementById("mainText")
    mainText.innerHTML = mainTextI.value
}

function changeDate()
{
    dateI = document.getElementById("dateInput").value
}

countdown()
setInterval(countdown, 1000)