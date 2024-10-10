//creamos el objeto automovil
function Automovil(marca, modelo, color, anio, titular){
    this.marca= marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;
}

//se crean las 3 instancias que solicitan
let auto1 = new Automovil("toyota", "corolla", "blanco", 2020, "Juan Perez");
let auto2 = new Automovil("Mercedez", "xr3", "rojo", 2023, "Maria Lopez");
let auto3 = new Automovil("Bugatti", "cromos", "negro", 2024, "Gabriel Prado");

//creamos el array que tendran las 3 instancias anteriores
let arrayAutos = [auto1, auto2, auto3];

//creamos los 3 metodos que solicitan, tomar en cuenta que tienen que estar disponibles para las 3 instancias que estan arriba
//por lo que se deben agregar al prototipo del Automovil
Automovil.prototype.venderAutomovil = function(titular){ 
    this.titular = titular;  
}

Automovil.prototype.verAuto = function(){ 
    return(this.marca + " " + this.modelo + " - " + this.anio + " - " + this.titular);
}

Automovil.prototype.encender = function(){ 
    alert("automovil en marcha");
}

//funcion para mostrar el registro de los autos empleando la funcion anterior de verAuto
function mostrarVehiculos(){
    let contenedorLista = document.getElementById('listaAutos');
    for(let item of arrayAutos){
        let itemLista = document.createElement("li");
        itemLista.innerText = item.verAuto();//ojo aqui como se llama.. recordar que el item ya seria el objeto como tal que esta dentro del array, asi qyue item.verAuto es accediendo al metodo
        contenedorLista.appendChild(itemLista);
    }
}