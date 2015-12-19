$(document).ready(function() {

	var mySlider = $("#slider").slider();
		mySlider.slider('setValue', 8);

	// Initialize Tooltip
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	});

	// BEGIN Float Label
	var floatInput = $('.float-label input');
	var onClass = "float-label-on";
	var showClass = "float-label";

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
		if (!this.value || this.value === "") {
			$(this).removeClass(showClass);
			$(this).prev().removeClass(onClass);
		} else {
			$(this).addClass(showClass);
			$(this).prev().addClass(onClass);
		}
	}
	// END Float Label

	// BEGIN Dice Toggle
	var diceToggle = $('.altered-toggle-control');
	var diceToggleLabel = $('.altered-toggle-label');
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
	// END Dice Toggle

});
