let bandera = 0;
let ciudades = [];
do {

    let ciudad = prompt("Ingrese el nombre de una ciudad");
    ciudades.push(ciudad);
    if (ciudad == 0) {
        break;
    }
    var r = confirm("Quiere seguir agregando ciudades?");


} while (r == true);

document.write(`Longitud del arreglo: ${ciudades.length + 1} `);
document.write(`<br>Primera posicion: ${ciudades[0]}<br>tercera posicion: ${ciudades[2]}<br>Ultima posicion: ${ciudades[ciudades.length - 1]}<br>`);
ciudades.push("Paris");
document.write(`Segunda posicion: ${ciudades[1]}`);
ciudades[1] = "barcelona";

for (let i = 0; i < ciudades.length; i++) {
    document.write(`<li>${ciudades[i]}</li>`)
}
