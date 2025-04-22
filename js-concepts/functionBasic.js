function sayhello() // function with name
{
    return "Goood Morning have a nice day"
}
var welcomeMessage = sayhello();
console.log(welcomeMessage); 


var greetMessage = function (name) // for anonyomus functions we will store the output in the variable and it wont have nay function name
{ 
        return "Goood Evening have a nice day" + " " +name;
}
console.log(greetMessage('antony'))