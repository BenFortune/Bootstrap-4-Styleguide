import miscJquery from './components/misc-jquery';
import floatLabel from './components/float-label';
import toggleSwitch from './components/toggle-switch';
import formButtons from './components/form-buttons';
import pagination from './components/pagination';
import alertsClose from './components/alerts';
import tags from './components/tags';

$(() => {

	miscJquery();
	floatLabel();
	toggleSwitch();
	formButtons();
	pagination();
	alertsClose();
	tags();

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

});
