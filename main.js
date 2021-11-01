//Create a reference for canvas 
canavs = document.getElementById("myCanvas");
ctx = canavs.getContext("2d");

//Give specific height and width to the car image
greencar_width = 75;
greencar_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_x = 5;
greencar_y = 225;

function add() {
	//upload car, and background images on the canvas.
	background_imaTag = new Image();
	background_imaTag.onload = uploadBackground();
	background_imaTag.src = background_image;

	background_imaTag = new Image();
	background_imaTag.onload = uploadgreencar();
	background_imaTag.src = greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
  ctx.drawImage(background_imaTag, 0, 0, canavs.width, camvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
 ctx.drawImage(greencar_image, greencar_x, greencar_y, greencar_width, greencar_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}


function up()
{
	if(rover_y>=0)
	{
		rover_y -=10;
		console.log("When up arrow is pressed +" + rover_x + " - " +rover_y);
		uploadBackground();
		uploadrover();
	}
}

function down()
{
	if(rover_y<=500)
	{
		rover_y +=10;
		console.log("when down arrow is pressed, x =" + rover_x + "| y ="  +rover_y);
		uploadBackground();
		uploadrover();
	}
}

function left()
{
	if(rover_x >=0)
	{
		rover_x -=10;
		console.log("When left arrow is preseed, x =" + rover_x + "| y =" +rover_x);
		uploadBackground();
		uploadrover();
	}
}

function right()
{
	if(rover_x <= 700)
	{
		rover_x +=10;
		console.log("When right arrow is pressed, x =" + rover_x + "| y =" +rover_y);
		uploadBackground();
		uploadrover();
	}
}
