var number = 7;
var num;
while(num !== number){
	num  = prompt("Enter the number");
	guess = Number(num);
	if(guess>number){
		alert("The number is too high");
	}
	else if(number>guess){
		alert("The number is too low");
	}
	else{
		alert("You guessed it correct :p")
	}
}
