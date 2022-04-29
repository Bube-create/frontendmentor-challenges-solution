const expandablesControl = document.querySelectorAll(".expandables-toggle");
const expandables = document.querySelectorAll(".expandables");
const iconArrow = document.querySelectorAll(".icon-arrow");
const closeBtn = document.querySelector(".nav-btn__close");
const openBtn = document.querySelector(".nav-btn__open");
const navigation = document.querySelector(".navigation");

function toggleNav(index) {
	if (expandables[index].style.display === "none") {
		expandables[index].style.display = "block";
	} else {
		expandables[index].style.display = "none";
	}
	if (
		iconArrow[index].innerHTML ===
		`<img src="./images/icon-arrow-down.svg">`
	) {
		iconArrow[index].innerHTML = `<img src="./images/icon-arrow-up.svg">`;
	} else {
		iconArrow[index].innerHTML = `<img src="./images/icon-arrow-down.svg">`;
	}
}

expandablesControl.forEach((item, index) => {
	item.addEventListener("click", () => {
		toggleNav(index);
	});
});

openBtn.addEventListener("click", () => {
	navigation.style.display = "block";
});
closeBtn.addEventListener("click", () => {
	navigation.style.display = "none";
});
