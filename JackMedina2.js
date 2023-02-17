var InteresAnual = 1.15;
var IngresoMensual = 11 * 250;
var MontoAnual = IngresoMensal + MontoIntereses;
var ValorFinal = MontoAnual * InteresAnual;
var InteresFinal= ValorFinal - MontoAnual;
var MontoIntereses = parseInt(prompt("Ingrese el monto inicial: "));

if (MontoIntereses>=0) {
    
    document.write("El dinero registrado en tu cuenta es: "+ValorFinal.toFixed(2)+"</br>")
    document.write("El dinero que se ha generado debido al interes es: "+InteresFinal.toFixed(2))
}
else{
    document.write("Porfavor ingrese un monto valido ")
}