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
	const alteredToggle = document.querySelector('.altered-toggle-control');
	const alteredToggleLabel = document.querySelector('.altered-toggle-label');

	alteredToggle.classList.add('on');

	alteredToggle.addEventListener('click', (e) => {
		console.log('something was clicked');
		const that = e.target;
		if(that.parentNode.className === 'altered-toggle-control on') {
			that.parentNode.classList.remove('on');
			that.parentNode.classList.add('off');
			alteredToggleLabel.textContent = 'Off';
		} else {
			that.parentNode.classList.remove('off');
			that.parentNode.classList.add('on');
			alteredToggleLabel.textContent = 'On';
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

	// Multiselect Dropdown
	const multiSelectTrigger = $('[data-select-type="multiple"]');
	multiSelectTrigger.on('click', (e) => {
		const srcEl = $(e.target);
		const parent = $(srcEl).parent();
		if (parent.hasClass('open')) {
			parent.removeClass('open');
		} else {
			parent.addClass('open');
		}
	});


	function getSelectType() {
		if (this.hasAttribute('data-select-type') && this.getAttribute('data-select-type') === 'single') {
			const that = this;
			const clickableElements = $('.altered-select .dropdown-menu a');

			if ($(this).hasClass('dropdown-toggle')) {
				const btnText = $(this).prev();
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
		} else if (this.hasAttribute('data-select-type') && this.getAttribute('data-select-type') === 'multiple') {
			const checkboxes = $('.altered-select input[type="checkbox"]');
			checkboxes.on('click', (e) => {
				const srcElText = $(e.target).parent().text();
				const msButtons = $('[data-select-type="multiple"]');
				for (let button of msButtons) {
					console.log('button in the for loop is', button, srcElText);
					if ($(button).innerHTML !== srcElText) {
						console.log('let us break because this is the wrong button');
						break;
					} else {
						console.log('add some text');
						$(button).innerHTML = srcElText;
					}
					console.log(button);
				}
			});
		}
	}
	// End Select DD & Multi-select DD

	// REMOVE/HIDE TAGS
	const pills = $('.altered-pill');
	pills.on('click', (e) => {
		const srcEl = $(e.target);
		if ($(this).hasClass('add')) {
			return;
		} else {
			srcEl.parent().addClass('remove');
			addNewTag($(this).parent());
		}
	});

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

	// Alert Close
	const alertEls = $('.altered-alert');
	alertEls.addClass('altered-show-block');
	const closeAlertEls = $('.altered-alert .close');

	closeAlertEls.on('click', (e) => {
		const srcEl = $(e.target);
		if (srcEl.hasClass('altered-show-block')) {
			srcEl.removeClass('altered-show-block');
			srcEl.addClass('altered-hide');
		} else {
			srcEl.removeClass('altered-hide');
			srcEl.addClass('altered-show-block;');
		}
	});
	// End Alert Close
});
