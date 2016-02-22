$(() => {

	const mySlider = $('#slider').slider();
	mySlider.slider('setValue', 8);

	// Initialize Tooltip
	$('[data-toggle="tooltip"]').tooltip();

	// BEGIN Float Label
	const floatInput = $('.float-label input');
	const onClass = 'float-label-on';
	const showClass = 'float-label';

	floatInput.on('focus', function(e) {
		floatLabelHandler.call(e.target);
	});
	floatInput.on('blur', function(e) {
		floatLabelHandler.call(e.target);
	});
	floatInput.on('keyup', function(e) {
		floatLabelHandler.call(e.target);
	});

	function floatLabelHandler() {
		if (!this.value || this.value === '') {
			$(this).removeClass(showClass);
			$(this).prev().removeClass(onClass);
		} else {
			$(this).addClass(showClass);
			$(this).prev().addClass(onClass);
		}
	}
	// END Float Label

	// BEGIN Toggle Switch
	const diceToggle = $('.altered-toggle-control');
	const diceToggleLabel = $('.altered-toggle-label');
	diceToggle.addClass('on');

	// Click event
	diceToggle.on('click', function() {
		if ($(this).hasClass('on')) {
			$(this).removeClass('on').addClass('off');
			diceToggleLabel.text('Off');
		} else {
			$(this).removeClass('off').addClass('on');
			diceToggleLabel.text('On');
		}
	});
	// END Toggle Switch

	// Form Group Button Change
	const channelBtn = $('.altered-btn-group-tab button');

	channelBtn.on('click', function(e) {
		const that = $(this);
		e.preventDefault();
		if (that.hasClass('inactive')) {
			channelBtn.removeClass('active').addClass('inactive');
			that.removeClass('inactive').addClass('active');
		}
	});
	// End Form Group Button Change

	// Select DD & Multi-select DD
	const ddTrigger = $('.altered-select button');

	ddTrigger.on('click', function() {
		const that = this;
		getSelectType.call(that);
	});

	function getSelectType() {
		if (this.hasAttribute('data-select-type') && this.getAttribute('data-select-type') === 'single') {
			const that = this;
			const clickableElements = $('.altered-select .dropdown-menu a');

			if ($(this).hasClass('dropdown-toggle')) {
				var btnText = $(this).prev();
				clickableElements.on('click', function(e) {
					e.preventDefault();
					btnText.text(this.innerHTML);
				});
			} else {
				clickableElements.on('click', function(e) {
					e.preventDefault();
					that.innerHTML = this.innerHTML;
				});
			}
		}
	}
	// End Select DD & Multi-select DD

	// REMOVE/HIDE TAGS
	const pills = $('.altered-pill');
	pills.on('click', function(e) {
		const srcEl = $(e.target);
		if ($(this).hasClass('add')) {
			return;
		} else {
			srcEl.parent().addClass('remove');
			// addNewTag($(this).parent());
		}
	});

	// ADD TAGS
	// (function addTags() {
	// 	var tags = $('.dice-tag.add');
	// 	var inputs = $('.dice-tag.add input');
	// 	tags.on('click', function() {
	// 		$(this).find('.remove').removeClass('remove').focus();
	// 	});
	// 	inputs.on('blur', function() {
	// 		var value = $(this).val();
	// 		if (value) {
	// 			var parentEl = $(this).parent().parent();
	// 			$(this).parent().text(value).removeClass('add').append('<span>X</span>');
	// 			addNewTag(parentEl);
	// 			addTags();
	// 		} else {
	// 			return;
	// 		}
	// 	});
	// }());

	// ADDING NEW TAGS
	// function addNewTag(tagInput) {
	// 	var targetEl = $(tagInput).children().last();
	// 	if ($(targetEl).hasClass('add')) {
	// 		return;
	// 	} else {
	// 		var addTagMarkup = '<div class="dice-tag add"><span>+</span>Add Tag <input class="remove" type="text" placeholder="Add Tag"></div>'
	// 		$(tagInput).append(addTagMarkup);
	// 	}
	// };
	//
	// (function addNewInput() {
	// 	var inputGroup = $('.dice-input-group');
	// 	var addBtn = $('.dice-input-add');
	// 	addBtn.on('click', function() {
	// 		inputGroup.append('<label for="checkbox1" class="checkbox-container"><input class="bootstrap-checkbox" type="checkbox" checked><span class="dice-checkbox icon-check-1"></span>Check me</label>');
	// 		checkboxCheck();
	// 	});
	// }());

	// Alert Close
	const alertEls = $('.altered-alert');
	alertEls.addClass('altered-show-block');
	const closeAlertEls = $('.altered-alert .close');

	closeAlertEls.on('click', function(e) {
		const targetEl = $(e.target);
		if (targetEl.hasClass('altered-show-block')) {
			targetEl.removeClass('altered-show-block');
			targetEl.addClass('altered-hide');
		} else {
			targetEl.removeClass('altered-hide');
			targetEl.addClass('altered-show-block;');
		}
	});
	// End Alert Close
});
