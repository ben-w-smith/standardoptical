$('#auth').change(function() {
	var input = $(this).val();
	if($(this).val() == '') $(this).removeClass('invalid').addClass('validate');
});

$(window).load(function() {

	$('.preloader-wrapper').fadeOut('350', function() {
		$('main .row').animate({
			opacity: 1
		}, 0, function() {
			TweenMax.staggerFromTo(
				$(this).children('.col'),
				1,
				{ x: 0, y: 50, opacity: 0 },
				{ x: 0, y: 0, opacity: 1},
				0.25
				);
		});
	});

});