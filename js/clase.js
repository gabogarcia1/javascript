class Musica {
    constructor(nombreAlbum, anioP, generoP, numeroTemasP, artistaP) {
        // propiedades
        //la palabra this hace referencia al objeto
        this.nombreAlbum = nombreAlbum;
        //lo de la izquiera es la propiedad, lo de la derecha es el valor que quiero almacenar en esta propiedad
        this.anio = anioP;
        this.genero = generoP;
        this.numeroTemas = numeroTemasP;
        this.artista = artistaP;
        this.estado = true; //valor por defecto
    }
    //metodos
    mostrarInformacion() {
        document.write(`<br>Nombre de album: ${this.nombreAlbum}<br>Anio: ${this.anio}<br>Genero: ${this.genero}<br>Numero de temas : ${this.numeroTemas}<br>Artista: ${this.artista}<br>Estado : ${this.estado} <br>`);

    }
    obtenerMontoPesosArgentinos(){
        //agregar el codigo para pasar de dolares a pesos.

    }
    //propiedades conmutadas get y set
    get mostrarAlbum(){
        
        return this.nombreAlbum;
    }
    get mostrarArtiste(){
        return this.artista;
    }
    set modificarGenero(nuevoGenero){
        this.genero=nuevoGenero;
    }
}
//crear un objeto
let thriller = new Musica("thriller",1982,"pop",9,"Michael Jackson"); //no puedo omitir un espacio, si quiero dejar vacio pongo solo comillas vacias
thriller.mostrarInformacion();

let nirvana=new Musica("Smells like teen spirit",1997,"Grunge",13,"Nirvana");

nirvana.mostrarInformacion();

document.write(`<h3><br> Artista : ${thriller.mostrarArtiste}</h3>`);
document.write(`<p><br> Album : ${thriller.nombreAlbum}</p>`);

//modificar el valor de un objeto
thriller.modificarGenero="funk";


thriller.mostrarInformacion();
