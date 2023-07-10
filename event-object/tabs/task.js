const tabs = Array.from(document.querySelectorAll(".tab"));
const contents = Array.from(document.querySelectorAll(".tab__content"))

for (let i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener("click", ( event ) => {

		// сначала нам нужно удалить активный класс именно с вкладок
		let tabsChildren = event.target.parentElement.children;
		for (let t = 0; t < tabsChildren.length; t++) {
			tabsChildren[t].classList.remove("tab_active");
		}
		// добавляем активный класс
		tabs[i].classList.add("tab_active");
		// теперь нужно удалить активный класс с блоков содержимого вкладок
		let tabContentChildren = event.target.parentElement.nextElementSibling.children;
		for (let c = 0; c < tabContentChildren.length; c++) {
			tabContentChildren[c].classList.remove("tab__content_active");
		}
		// добавляем активный класс
		contents[i].classList.add("tab__content_active");

	});
}


