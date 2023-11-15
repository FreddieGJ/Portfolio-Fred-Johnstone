
//var mainTitle = document.getElementById("mainTitle");
//console.log("This is an element of type: ", mainTitle.nodeType );
//console.log("The inner HTML is ", mainTitle.innerHTML );
//console.log("There are this many child objects ", mainTitle.childNodes );
//var myLinks = document.getElementsByTagName("a");
//var firstLink = myLinks[0].getAttribute("href");
//console.log(firstLink)


//document.getElementById("bigTitle").innerHTML = "Casita Homestead"

//var align = mainTitle.getAttribute("align")
//console.log(align);

//This is using JavaScript to change the CSS of the page.
//document.getElementById("customer1").setAttribute("align", "left");

//in this example, we are using JavaScript to affect the CSS to make the main title of the page the colour pink.
//document.getElementById("bigTitle").style.color = "pink";
//Same again with the fluff text of the page.
//document.getElementById("fluffText").style.color = "pink";

//reason why this is spaced weird is so that I can fit it all in my window. 
//Theres no functional reason to do this other than it looks neat.
document.getElementById("bigTitle").addEventListener
(
"click", function () {alert("This is not a link. This is the title of the page.");}
);

//linked in to the DOM to a particular image
var myImage = document.getElementById("coverImg");

//created an Array to hold a bunch of images to cycle through.
var imageArray = ["images/scenery.jpg", "images/canyonimg1.jpg", "images/canyonimg2.jpg", "images/canyonimg3.jpg"];

//set the value of the cycle to start at 0
var imageIndex = 0;

//created the code that cycles through the Array, increasing it by 1 every time so we get a different image every time
function changeImage(){
	myImage.setAttribute("src", imageArray[imageIndex])
	imageIndex ++;
	if (imageIndex >= imageArray.length){
			imageIndex = 0;
	}
}
//created a timer so that the cycle will change every 5 seconds.
setInterval(changeImage, 5000);


//this piece of code is calling jQuery to hide all paragraphs in the webpage.
//There's no other reason to do this, other than the fact that it can be done using jQuery.
//anything that has a dollar sign "$" before it is jQuery.
//It's commented out so that it doesn't work.
//$("p").hide()

