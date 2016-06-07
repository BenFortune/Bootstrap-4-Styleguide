export default function toggleSwitch() {
	// BEGIN Toggle Switch
	const alteredToggle = document.querySelector('.altered-toggle-control');
	const alteredToggleLabel = document.querySelector('.altered-toggle-label');
	alteredToggle.classList.add('on');

	function toggleTheSwitch(event) {
		const that = event.target;

		if(that.parentNode.className === 'altered-toggle-control on') {
			that.parentNode.classList.remove('on');
			that.parentNode.classList.add('off');
			alteredToggleLabel.textContent = 'Off';
		} else {
			that.parentNode.classList.remove('off');
			that.parentNode.classList.add('on');
			alteredToggleLabel.textContent = 'On';
		}
	}

	alteredToggle.addEventListener('click', toggleTheSwitch, false);
	// END Toggle Switch
}
