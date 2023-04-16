// Подключение функционала "Чертоги Фрилансера"
import { isMobile, FLS } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Подключение с node_modules
import tippy from 'tippy.js';

// Подключение стилей с src/scss/libs
import "../../scss/libs/tippy.scss";
// Подключение стилей с node_modules
//import 'tippy.js/dist/tippy.css';

// Запускаем и добавляем в объект модулей
flsModules.tippy = tippy('[data-template]', {
	content(reference) {
		const id = reference.getAttribute('data-template');
		const template = document.getElementById(id);
		return template;
	},
	animation: "custom",
	allowHTML: true,
	arrow: false,
	interactive: true,
	offset: [0, -40],
	zIndex: 0,
	popperOptions: {
		strategy: "fixed",
		modifiers: [{
			name: "flip",
			options: {
				rootBoundary: 'document',
				fallbackPlacements: ['top'],
			}
		}]
	}
});