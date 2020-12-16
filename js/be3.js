let c=0;
do {
    // var r = confirm("Press a button!");
    // if (r == true) {
    //     document.write("You pressed OK!");
    // } else {
    //     document.write("You pressed Cancel");

    // }
    let arrayfrases = ["-"];
    let frase = prompt("Ingrese una frase : ");
    document.write(frase + " - ")
    var r = confirm("Quiere seguir agregando frases?");
    arrayfrases.push(frase);
    // arrayfrases.splice(c, 0, frase);
    // c++;
} while (r == true);
document.write(arrayfrases.length);
for (let i = 0; i < arrayfrases.length; i++) {
    document.write(arrayfrases[i] + " - ")
}
//Este for no me esta andando


