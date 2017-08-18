$(document).ready(function(){
	$('#beginners-card').hover(function(){
		$('#overview').hide();
		$('#beginners-overview').removeClass('hidden');
		$('#beginners-overview').show();
	}, function(){
		$('#overview').show();
		$('#beginners-overview').hide();
	});

	$('#select-sdk-card').hover(function(){
		$('#overview').hide();
		$('#select-sdk-overview').removeClass('hidden');
		$('#select-sdk-overview').show();
	}, function(){
		$('#overview').show();
		$('#select-sdk-overview').hide();
	});

	$('#coding-gurus-card').hover(function(){
		$('#overview').hide();
		$('#coding-gurus-overview').removeClass('hidden');
		$('#coding-gurus-overview').show();
	}, function(){
		$('#overview').show();
		$('#coding-gurus-overview').hide();
	});
});