var user = {};
var responses = [];
function questionName()
{
	var name = prompt("¿Cómo te llamas?");
	user.name = name;
}
function question1()
{
	var capital = prompt("Cuál es la capital de España?(París | Berlín | Madrid)");
	switch(capital.toLowerCase())
	{
		case "paris":
		case "parís":
			responses.push(false);
			break;
		case "berlin":
		case "berlín":
			responses.push(false);
			break;
		case "madrid":
			responses.push(true);
			break;
		default:
			alert("Respuesta no válida. Prueba con (París | Berlín | Madrid)");
			question1();
			break;
	}
}
function question2()
{
	var raiz = prompt("¿Cuál es la raíz cuadrada de 144?");
	if(isNaN(parseInt(raiz)))
	{
		alert("Respuesta no válida. Prueba con un número.");
		question2();
	}
	else if(parseInt(raiz) === 12)
		responses.push(true);
	else
		responses.push(false);
}
function question3()
{
	var logica = prompt("!true || false === false (Yes|No)");
	if(logica.toLowerCase() === "yes")
		responses.push(true);
	else if(logica.toLowerCase() === "no")
		responses.push(false);
	else
	{
		alert("Respuesta no válida. Prueba con (Yes|No)");
		question3();
	}
}

function evaluate(responsesArray)
{
	var aciertos = 0, fallos = 0;
	for (var i = 0; i < responsesArray.length; i++) {
		if(responsesArray[i])
			aciertos++;
		else
			fallos++;
	};
	user.aciertos = aciertos;
	user.fallos = fallos;
	showResults();
}
function showResults()
{
	alert("Hola " + user.name + ". Has acertado " + user.aciertos + " y has fallado " + user.fallos + ".");
}

questionName();
question1();
question2();
question3();
evaluate(responses);