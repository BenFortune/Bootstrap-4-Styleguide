export default function tags() {
	// REMOVE/HIDE TAGS
	// const pills = $('.altered-pill');
	const pills = document.querySelectorAll('.altered-pill');

	// pills.on('click', (e) => {
	// 	const srcEl = $(e.target);
	// 	if ($(this).hasClass('add')) {
	// 		return;
	// 	} else {
	// 		console.log('remove the pill work and parent is', srcEl.parent());
	// 		srcEl.parent().addClass('remove');
	// 		addNewTag($(this).parent());
	// 	}
	// });
	function setPillEvents() {
		console.log('set pill events function called');
		for (var i = 0; i < pills.length; i++) {
			pills[i].addEventListener('click', removePill);
		}
	}

	function removePill(e) {
		console.log('remove pill function called');
			const srcEl = e.target;
			if (srcEl.classList.contains('add')) {
				console.log('has add class');
				return;
			} else {
				console.log('remove the pill work and parent is', srcEl.parent());
				srcEl.parent().addClass('remove');
				// addNewTag($(this).parent());
			}
	}
	// ENDREMOVE/HIDE TAGS

	// ADD TAGS
	const addPills = $('.altered-pill.add');
	const pillInputs = $('.altered-pill.add input');
	addPills.on('click', (e) => {
		const srcEl = $(e.target);
		$(srcEl).find('.remove').removeClass('remove').focus();
	});
	pillInputs.on('blur', function() {
		const value = $(this).val();
		if (value) {
			const parentEl = $(this).parent().parent();
			$(this).parent().text(value).removeClass('add').append('<span>x</span>');
			addNewTag(parentEl);
		} else {
			return;
		}
	});
	// END ADD TAGS

	// ADDING NEW TAGS
	function addNewTag(pillInput) {
		const targetEl = $(pillInput).children().last();
		if ($(targetEl).hasClass('add')) {
			return;
		} else {
			const addTagMarkup = '<div class="altered-pill add"><span>+</span>Add Tag <input class="remove" type="text" placeholder="Add Tag"></div>';
			$(pillInput).append(addTagMarkup);
		}
	}
	// END ADDING NEW TAGS

	// INITIAL FUNCTION
	setPillEvents();
}
