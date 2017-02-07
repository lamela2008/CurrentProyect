$(document).ready(function(){
	$('.button-collapse').sideNav({
			menuWidth: 300, // Default is 240
			edge: 'right', // Choose the horizontal origin
			closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
			draggable: true // Choose whether you can drag to open on touch screens
		}
	);

	$("div.loading").css("display", "none");

	$('.datepicker').pickadate({
		selectMonths: true, // Creates a dropdown to control month
		selectYears: 15, // Creates a dropdown of 15 years to control year
		format: 'yyyy-mm-dd'
	});

	$(".datepicker-input").click(function() {
	    $(".datepicker-days .day").click(function() {
	        $('.datepicker').hide();
	    });
	});

	$('select').material_select();

	
})