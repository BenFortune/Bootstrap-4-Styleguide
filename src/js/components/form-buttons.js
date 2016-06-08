export default function formButtons() {
	// Form Group Button Change
	const channelBtn = document.querySelectorAll('.altered-btn-group-tab button');

	for (let i = 0; i < channelBtn.length; i++) {
		channelBtn[i].addEventListener('click', (e) => {
			e.preventDefault();
			const that = e.target;
			if (that.className === 'btn inactive') {
				resetButtonClass();
				that.classList.remove('inactive');
				that.classList.add('active');
			}
		});
	}

	function resetButtonClass() {
		for (let i = 0; i < channelBtn.length; i++) {
			channelBtn[i].classList.remove('active');
			channelBtn[i].classList.add('inactive');
		}
	}
	// End Form Group Button Change
}
