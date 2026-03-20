// repaso de esta clase
// hablar un poquito de funciones -bucles- array y objetos - condicionales


let numero=10;

let promedio1=numero+20 /2 ;
function promedio(numero1,numero2){
    let suma=numero1+numero2
    return suma/2
}


const funcion2=()=>{
    console.log("hola!")
}
//funciones -> agrupar codigo,generar una secuencia de pasos a seguir 

//funcion tradicional
/*
    function nombre(){
        codigo....
        return devolucion 
    }

*/
console.log(promedio(10,4))

//funciones flecha
/*
(param)=>{
    codigo...
    return 
    }
*/


//condicionales: operador ternario| if-else -> se manejan con booleanos |
// switch -> caso

let edad=33

//operador ternario -> condicion? accion-true:accion-false;
edad>16?console.log("sos mayor"):console.log("sos menor")


function aplicarDescuento(producto,precio){
    if(precio>10000){
        precio=precio-1000;
    }

}

switch(edad>16){
    case true: '...'
    break;

    case false: '...'
}

//arrays ->listas
//listar cualquier tipo de dato
//no tiene limite en la cantidad de items
// indice -> numerar a cada item de la lista por su posicion.Inicia desde el 0 ->array[indice]
let precios=[1000,20000,3000,4000,5000]

//              0       1       2
let nombres=["marta","Luis","Raul"]
let lista=[numero,promedio,true,222,'hola']

console.log(nombres[1])

let total=0;


//bucles -> estructuras JS nos permiten definir acciones repetitivas a ejecutar

// for  while dowhile -> condiciones 
//en arrays -> forEach() map() filter() find() -> sintaxis ->array.metodo((ref)=>{})
// en array -> for/of(solo en arrays)
let preciosAltos=precios.filter((p)=> p>3000)//array

let precioMayor3000=precios.find((p)=> p>3000)//valor

let nuevaLista=precios.map((p)=>{
    if(p>3000){
        p= p-100
    }
    return p
})

console.log(preciosAltos,precioMayor3000)

//  y objetos 
/*
sintaxis 
    {
        propiedad:valor,
        propiedad:valor
    }
*/

let producto={
    nombre:"remera",
    precio:10000,
    stock:20,
    sale:true,
    talles:["XL","L","M","S"],
    modelos:{
        tela:"algodon",
        costura:"x.."
    }
}


let colaboradores=[
    {
        nombreColaborador:"Juan",
        correo:"juan@email.com",
        puesto:"administrativo",
        puntos:200
    },
    {
        nombreColaborador:"Pedro",
        correo:"Pedro@email.com",
        puesto:"administrativo",
        puntos:100
    },
]
//obtener un valor -> objeto.propiedad 
//modificar o crear una propiedad -> objeto.propiedad=valor;
//eliminar propiedad -> delete objeto.propiedad

//objeto.propiedad -> objeto["propiedad"]

function agregarPuntos(nombre,cantidad){
    let colaborador=colaboradores.find((c)=>c.nombreColaborador === nombre);


    colaborador.puntos+=cantidad; //colaborador.punto=colaborador.punto+cantidad;

    return `${colaborador.nombreColaborador} tene ${cantidad} puntos mas `
}


//eventos - DOM (Document Object Model)

let texto3=document.querySelector("#texto3") // nodo p de id texto3 

console.dir(texto3)
texto3.textContent='Cambiar su contenido'

//eventos -> acciones que tienen un inicio y fin 
//3 partes : 
// nodo en el que ocurre el evento
//la accion a escuchar -> https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Events
//accion como respuesta 


//2 maneras de definirse

//addEventListener(evento,()=>{})
// atributo en HTML on+evento que tiene como valor la funcion a ejecutar
// onclick=funcion() 
let boton1=document.querySelector("#boton1");

boton1.addEventListener("click",()=>{

        alert("HOLA");
        document.querySelector("section").classList.add("rojo")
})

