'use strict';

$(function () {

	var mySlider = $('#slider').slider();
	mySlider.slider('setValue', 8);

	// Initialize Tooltip
	$('[data-toggle="tooltip"]').tooltip();

	// BEGIN Float Label
	var floatInput = $('.float-label input');
	var onClass = 'float-label-on';
	var showClass = 'float-label';

	floatInput.on('focus', function (e) {
		floatLabelHandler.call(e.target);
	});
	floatInput.on('blur', function (e) {
		floatLabelHandler.call(e.target);
	});
	floatInput.on('keyup', function (e) {
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
	var diceToggle = $('.altered-toggle-control');
	var diceToggleLabel = $('.altered-toggle-label');
	diceToggle.addClass('on');

	// Click event
	diceToggle.on('click', function () {
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
	var channelBtn = $('.altered-btn-group-tab button');

	channelBtn.on('click', function (e) {
		var that = $(this);
		e.preventDefault();
		if (that.hasClass('inactive')) {
			channelBtn.removeClass('active').addClass('inactive');
			that.removeClass('inactive').addClass('active');
		}
	});
	// End Form Group Button Change

	// Select DD & Multi-select DD
	var ddTrigger = $('.altered-select button');

	ddTrigger.on('click', function () {
		var that = this;
		getSelectType.call(that);
	});

	// Multiselect Dropdown
	var multiSelectTrigger = $('[data-select-type="multiple"]');
	multiSelectTrigger.on('click', function (e) {
		var srcEl = $(e.target);
		var parent = $(srcEl).parent();
		if (parent.hasClass('open')) {
			parent.removeClass('open');
		} else {
			parent.addClass('open');
		}
	});

	function getSelectType() {
		var _this = this;

		if (this.hasAttribute('data-select-type') && this.getAttribute('data-select-type') === 'single') {
			(function () {
				var that = _this;
				var clickableElements = $('.altered-select .dropdown-menu a');

				if ($(_this).hasClass('dropdown-toggle')) {
					(function () {
						var btnText = $(_this).prev();
						clickableElements.on('click', function (e) {
							e.preventDefault();
							btnText.text(this.innerHTML);
						});
					})();
				} else {
					clickableElements.on('click', function (e) {
						e.preventDefault();
						that.innerHTML = this.innerHTML;
					});
				}
			})();
		} else if (this.hasAttribute('data-select-type') && this.getAttribute('data-select-type') === 'multiple') {
			var checkboxes = $('.altered-select input[type="checkbox"]');
			checkboxes.on('click', function (e) {
				var srcElText = $(e.target).parent().text();
				var msButtons = $('[data-select-type="multiple"]');
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = msButtons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var button = _step.value;

						if ($(button).hasClass('.dropdown-toggle')) {
							return;
						} else {
							$(button).innerHTML = srcElText;
						}
						console.log(button);
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
			});
		}
	}
	// End Select DD & Multi-select DD

	// REMOVE/HIDE TAGS
	var pills = $('.altered-pill');
	pills.on('click', function (e) {
		var srcEl = $(e.target);
		if ($(undefined).hasClass('add')) {
			return;
		} else {
			srcEl.parent().addClass('remove');
			addNewTag($(undefined).parent());
		}
	});

	// ADD TAGS
	var addPills = $('.altered-pill.add');
	var pillInputs = $('.altered-pill.add input');
	addPills.on('click', function (e) {
		var srcEl = $(e.target);
		$(srcEl).find('.remove').removeClass('remove').focus();
	});
	pillInputs.on('blur', function () {
		var value = $(this).val();
		if (value) {
			var parentEl = $(this).parent().parent();
			$(this).parent().text(value).removeClass('add').append('<span>x</span>');
			addNewTag(parentEl);
		} else {
			return;
		}
	});

	// ADDING NEW TAGS
	function addNewTag(pillInput) {
		var targetEl = $(pillInput).children().last();
		if ($(targetEl).hasClass('add')) {
			return;
		} else {
			var addTagMarkup = '<div class="altered-pill add"><span>+</span>Add Tag <input class="remove" type="text" placeholder="Add Tag"></div>';
			$(pillInput).append(addTagMarkup);
		}
	}

	// Alert Close
	var alertEls = $('.altered-alert');
	alertEls.addClass('altered-show-block');
	var closeAlertEls = $('.altered-alert .close');

	closeAlertEls.on('click', function (e) {
		var srcEl = $(e.target);
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