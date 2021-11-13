$(document).ready(function() {
	$('.item-services').click(function(event) {
		$(this).toggleClass('active').children(".item-services__list").slideToggle(500);
		$('.service-span').toggleClass('active');
	});
});
$(document).ready(function() {
	$('.item-shop').click(function(event) {
		$(this).toggleClass('active').children(".item-shop__list").slideToggle(500);
		$('.shop-span').toggleClass('active');
	});
});
