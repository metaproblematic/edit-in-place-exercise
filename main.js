$(document).ready(function() {
	$('input').hide();

	$('#name').on('click', function(){
		$('#word').show();
		$('#name').hide();
	});



	$('#different').on('click', function(){
		$('#bird').show();
		$('#different').hide();
	});


	$('#word').on('blur', function(){
		$('#word').hide();
		$('#name').text($('#word').val()) 
		$('#name').show();

	});

	$('#bird').on('blur', function(){
		$('#bird').hide();
		console.log($('#bird').val())
		$('#different').text($('#bird').val()) 
		$('#different').show();


	});

})