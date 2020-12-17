let filas=parseInt(prompt("Ingrese el numero de filas "));
let columnas=parseInt(prompt("Ingrese el numero de columnas "));

let tabla=filas*columnas;

for(let i=filas;i>=1;i=i-1)
{
    for(let j=columnas;j>=1;j=j-1)
    {
        document.write(`---${tabla}---`);
        tabla=tabla-1;
    }
    document.write("<br>");
}

