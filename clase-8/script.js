//consumir una API externa (tiempo)

let botonAlerta=document.querySelector("#alerta");
let funcionCallback=()=>{
    alert("Bienvenidos!!!!")
}
botonAlerta.addEventListener("click",funcionCallback)
//console.log(error)
const sumar=()=>{
    console.log(10+20)
}
sumar()

//asincronia - acciones que toman tiempo 

//tres estructura: callbacks  - promesas - async/await 
//callbacks -> funcion que pasamos como parametro de otra 
//ejemplo: eventos con el metodo addEventListener

function funcion1(data){
    let texto=document.querySelector("p");
    texto.innerText=data
};

function myCalculator(num1,num2,pepito){
    let suma=num1+num2;
    pepito(suma)
}
//myCalculator(30,20,funcion1)

//-------------------------
// Promise - then().catch()
// la promesa al iniciar esta en un estado pendiente y una vez finalizada(futuro) pasa a un estado resuelto o rechazado

let promesa= new Promise((resolve,reject)=>{
        let cumplido=true;
        if(cumplido){
            resolve("Salio todo bien")
        }else{
            reject("Algo salio mal =( ")
        }
});

promesa
.then((respuesta)=>console.log("Se cumplio la promesa " + respuesta))
.then()
.catch((err)=>{ console.log("ERROR "+error)})

console.log("MAS COSAS POR HACER>>>>>")
//---------------------------------

// ir a buscar la informacion de los personajes a la API y con eso creo las tarjetas
// fetch() -> metodo propio de JS que nos permite hacer peticiones siguiente el protocolo HTTP(promesa)
//por defecto hace peticiones de tipo GET ,pero con algunos cambios en su configuracion podemos hacer otros tipos de peticiones.

async function pedirPersojanes(){
    let personajes=await fetch('https://thesimpsonsapi.com/api/characters')
    .then(respuesta =>  respuesta.json())
    .then(data=>data.results)
    .catch(error => console.log(error));

    return personajes
}

pedirPersojanes()


function pedidoInfo(pagina){
    fetch('https://thesimpsonsapi.com/api/characters?page='+pagina)
    .then(respuesta => {
        return respuesta.json()})
    .then(data=>console.log(data.results))
    .catch(error => console.log(error))

}
 pedidoInfo(2)
// pedidoInfo(3)



const cargarPersonajes=async()=>{
    //vamos a buscar y obtenemos la informacion de los personajes
    let info=await pedirPersojanes();

    //iterar en cada personaje (bucle)
    info.map((pers)=>{
        //armar la tarjeta
        let contenedor=document.createElement('div')
        contenedor.classList.add("example-card");
        contenedor.innerHTML=`
                        <div class="card-label">${pers.name}</div>
                            <div class="example-image">
                                <img src="https://cdn.thesimpsonsapi.com/500${pers.portrait_path}" alt="Homero J Simpson">
                            </div>
                            <div class="card-info">
                                <p class="tag">Age:${pers.age}</p>
                                <p class="tag">Occupation:${pers.occupation}</p>
                            </div>
                        <div class="card-stats">${pers.status}</div>
        `
        //agregarla al HTML
        let zonaTarjetas=document.querySelector(".examples-grid");
        zonaTarjetas.appendChild(contenedor)
    })
}

//crud y axios
//C create - U update - R reed - D Delete 
