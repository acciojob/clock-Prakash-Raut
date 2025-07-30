//your JS code here. If required.
const timerEle = document.getElementById("timer");

let currentDate = new Date();

setInterval(() => {
	currentDate = new Date();
	timerEle.innerText = currentDate.toLocaleString();
}, 1000)