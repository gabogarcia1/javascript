//crear una funcion basica

function hola(){ //funcion sin parametros
    //aqui va el codigo de la funcion
    //let comision="comision 5a"; --> no puedo usar dentro de una funcion son locales
    //Las variables let tiene vida depende de donde las creo
    var comision = "comision 5A"
    /*Aca es donde dice emilse que no me conviene usar let 
    osea me conviene poner la variable comision como una var, por que no la puedo usar fuera de la funcion por eso antes no podia hacer el do while con la variable adentro, en el problema 5 de bucles*/
    document.write("hola mundo " + comision);
    
}
//llamar una funcion

let mes= 12; //es una funcion global porque no esta dentro de ninguna funcion

//funcion con parametro
/*un parametro es una variable que yo le mando a la funcion para usarla dentro de esa funcion*/
function saludar(nombre,apellido){
    //concatenar texto
    //document.write("<br><br>Hola mi nombre es "+nombre+" y mi apellido es "+apellido);
    document.write(`<br>Hola mi nombre es ${nombre} y mi apellido es ${apellido}`);
}
//funcion que retonan un valor


// function convertirPesosADolares(monto){
//     let precioDolar = monto/83;
//     return precioDolar.toFixed(2); //siempre se retona UN valor
    
// }

//Funcion arrow function o funciones en nombre de flecha
let  convertirPesosADolares=(monto)=>{
    
        let precioDolar = monto/83;
    return precioDolar.toFixed(2); //siempre se retona UN valor
    
}



//llamar a una funcion
hola();
saludar("gabo","garcia");
saludar("Kiko","galvez");


let precioProducto = convertirPesosADolares(100000);
document.write(`<br>Precio de CPU: USD$ ${precioProducto} sin impuestos`);

document.write(`<br>Precio de notbook: USD$ ${convertirPesosADolares(120000)} sin impuestos`);

