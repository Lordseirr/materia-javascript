var aprox1 = [];
var aprox2 = [];
var param1 = [];
var param2 = [];

var n = prompt("digite la cantidadde alumnos ");

for (i=1; i<=n; i++) {
  var alumnos = prompt("digite peso promedio ");

if (alumnos < 40){
  param1.push('1');

}else if (alumnos >= 40 && alumnos <= 50){
  aprox1.push('1');

}else if (alumnos > 50 && alumnos < 60){
  aprox2.push('1');

}else if (alumnos >= 60 && alumnos <= 150){
  param2.push('1');
}
else{
  console.log("peso incorrecto,porfavor digite un peso valido")
}

}

document.write("Hay un total de "+ param1.length + " cantidad de alumnos con peso menor a 40" + "<br />" );

document.write("Hay un total de "+ param2.length + " cantidad de alumnos con peso menor a 60"  + "<br />" );

document.write("Hay un total de "+ aprox1.length + " promedio de alumnos con el peso entre 40 y 50 "  + "<br />");

document.write("Hay un total de "+ aprox2.length + " promedio de alumnos con e peso entre 50 y 60"  + "<br />");
