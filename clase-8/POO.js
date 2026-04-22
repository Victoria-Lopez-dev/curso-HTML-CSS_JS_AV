//POO paradigma de programacion  Orientada a Objetos 
//actores -> quienes?
//propiedades/caracteristicas/atributos - capaz de realizar acciones (comportamientos)

//hacemos un programa para una veterinaria
//listaPacientes
// recepcionista - veterinario

let listaPacientes=[];
let archivoPaci=[]
let contador=0;
const cargaDePacientes1=(animal)=>{
    contador++
    listaPacientes.push(animal)
    console.log(contador)
    console.log(listaPacientes)
}
const crearFicha1=(dato1,dato2)=>{
    let paciente={
        dato1,dato2
    }
    archivoPaci.push(paciente)
}

cargaDePacientes1("perro Firulais")
cargaDePacientes1("gato Michifus")

//-------------------------

//con POO 
// clases -> molde define los atributos y comportamientos de una entidad/actor
//instancias de una clase -> objeto -> new 
//constructor -> funcion que se ejecuta al crear la instacia 
//superclase
class PersonalVeterinaria{
        //atributos
    constructor(nombrePersonal,correoPersonal){
        this.nombre=nombrePersonal
        this.correo=correoPersonal
    } 
    crearFicha(dato1,dato2){
        let paciente={
            nombre:dato1,
            edad:dato2
        }
        archivoPaci.push(paciente)
    }
}
//clase que hereda los atributos y comportamientos de su superclase
class Recepcionista extends PersonalVeterinaria{

    //capacidades
    cargaDePaciente(paciente){
        contador++
        listaPacientes.push(paciente)
        console.log("Cargo un nuevo paciente "+ this.nombre)
    }
    cobroConsulta(){}
    
}
//clase que hereda los atributos y comportamientos de su superclase
class Veterinario extends PersonalVeterinaria{
    constructor(nombreVet,correoVet,matriculaVet){
        super(nombreVet,correoVet)
        this.matricula=matriculaVet
    }
    atenderPaciente(paciente){
        let animal=listaPacientes.find(pac=> pac== paciente);
        if(animal){
            console.log("Estamos atendiendo a este paciente...")
        }else{
            console.log("algo salio mal! hablar en recepcion..")
        }
    }
}
class Paciente {
    constructor(nombre,edad,dueno){
        nombre,edad,dueno
    }
}
//instancia de la clase(objeto)
let juana=new Recepcionista("juana",'juanita@veterinaria.com');
let martin= new Recepcionista("martin","martin@veterinaria.com");
let vet1= new Veterinario("laura","laura@veterinaria.com","matricula 1234");
console.log(vet1)
// console.log(juana.correo)
// console.log(martin.correo)
// const cargar=()=>{
//  martin.cargaDePaciente("pez pepito");
//   juana.cargaDePaciente("pajarito piopio");
//     console.log(listaPacientes)   
// }
// juana.crearFicha("perrito2","2 años");
vet1.crearFicha("gatito2","1 año")

console.log(archivoPaci)
