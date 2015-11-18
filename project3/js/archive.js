$(document).ready(function(){

	// pokeball animation 

	$('.pokeball.one, .pokeball.two').click(function(){
		$(this).parents('div').find('.letters.display').slideToggle();
	});

	$('.pokeball.one, .pokeball.two').click(function(){
		$(this).parents('div').find('.intro').slideToggle();
	});

	// type with letters

	$('.letters').each(function() {

	  var $letterWrapper = $(this);
	  var letters = $letterWrapper.html().split('');
	  var letterArray = [];

	  for (i = 0; i < letters.length; i++) {
	    console.log(letters[i]);

	    var character = letters[i];
	    var chracterDefinition = $('.letter-definition[data-character="' + character + '"]').html();
	    var characterHTML = '<div class="letter" data-character="' + character + '">' + chracterDefinition + '</div>';
	    
	    letterArray.push(characterHTML);
	  };

	  $letterWrapper.html(letterArray);


	  // document.getElementById('log').innerHTML += '<br>Some new content!';

	});


});