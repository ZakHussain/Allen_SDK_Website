$(document).ready(function(){
	// show the basic overview of the brain observatory 
	$('#brain-observatory-card').hover(function(){
		$('#overview').hide();
		$('#brain-observatory-overview').removeClass("hidden");
		$('#brain-observatory-overview').show();
	// hide the basic overview of the brain observatory 
	},	function(){
		$('#brain-observatory-overview').hide();
		$('#overview').show();
	});

	// show the basic overview of the cell typs db
	$('#cell-types-card').hover(function(){
		$('#overview').hide();
		$('#cell-types-overview').removeClass("hidden");
		$('#cell-types-overview').show();
	// hide the basic overview of the cell types db
	}, function(){
		$('#cell-types-overview').hide();
		$('#overview').show();
	});

	// show the basic overivew of the mouse connectivity sdk
	$('#mouse-connectivity-card').hover(function(){
		$('#overview').hide();
		$('#mouse-connectivity-overview').removeClass("hidden");
		$('#mouse-connectivity-overview').show();
	}, function(){
		$('#overview').show();
		$('#mouse-connectivity-overview').hide();
	});
});