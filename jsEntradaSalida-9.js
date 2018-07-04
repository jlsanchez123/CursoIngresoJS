/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
var sueldo;
var resultado;
var totalsueldo;

sueldo=document.getElementById('sueldo').value;
sueldo=parseInt(sueldo);

resultado=document.getElementById('resultado').value;

resultado=parseInt(resultado);

resultado=sueldo*0.1;
totalsueldo=sueldo+resultado;
alert("su sueldo total es:" + totalsueldo);





	
}
