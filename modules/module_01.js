class Module_01 {
	constructor() {
		this._dispatcher();
	}

	_dispatcher() {
		document.addEventListener("click", function(){
			var event = new CustomEvent('build', { 'detail': "Lorem ipsum dolor sit, amet consectetur" });
			document.dispatchEvent(event);
		})
	}
}

export default Module_01;
