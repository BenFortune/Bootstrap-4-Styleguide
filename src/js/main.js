$(document).ready(function() {

	// Initialize Tooltip
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	});

	// BEGIN Float Label Work
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
	// END Float Label Work

	(function diceToggle() {
		console.log('default toggle status');
		var diceToggle = $('.dice-toggle-control');
		var diceToggleLabel = $('.dice-toggle-label');
		diceToggle.addClass('on');

		// Click event
		diceToggle.on('click', function() {
			console.log('toggle clicked');
			if ($(this).hasClass('on')) {
				$(this).removeClass('on').addClass('off');
				diceToggleLabel.text('Off');
			} else {
				$(this).removeClass('off').addClass('on');
				diceToggleLabel.text('On');
			}
		})
	}());

});
