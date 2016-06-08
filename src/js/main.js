import miscJquery from './components/misc-jquery';
import floatLabel from './components/float-label';
import toggleSwitch from './components/toggle-switch';
import formButtons from './components/form-buttons';

$(() => {

	miscJquery();
	floatLabel();
	toggleSwitch();
	formButtons();

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
});
