'use strict';

$(document).ready(function () {
	var _this = this;

	var mySlider = $("#slider").slider();
	mySlider.slider('setValue', 8);

	// Initialize Tooltip
	$(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});

	// BEGIN Float Label
	var floatInput = $('.float-label input');
	var onClass = "float-label-on";
	var showClass = "float-label";

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
		if (!this.value || this.value === "") {
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
		console.log('toggle clicked');
		if ($(_this).hasClass('on')) {
			$(_this).removeClass('on').addClass('off');
			diceToggleLabel.text('Off');
		} else {
			$(_this).removeClass('off').addClass('on');
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

	function getSelectType(button) {
		if (this.hasAttribute('data-select-type') && this.getAttribute('data-select-type') === 'single') {
			var that = this;
			var clickableElements = $('.altered-select .dropdown-menu a');

			if ($(this).hasClass('dropdown-toggle')) {
				var btnText = $(this).prev();
				clickableElements.on('click', function (e) {
					e.preventDefault();
					btnText.text(this.innerHTML);
				});
			} else {
				clickableElements.on('click', function (e) {
					e.preventDefault();
					that.innerHTML = this.innerHTML;
				});
			}
		}
	};
	// End Select DD & Multi-select DD

	// Alert Close
	var alertEls = $('.altered-alert');
	alertEls.addClass('altered-show-block');
	var closeAlertEls = $('.altered-alert .close');

	closeAlertEls.on('click', function (e) {
		var targetEl = $(e.target);
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