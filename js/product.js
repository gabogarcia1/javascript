var products=[
    {id:1,name: "leche", price: 120, categories:["familiar","comida"]},
    {id:2,name:"Arroz",price:80,categories:["familia","comida"]},
    {id:3,name:"lavadora",price:7000,categories:["electrodomesticos"]}
];
for(var i=0;i<products.length;i++){
    var product=products[i];
    console.log(product.name);
    console.log(" Id : " + product.id);
    console.log(" Precio :" + product.price);
    console.log(" Categorias :" + product.categories.join(" , "));
    // debemos utilizar el método join para convertirlas en una cadena.
}

//notacion literal

var auto ={
    color:"rojo",
    marca: "fiat",
    modelo: "bravo",
    anio:2009
}
//funcion constructora
function Auto(color,marca,modelo,anio){
    this.color=color;
    this.marca = marca;
    this.modelo=modelo;
    this.anio=anio;
}

var auto=new Auto("rojo","fiat","bravo",2009);
console.log(auto.color);

//El constructor Object
var auto2 = new Object();
auto2.color="rojo";
auto2.marca="fiat";
auto2["modelo"]="bravo";
auto2.anio=2009;


//Object create
/*Este me sirve cuando de antemano sabemos que no vamos a crear demasiadas instancias de un objeto. el objeto global object tiene un metodo denominado create que nos permite crear un nuevo objeto basado en uno preexistente. */

var auto3 = Object.create(auto);
console.log(auto2.marca);
auto2.precio=45000;

//COMPARANDO OBJETOS

//variable de referencia del objeto persona 1
// var personal={nombre="juan"};

// //variable de referencia del objeto persona 2
// var persona2={nombre:"juan"};

//persona1==persona2 --> retorna false

//variable de referencia del objeto persona1 
// var persona1={nombre:"juliana"};

//variable de referencia del objeto persona2
// var persona2=persona1; //asi asignamos la referencia del objeto persona a la variable de referencia del objeto persona 2
//luego persona1==persona2--> retorna true


//CLASE 
/*Una clase seria como una plantilla que usamos como modelo para crear objetos a partir de esta. aqui estamos definiendo una clase con la sintaxis de una funcion constructora*/

// function Persona(nombre,apellido,edad){
//     this.nombre=nombre;
//     this.apellido=apellido;
//     this.edad=edad;
//     this.comer=function(){
//         alert("Comiendo, no moleste.. ");

//     }
// };


//Clase con ES6
//Los objetos son entidades que se crean a partir de una clase

//   definimos la clase
class Persona{
    constructor(nombre,apellido,edad){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
    }

comer(){
    alert("comiendo, no moleste..");
}
};

var persona3=new Persona("juan","mendoza",20);
var persona4=new Persona("carlos", "Gardel",24);
console.log(persona3.nombre + " " + persona3.apellido);
console.log(persona4.nombre + " " + persona4.apellido);

