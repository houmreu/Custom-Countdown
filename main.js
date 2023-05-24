const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const mainTextI = document.getElementById("mainTextInput");
const mainText = document.getElementById("mainText");

let td = Number(String(new Date().getDate()).padStart(2, '0'));
let tm = Number(String(new Date().getMonth() + 1).padStart(2, '0'));
let ty = new Date().getFullYear();
let dateI;

const getData = () => {
    dateI = localStorage.getItem("dateData") != null ? localStorage.getItem("dateData") : (tm != 7 && tm < 12) ? `${7} ${12} ${ty}` : `${7} ${12} ${ty + 1}`;
    mainText.innerHTML = localStorage.getItem("textData") != null ? localStorage.getItem("textData") : "Custom Countdown";
}

setInterval(() => {
    const totalseconds = (new Date(`${dateI}`) - new Date()) / 1000;
    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) % 24;
    const minutes = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds) % 60;
    if(totalseconds > 0){
        daysEl.innerHTML = formatTime(days)
        hoursEl.innerHTML = formatTime(hours);
        minutesEl.innerHTML = formatTime(minutes);
        secondsEl.innerHTML = formatTime(seconds);
    }
}, 1000)

const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
}

const change = () => {
    if(document.getElementById("dateInput").value != ""){
        dateI = document.getElementById("dateInput").value;
        localStorage.setItem("dateData", document.getElementById("dateInput").value);
    }
    if(mainTextI.value != ""){
        mainText.innerHTML = mainTextI.value;
        localStorage.setItem("textData", mainTextI.value);
    }
}

getData();
