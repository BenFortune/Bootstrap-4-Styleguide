'use strict';

$(function () {

	// Initialize Slider
	var mySlider = $('#slider').slider();
	mySlider.slider('setValue', 8);

	// Initialize Tooltip
	$('[data-toggle="tooltip"]').tooltip();

	// BEGIN Float Label
	var floatInput = document.querySelectorAll('.float-label input');
	var onClass = 'float-label-on';
	var showClass = 'float-label';

	for (var i = 0; i < floatInput.length; i++) {
		floatInput[i].addEventListener('focus', function (e) {
			floatLabelHandler.call(e.target, 'something else');
		});

		floatInput[i].addEventListener('blur', function (e) {
			floatLabelHandler.call(e.target, 'something else');
		});

		floatInput[i].addEventListener('keyup', function (e) {
			floatLabelHandler.call(e.target, 'something else');
		});
	}

	function floatLabelHandler() {
		if (!this.value || this.value === '') {
			this.classList.remove(showClass);
			this.previousElementSibling.classList.remove(onClass);
		} else {
			this.classList.add(showClass);
			this.previousElementSibling.classList.add(onClass);
		}
	}
	// END Float Label

	// BEGIN Toggle Switch
	var alteredToggle = document.querySelector('.altered-toggle-control');
	var alteredToggleLabel = document.querySelector('.altered-toggle-label');

	alteredToggle.classList.add('on');

	alteredToggle.addEventListener('click', function (e) {
		console.log('something was clicked');
		var that = e.target;
		if (that.parentNode.className === 'altered-toggle-control on') {
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
	var closeAlertEls = $('.altered-alert .close');

	var _loop = function _loop(i) {
		alertEls[i].addEventListener('click', function () {
			alertEls[i].classList.add('altered-show-block');
		});
	};

	for (var i = 0; i < alertEls.length; i++) {
		_loop(i);
	}

	for (var i = 0; i < closeAlertEls.length; i++) {
		closeAlertEls[i].addEventListener('click', function (e) {
			var that = e.target;

			if (that.className === 'altered-alert close altered-show-block') {
				that.classList.remove('altered-show-block');
				that.classList.add('altered-hide');
			} else {
				that.classList.remove('altered-hide');
				that.classList.add('altered-show-block');
			}
		});
	}
	// End Alert Close
});