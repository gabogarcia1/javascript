// crear un objeto notacion literal

let arbol = {
    altura: 100,
    unidad: "cm",
    color: "verde",
    precio: 5000
};
let arbolBlue = {
    altura: 150,//(clave: valor) -->propiedad
    unidad: "cm",
    color: "azul",
    precio: 7000
};
//Mostrar un objeto
document.write(`Objeto arbol <br>Altura : ${arbol.altura}${arbol.unidad}<br>Color : ${arbol.color}<br>Precio : $${arbol.precio}`);

document.write(`<br><br>Objeto Arbol blue<br>Altura: ${arbolBlue["altura"]}${arbolBlue["unidad"]}`);

//Mostrar todas las propiedades del objeto



function mostrarObjeto(arbolito,nombre) {
    let llaves = Object.keys(arbolito);
    console.log(llaves);//["altura","unidad",...]
    //tener cuidado con que Object va con o en MAYUSCULA

    document.write(`<br><br><h4>Muestro todas las propiedades de ${nombre} : </h4>`);
    for (let i = 0; i < llaves.length; i++) {
        let clave = llaves[i];//ej "altura"

        document.write(`<br>${clave}: ${arbolito[clave]}`);
    }
}


// Agregar una propiedad a un objeto

arbolBlue.detalle="ramas nevadas";
arbolBlue.estado=true;


//modificar una propiedad
arbolBlue.precio=5000;



mostrarObjeto(arbol,"Primer arbol");

mostrarObjeto(arbolBlue,"segundo arbol");

