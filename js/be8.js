
var maximo = parseInt(prompt("Ingrese un numero no mayor a 50"));
if (maximo > 50 || maximo < 0) {
    alert("ingreso un numero incorrecto");
}
else {
    for (let i = 1; i <= maximo; i++) {
        let j = 1;
        while (j <= i) {
            document.write(`${i}`);
            j++;
        }
        document.write("<br>");
    }
}