//API que ya esta incluida en el codigo
//Geolocalization - Drag&Drop

//Geolocalization -> detectar la ubicacion del usuario(siempre que el usuario de su concentimiento)


//navigator.geolocation -> acceder a los metodos de geolocalization

//getCurrentPosition(ok,error,configuracion)
//watchPosition(ok,error,configuracion) | clearPosition()
let parrafo=document.querySelector("p")

function functionOk(position) {
    console.log("se encontro la ubicacion")
    parrafo.textContent=`El dispositivo se ubica en la latitud ${position.coords.latitude} y longitud ${position.coords.longitude}; con un margen de error de ${position.coords.accuracy} metros`
}

function functionError(error) {
    console.log("no se encontro al usuario..")
    console.log(error)

    if(error.code == 1)return parrafo.textContent="Le pedimos que nos permita encontrar su ubicacione para proceder con ciertos pasos..."

    if(error.code == 2)return parrafo.textContent="le pedimos volver a cargar la pagina ya que por imprevistos no pudimos lograr ubicarlo"

    return parrafo.textContent="no tuvimos tiempo suficiente para encontrarlo"
    //objeto error contiene las propiedades:
    //code. -> 1-2-3
    //message -> mensaje indicando el tipo de error
}
const objConfig={
    enableHighAccuracy:true,//booleano -> define una mayor percision
    timeout:'10ms',//ms -> tiempo limite en la busqueda 
   // maximumAge:300ms ->tiempo maximo de espera entre solicitudes (ms)
}

navigator.geolocation.getCurrentPosition(functionOk,functionError,objConfig)