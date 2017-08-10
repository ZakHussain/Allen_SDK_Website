$(document).ready(function(){
	$('#intro-to-aibs-selector').click(function(){
		$('#first-header').addClass('hidden');
		$('#intro-to-aibs-header').removeClass('hidden');
		$('#intro-to-aibs').removeClass('hidden');

		$('#data-science-header').addClass('hidden');
		$('#data-science').addClass('hidden');
		$('#open-source-header').addClass('hidden');
		$('#open-source').addClass('hidden');
		$('#challenge-solutions-header').addClass('hidden');
		$('#challenge-solutions').addClass('hidden');

	});

	$('#data-science-selector').click(function(){
		$('#first-header').addClass('hidden');
		$('#data-science-header').removeClass('hidden');
		$('#data-science').removeClass('hidden');

		$('#intro-to-aibs-header').addClass('hidden');
		$('#intro-to-aibs').addClass('hidden');
		$('#open-source-header').addClass('hidden');
		$('#open-source').addClass('hidden');
		$('#challenge-solutions-header').addClass('hidden');
		$('#challenge-solutions').addClass('hidden');
	});

	$('#open-source-selector').click(function(){
		$('#first-header').addClass('hidden');
		$('#open-source-header').removeClass('hidden');
		$('#open-source').removeClass('hidden');

		$('#intro-to-aibs-header').addClass('hidden');
		$('#intro-to-aibs').addClass('hidden');
		$('#data-science-header').addClass('hidden');
		$('#data-science').addClass('hidden');
		$('#challenge-solutions-header').addClass('hidden');
		$('#challenge-solutions').addClass('hidden');
	});

	$('#challenge-solutions-selector').click(function(){
		$('#first-header').addClass('hidden');
		$('#challenge-solutions-header').removeClass('hidden');
		$('#challenge-solutions').removeClass('hidden');

		$('#intro-to-aibs-header').addClass('hidden');
		$('#intro-to-aibs').addClass('hidden');
		$('#data-science-header').addClass('hidden');
		$('#data-science').addClass('hidden');
		$('#open-source-header').addClass('hidden');
		$('#open-source').addClass('hidden');
	});
});





