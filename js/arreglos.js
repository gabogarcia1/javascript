//Primera forma de crear un arreglo
// los arreglos "siempre van en corchetes
let personajes = ["homero", true, 'bart', 15];


// segunda forma de crear un arreglo 
let temporada = [];

// mostrar un valor de un arreglo 

document.write(personajes[0] + "<br>");
//agregar un elemento nuevo a un arreglo al final

personajes.push('lisa');

document.write(personajes[4] + "<br>");
//agregar un elemento en una posicion particular (no es reemplazar)
personajes.splice(2, 0, 'flanders');
// personajes.splice(posicion,quiero borrar algo? ,lo que quiero poner);
document.write(personajes[2] + "<br>"); // flanders
document.write(personajes[3] + "<br>"); //bart que antes estaba en la 2
// como que se corre para la derecha 

function mostrarArreglo(titulo){
    document.write(`<br><h4>${titulo}</h4>`);
    for (let i = 0; i < personajes.length; i++) { 
        document.write(personajes[i]+" - ")
    }
    
}

//recorrer el arreglo 
mostrarArreglo("Mostrar arreglo");

//eliminar un item de un arreglo

personajes.splice(1,1);
mostrarArreglo("Eliminar elemento de un arreglo");

//modificar o cambiar de un valor particular
personajes[0]='milhouse';

personajes.splice(1,1);
mostrarArreglo("Cambiar elementos de un arreglo");



