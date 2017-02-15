$(function(){
	'use strict';
	$('.collapse').on('show.bs.collapse', function(){
		$(this).prev().find('.fa').removeClass().addClass('fa fa-minus-circle');
	});
	$('.collapse').on('hide.bs.collapse', function(){
		$(this).prev().find('.fa').removeClass().addClass('fa fa-plus-circle');
	});
	$('#myform').validator({
		feedback: {
			success: 'fa fa-child fa-2x',
			error: 'fa fa-bug fa-2x'
			}
			
		});
		
		  new WOW({
			 offset:100,
			 }).init();
	
	
	
	
});