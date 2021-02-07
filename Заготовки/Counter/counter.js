const days = document.querySelector('.counter__days');
const hours = document.querySelector('.counter__hours');
const minutes = document.querySelector('.counter__minutes');
const seconds = document.querySelector('.counter__seconds');

const currentYear = new Date().getFullYear();
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function updateCounter(){
	const currentTime = new Date();
	const diffTime = nextYear - currentTime;

	const daysLeft = Math.floor(diffTime / 1000 / 60 / 60 / 24);
	const hoursLeft = Math.floor(diffTime / 1000 / 60 / 60) % 24;
	const minutesLeft = Math.floor(diffTime / 1000 / 60) % 60;
	const secondsLeft = Math.floor(diffTime / 1000) % 60;

	days.innerText = daysLeft < 10 ? '0' + daysLeft : daysLeft;
	hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
	minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
	seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
}

updateCounter()
setInterval(updateCounter, 1000);
