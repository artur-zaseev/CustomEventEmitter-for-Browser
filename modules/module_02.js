class Module_02 {
	constructor() {
		this._events();
	}

	_events() {
		document.addEventListener("build", this._log);
	}

	_log(text) {
		console.log(text.detail);
	}
}

export default Module_02;