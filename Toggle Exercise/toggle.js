var button = document.querySelector("button");

var isPurple = false;

button.addEventListener("click", changeColor);

function changeColor()
{
	if(isPurple)
	{
		document.body.style.background = "white";
		var tag1 = document.querySelector("button");
		tag1.textContent = "Click here to make the page Purple";
		isPurple = false;
	}
	else
	{
		document.body.style.background = "purple";
		var tag = document.querySelector("button");
		tag.textContent = "Click Here to make the page White!";
		isPurple = true;
	}
}
