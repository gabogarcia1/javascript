alert("Bienvenidos al juego de lanzar dados, donde tenes que lanzar dados");

let lanzar = confirm("apreta OK para lanzar los dados 50 veces seguidas , boe");
let sumas = [];
let sumaGlobal=[0,0,0,0,0,0,0,0,0,0,0];
for (let i = 0; i < 50; i++) {
    if (lanzar == true) {
        
            var dado1 = Math.floor(Math.random() * 6)+1;

     
            var dado2 = Math.floor(Math.random() * 6)+1;
            //asi te da un numer entre 1 y 6

       
        var suma = dado1 + dado2;
        sumas.push(suma);

    }
}

for(let j=0;j<sumas.length;j++)
{
    document.write(`${sumas[j]}, `);
    if(sumas[j]==2){
        sumaGlobal[0]++;
    }
    if(sumas[j]==3){
        sumaGlobal[1]++;
    }
    if(sumas[j]==4){
        sumaGlobal[2]++;
    }
    if(sumas[j]==5){
        sumaGlobal[3]++;
    }
    if(sumas[j]==6){
        sumaGlobal[4]++;
    }
    if(sumas[j]==7){
        sumaGlobal[5]++;
    }
    if(sumas[j]==8){
        sumaGlobal[6]++;
    }
    if(sumas[j]==9){
        sumaGlobal[7]++;
    }
    if(sumas[j]==10){
        sumaGlobal[8]++;
    }
    if(sumas[j]==11){
        sumaGlobal[9]++;
    }
    if(sumas[j]==12){
        sumaGlobal[10]++;
    }
    if(sumas[j]==2){
        sumaGlobal[11]++;
    }
}
document.write(`<br><h4>Cantidad de veces que salio cada numero<h4>`);

for(let k=0;k<(sumaGlobal.length-1);k++)
{
    document.write(`<li>Numero ${k+2}: ${sumaGlobal[k]}</li>`);
    
}


