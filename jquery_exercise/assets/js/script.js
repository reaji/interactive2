/*

Instructions:

---- PART 1 ----
Start by removing that pirate flag (#pirate).

Next, add a gradient to the whole page by applying the "gradient" class to the body.

---- PART 2 ----
Now, to make things a little more complicated, let's activate the "Start" button:

When the user clicks the "Start" button, change the text of "status" to read "GO". 
Let's also change the background color of "status" to green.
Change the text of the "Start" button to read "Stop".

When the user clicks the bottom again, revert all of the above. 
So "status" should read "STOP", it's background color should be red, and the button itself should read "Start" again.

Hint: you will want to store the current state of the button in a variable.

---- PART 3 ----
Now that we have stored the status of our button, let's show the user an image if the mouse is over our green "GO" box.

If the user has activated the button, toggle the visibility of id "cat" to reveal our animated leopard.

*/


/////////////////////////////////////////////////////////////

$(document).ready(function(){

  // Put your code here
  $('#pirate').hide();
   $('body').addClass('gradient');
var state = 'off';
   


   $('button').click(function() {


$('#status').mouseenter(function() {
      // alert('Mouse over happened.');
      $('#cat').toggle();

});

   $('#status').mouseleave(function() {
      // alert('Mouse over happened.');
      $('#cat').toggle();

});

 if(state == 'off'){
      // turn on the lights
       $('#status').html('GO').css('background','green');
 		$('#toggle').html('STOP');
 		state = 'on';

    }
    
    else {
      // turn off the lights
       $('#status').html('STOP').css('background','red');
 		$('#toggle').html('START');
 		state = 'off';
 		$('#cat').css('display','none');
    }    




});




});