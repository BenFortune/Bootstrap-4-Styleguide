export default function floatLabel() {
	// BEGIN Float Label
	const floatInput = document.querySelectorAll('.float-label input');
	const onClass = 'float-label-on';
	const showClass = 'float-label';

	function floatLabelHandler(event) {
		const that = event.target;

		if (!that.value || that.value === '') {
			that.classList.remove(showClass);
			that.previousElementSibling.classList.remove(onClass);
		} else {
			that.classList.add(showClass);
			that.previousElementSibling.classList.add(onClass);
		}
	}

	for (let i = 0; i < floatInput.length; i++) {
		floatInput[i].addEventListener('focus', floatLabelHandler, false);

		floatInput[i].addEventListener('blur', floatLabelHandler, false);

		floatInput[i].addEventListener('keyup', floatLabelHandler, false);
	}
	// END Float Label
}
