let num1 = parseInt(prompt("ingrese un primer numero"));
let num2 = parseInt(prompt("ingrese un segundo numero"));

/* si se (cumple una condicion logica){

} en caso contrario {}*/

if (num1 > num2) {
    document.write("El numero uno es mayor al numero dos: " + num1);
}
else if (num1 == num2) {
    document.write("El numero dos es igual al numero uno: " + num2);
}
else {
    document.write("El numero dos es mayor al numero uno: " + num2);

}
document.write("<br>Aqui continua el resto de mi codigo");

