let persona1 = {};
let persona2 = {};
let persona3 = {};

function ingresarEdad(persona) {
    let edadPersona = parseInt(prompt(`Ingrese edad de la persona ${persona}`));
    return edadPersona;
}
function ingresarNombre(persona) {
    let nombrePersona = prompt(`Ingrese nombre de la persona ${persona}`);
    return nombrePersona;
}
function mostrarPersona(personaObjeto, numero) {
    let llaves = Object.keys(personaObjeto)
    document.write(`<br><br><h4>Muestro todas las propiedades de ${numero} : </h4>`);
    for (let i = 0; i < llaves.length; i++) {
        let clave = llaves[i];//ej "altura"

        document.write(`<br>${clave}: ${personaObjeto[clave]}`);
    }
}

persona1.edad = ingresarEdad("persona 1");
persona1.nombre = ingresarNombre("persona 1");
persona2.edad = ingresarEdad("persona 2");
persona2.nombre = ingresarNombre("persona 2");
persona3.edad = ingresarEdad("persona 3");
persona3.nombre = ingresarNombre("persona 3");



let edadMasGrade = Math.max(persona1.edad, persona2.edad, persona3.edad);
if (Math.max(persona1.edad, persona2.edad, persona3.edad) == persona1.edad) {
    mostrarPersona(persona1, "persona 1");
}
if (Math.max(persona1.edad, persona2.edad, persona3.edad) == persona2.edad) {
    mostrarPersona(persona2, "persona 2");
}
if (Math.max(persona1.edad, persona2.edad, persona3.edad) == persona3.edad) {
    mostrarPersona(persona3, "persona 3");
}
