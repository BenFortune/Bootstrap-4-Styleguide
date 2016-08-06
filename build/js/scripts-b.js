(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = alertsClose;
function alertsClose() {
	// ALERTS CLOSE
	var alertEls = document.querySelectorAll('.altered-alert');
	var closeAlertEls = document.querySelectorAll('.altered-alert .close');

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
	// END ALERTS CLOSE
}

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = floatLabel;
function floatLabel() {
	// BEGIN Float Label
	var floatInput = document.querySelectorAll('.float-label input');
	var onClass = 'float-label-on';
	var showClass = 'float-label';

	function floatLabelHandler(event) {
		var that = event.target;

		if (!that.value || that.value === '') {
			that.classList.remove(showClass);
			that.previousElementSibling.classList.remove(onClass);
		} else {
			that.classList.add(showClass);
			that.previousElementSibling.classList.add(onClass);
		}
	}

	for (var i = 0; i < floatInput.length; i++) {
		floatInput[i].addEventListener('focus', floatLabelHandler, false);

		floatInput[i].addEventListener('blur', floatLabelHandler, false);

		floatInput[i].addEventListener('keyup', floatLabelHandler, false);
	}
	// END Float Label
}

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = formButtons;
function formButtons() {
	// Form Group Button Change
	var channelBtn = document.querySelectorAll('.altered-btn-group-tab button');

	for (var i = 0; i < channelBtn.length; i++) {
		channelBtn[i].addEventListener('click', function (e) {
			e.preventDefault();
			var that = e.target;
			if (that.className === 'btn inactive') {
				resetButtonClass();
				that.classList.remove('inactive');
				that.classList.add('active');
			}
		});
	}

	function resetButtonClass() {
		for (var i = 0; i < channelBtn.length; i++) {
			channelBtn[i].classList.remove('active');
			channelBtn[i].classList.add('inactive');
		}
	}
	// End Form Group Button Change
}

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = miscJquery;
function miscJquery() {
	// Initialize Slider
	var mySlider = $('#slider').slider();
	mySlider.slider('setValue', 8);

	// Initialize Tooltip
	$('[data-toggle="tooltip"]').tooltip();
}

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = pagination;
function pagination() {
	// PAGINATION
	var paginationLinks = document.querySelectorAll('.page-link');

	for (var i = 0; i < paginationLinks.length; i++) {
		paginationLinks[i].addEventListener('click', function (e) {
			e.preventDefault();
			var that = e.target;

			if (that.parentNode.className === 'page-item active') {
				return;
			} else {
				removeActiveClass();
				that.parentNode.classList.add('active');
			}
		});
	}

	function removeActiveClass() {
		for (var i = 0; i < paginationLinks.length; i++) {
			paginationLinks[i].parentNode.classList.remove('active');
		}
	}
	// END PAGINATION
}

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = tags;
function tags() {
	var _this = this;

	// REMOVE/HIDE TAGS
	var pills = $('.altered-pill');
	pills.on('click', function (e) {
		var srcEl = $(e.target);
		if ($(_this).hasClass('add')) {
			return;
		} else {
			console.log('remove the pill work and parent is', srcEl.parent());
			srcEl.parent().addClass('remove');
			addNewTag($(_this).parent());
		}
	});
	// ENDREMOVE/HIDE TAGS

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
	// END ADD TAGS

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
	// END ADDING NEW TAGS
}

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = toggleSwitch;
function toggleSwitch() {
	// BEGIN Toggle Switch
	var alteredToggle = document.querySelector('.altered-toggle-control');
	var alteredToggleLabel = document.querySelector('.altered-toggle-label');
	alteredToggle.classList.add('on');

	function toggleTheSwitch(event) {
		var that = event.target;

		if (that.parentNode.className === 'altered-toggle-control on') {
			that.parentNode.classList.remove('on');
			that.parentNode.classList.add('off');
			alteredToggleLabel.textContent = 'Off';
		} else {
			that.parentNode.classList.remove('off');
			that.parentNode.classList.add('on');
			alteredToggleLabel.textContent = 'On';
		}
	}

	alteredToggle.addEventListener('click', toggleTheSwitch, false);
	// END Toggle Switch
}

},{}],8:[function(require,module,exports){
'use strict';

var _miscJquery = require('./components/misc-jquery');

var _miscJquery2 = _interopRequireDefault(_miscJquery);

var _floatLabel = require('./components/float-label');

var _floatLabel2 = _interopRequireDefault(_floatLabel);

var _toggleSwitch = require('./components/toggle-switch');

var _toggleSwitch2 = _interopRequireDefault(_toggleSwitch);

var _formButtons = require('./components/form-buttons');

var _formButtons2 = _interopRequireDefault(_formButtons);

var _pagination = require('./components/pagination');

var _pagination2 = _interopRequireDefault(_pagination);

var _alerts = require('./components/alerts');

var _alerts2 = _interopRequireDefault(_alerts);

var _tags = require('./components/tags');

var _tags2 = _interopRequireDefault(_tags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(function () {

	(0, _miscJquery2.default)();
	(0, _floatLabel2.default)();
	(0, _toggleSwitch2.default)();
	(0, _formButtons2.default)();
	(0, _pagination2.default)();
	(0, _alerts2.default)();
	(0, _tags2.default)();

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
});

},{"./components/alerts":1,"./components/float-label":2,"./components/form-buttons":3,"./components/misc-jquery":4,"./components/pagination":5,"./components/tags":6,"./components/toggle-switch":7}]},{},[8]);
