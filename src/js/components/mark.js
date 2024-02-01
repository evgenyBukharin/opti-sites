const markSection = document.querySelector(".mark");
const togglers = document.querySelectorAll(".mark__label-main");
togglers.forEach((toggler) => {
	toggler.addEventListener("click", () => {
		if (!markSection.classList.contains("mark-opened")) {
			markSection.classList.add("mark-opened");
		} else {
			markSection.classList.remove("mark-opened");
		}
	});
});
