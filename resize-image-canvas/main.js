//We need to be able to resize our image to a certain specification, and a canvas can do that no problem.

//Say our requirements are to ensure that an image is no taller than, say, 100 pixels no matter what the original height was.


var MAX_HEIGHT = 100;
function render(src){
	var image = new Image();
	image.onload = function(){
		var canvas = document.getElementById("myCanvas");
		if(image.height > MAX_HEIGHT) {
			image.width *= MAX_HEIGHT / image.height;
			image.height = MAX_HEIGHT;
		}
		var ctx = canvas.getContext("2d");
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		canvas.width = image.width;
		canvas.height = image.height;
		ctx.drawImage(image, 0, 0, image.width, image.height);
	};
	image.src = src;
}

/*/*
/* Create a JavaScript Image object.
/* Attach a handler to the onload event of that Image.
/* Check to see what the dimensions of the loaded image is, and if the original image's height is greater than our maximum allowed, change those dimensions.
/* Clear anything that is in our canvas element.
/* Set the canvas dimensions to the dimensions of the Image, and
/* Draw the image to the canvas.
/*/*
