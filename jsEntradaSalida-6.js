/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

var num1;
var resulto;
var num2;

num1=document.getElementById('numeroUno').value;
num1=parseInt(num1);
num2=document.getElementById('numeroDos').value;
num2=parseInt(num2);

resulto= num1+num2
	
alert(resulto);	


}

