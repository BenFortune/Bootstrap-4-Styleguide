export default function pagination() {
	// PAGINATION
	const paginationLinks = document.querySelectorAll('.page-link');

	for (let i = 0; i < paginationLinks.length; i++) {
		paginationLinks[i].addEventListener('click', (e) => {
			e.preventDefault();
			const that = e.target;

			if (that.parentNode.className === 'page-item active') {
				return;
			} else {
				removeActiveClass();
				that.parentNode.classList.add('active');
			}
		});
	}

	function removeActiveClass() {
		for (let i = 0; i < paginationLinks.length; i++) {
			paginationLinks[i].parentNode.classList.remove('active');
		}
	}
	// END PAGINATION
}
