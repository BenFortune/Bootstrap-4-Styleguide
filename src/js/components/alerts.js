export default function alertsClose() {
	// ALERTS CLOSE
	const alertEls = document.querySelectorAll('.altered-alert');
	const closeAlertEls = document.querySelectorAll('.altered-alert .close');

	for (let i = 0; i < alertEls.length; i++) {
		alertEls[i].addEventListener('click', () => {
			alertEls[i].classList.add('altered-show-block');
		});
	}

	for (let i = 0; i < closeAlertEls.length; i++) {
		closeAlertEls[i].addEventListener('click', (e) => {
			const that = e.target;

			if (that.className === 'altered-alert close altered-show-block') {
				that.classList.remove('altered-show-block');
				that.classList.add('altered-hide');
			} else {
				that.classList.remove('altered-hide');
				that.classList.add('altered-show-block');
			}
		});
	}
	// END ALERTS CLOSE
}
