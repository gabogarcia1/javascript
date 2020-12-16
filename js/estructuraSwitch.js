let estacion = prompt("ingrese su estacion del anio preferida");

// if(estacion=="primavera"){
//     document.write("El usuario selecciono la estacion " + estacion);

// }else if(estacion=="otonio"){
//     document.write("El usuario selecciono la estacion " + estacion);
// }else if(estacion=="verano"){
//     document.write("El usuario selecciono la estacion " + estacion);
// }else{
//     document.write("El usuario selecciono la estacion " + estacion);
// }
switch (estacion) {
    case "primavera":
        document.write("el usuario selecciono primavera");
        break;
        case "verano":
        document.write("el usuario selecciono verano");
        break;
        case "invierno":
        document.write("el usuario selecciono invierno");
        break;
        case "otonio":
        document.write("el usuario selecciono otonio");
        break;
        default:
            document.write("usted se tiene que arrepentir de lo que dijo");
            
}
