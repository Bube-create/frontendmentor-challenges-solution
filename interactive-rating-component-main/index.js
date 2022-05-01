const form = document.forms.rating;

const inputCheck = document.querySelectorAll('input[type="radio"]');
const labels = document.querySelectorAll("label");
const mainForm = document.querySelector(".main");
const thankform = document.querySelector(".thanks");
const answer = document.querySelector(".answer");

console.log(thankform.classList.replace("display", "null"));
form.addEventListener("submit", (e) => {
	e.preventDefault();
	inputCheck.forEach((item) => {
		if (item.checked) {
			console.log(item.value);
			answer.textContent = item.value;
			mainForm.classList.add("display");
		}
	});
});
