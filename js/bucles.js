// document.write("1 - iron man");
// document.write("<br>2 - iron man");
// document.write("<br>3 - iron man");
// document.write("<br>4 - iron man");
// document.write("<br>5 - iron man");
// document.write("<br>6 - iron man");


//while
// let contador=1;

// while(contador<=10){
//     document.write(contador + " - iron man <br>");
//     contador++;
// }

//
// do{
//     document.write(contador + " - iron man <br>");
//     contador++;
// } while(contador<=10);

//crear un bucle for
//for(inicialiazar variable;condicion;incremetar o decrementar)
// for(let a =0;a<=15;a=a+2){
//     document.write("<br>Item " + a);
// }

//ejercicio 9
let frase = prompt("Escribir una frase");
document.write("<br>" + frase);
frase=frase.toLowerCase();
let contador = 0;
for (let i = 0; i < frase.length; i++) {
    // document.write("<br>"+frase.substr(i,1));
    if (frase.substr(i, 1) == 'a' || frase.substr(i, 1) == 'e' || frase.substr(i, 1) == 'i' || frase.substr(i, 1) == 'o' || frase.substr(i, 1) == 'u') {
        contador++;
    }

}
document.write("<br>Cantidad de vocales de la frase: " + contador);
//PUEDO BUSCAR COSAS EN DEVELOPER MOZILLA QUE ESTA MUY BIEN EXPLICADO
