const btn = document.querySelector(".dice");
const advice = document.querySelector(".advice");
const id = document.querySelector(".id");

function getData() {
	fetch("https://api.adviceslip.com/advice")
		.then((res) => res.json())
		.then((data) => updataDom(data));
}

btn.addEventListener("click", getData);

function updataDom(data) {
	if (data) {
		advice.textContent = data.slip.advice;
		id.textContent = data.slip.id;
	}
}
