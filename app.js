import Module_01 from "./modules/module_01"
import Module_02 from "./modules/module_02"

class App {
	constructor() {
		this._init()
	}

	_polyfillCustomEvent() {
		if (typeof window.CustomEvent === "function") return false;

		function CustomEvent(event, params) {
			params = params || { bubbles: false, cancelable: false, detail: undefined };
			var evt = document.createEvent('CustomEvent');
			evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
			return evt;
		}

		CustomEvent.prototype = window.Event.prototype;
		window.CustomEvent = CustomEvent;
	}

	_init() {
		this._polyfillCustomEvent();
		new Module_01();
		new Module_02();
	}

}
 
new App();