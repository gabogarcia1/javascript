let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));
let num3 = parseInt(prompt("Ingrese el tercerer numero"));

if(num1>num2)
{
    if(num1>num3){
        document.write("El primer numero " + num1 + " es el mas grande COMO EL DIEGO");
    }
    else if(num3>num2){
        if(num1==num3){
            document.write("El primer y el tercer numero son iguales y son los mayores")
        }
        else document.write("El tercer numero " + num3 + " es el mas grande COMO EL DIEGO");
    }

} else if (num2>num1){
    if(num2>num3){
        document.write("El Segundo numero " + num2 + " es el mas grande COMO EL DIEGO");
    }
    else if(num3>num1){
        if(num2==num3){
            document.write("El segundo y el tercer numero son iguales y son los mayores");
        }
        else document.write("El tercer numero " + num3 + " es el mas grande COMO EL DIEGO");

    }

} else if(num1==num2){
    if(num1>num3){
    document.write("El primer y el segundo numero son iguales y son los mayores");
    }
    else if(num1<num3)
    {
        document.write("El tercer numero " + num3 + " es el mas grande COMO EL DIEGO");
    }
    else document.write("Todos los numeros ingresados son iguales");
}
