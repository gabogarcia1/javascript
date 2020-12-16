let nota = parseInt(prompt("Ingrese nota de 1 al 10"));
document.write("<br>nota: " + nota);

if (nota > 0 && nota <= 2) {
    document.write("<br>Muy Deficiente");
}

if (nota > 2 && nota <= 4) {
    document.write("<br>Insuficiente");
}

if (nota > 4 && nota <= 6) {
    document.write("<br>Suficiente");
}

if (nota == 7) {
    document.write("<br>Bien");
}
if (nota > 7 && nota < 10) {
    document.write("<br>Notable");
}
if (nota == 10) {
    document.write("<br>Sobresaliente");
}
if(nota<0||nota>10){
    document.write("<br>Ingreso mal el numero. <br>Por favor, vuelva a ingresa la nota");
    }
