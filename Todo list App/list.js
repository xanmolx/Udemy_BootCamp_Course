var todos = [];

var input =  prompt("What do you want to do?");

while(input !==  "quit")
{
	if(input === "list")
	{
		console.log(todos);
	}
	else if(input === "new")
	{
		var newtodo = prompt("add new todo");
		todos.push(newtodo);
	}
	var input =  prompt("What do you want to do?");
}
console.log("OKAY! You have quit the app");
