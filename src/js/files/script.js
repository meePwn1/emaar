// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


window.addEventListener('load', () => {
	const popupOffer = document.querySelector('#offer');

	setTimeout(() => {
		flsModules.popup.open('#offer')
	}, 30000);
})