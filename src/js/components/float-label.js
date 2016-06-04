export default function floatLabel() {
	// BEGIN Float Label
	const floatInput = document.querySelectorAll('.float-label input');
	const onClass = 'float-label-on';
	const showClass = 'float-label';

	for (let i = 0; i < floatInput.length; i++) {
		floatInput[i].addEventListener('focus', (e) => {
			floatLabelHandler.call(e.target, 'something else');
		});

		floatInput[i].addEventListener('blur', (e) => {
			floatLabelHandler.call(e.target, 'something else');
		});

		floatInput[i].addEventListener('keyup', (e) => {
			floatLabelHandler.call(e.target, 'something else');
		});
	}

	function floatLabelHandler() {
		if (!this.value || this.value === '') {
			this.classList.remove(showClass);
			this.previousElementSibling.classList.remove(onClass);
		} else {
			this.classList.add(showClass);
			this.previousElementSibling.classList.add(onClass);
		}
	}
	// END Float Label
}
