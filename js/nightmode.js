
window.onload=function() {
	var night = false;

	$(function() {
    	$('#nightmode').change(function() {
	    	console.log("toggled");
	    	night = !night; 
	    	if (night === false) {
	    		body.className='day';
	    		console.log("it's day time !");
	    	}
	    	else if (night === true) {
	    		body.className='night';
	    		console.log("it's NIGHT time !");
	    	}
    	})
  	})
}
