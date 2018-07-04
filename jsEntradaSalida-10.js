/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	
var sueldo;
var resultado;
var totalsueldo;

sueldo=document.getElementById('importe').value;
sueldo=parseInt(sueldo);

resultado=document.getElementById('resultado').value;

resultado=parseInt(resultado);

resultado=sueldo*0.25;
totalsueldo=sueldo-resultado;
alert("total a pagar :" + totalsueldo);

}
