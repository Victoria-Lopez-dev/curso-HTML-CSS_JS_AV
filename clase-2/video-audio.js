//video como audio
//play() -pause() -> permiten reproducir y pausar video y audio

//propiedades :
// duration -> valor de la duracion(s)
//muted -> boleano que me indica si el sonido esta ensendido o no
//volume -> numero entero que define el volumen del audio (1-3)
//tiempo actual 


const reproducir=(nodo)=>{
    nodo.play()
};

let botonPlay=document.querySelector("#btn-play");
let botonPausa=document.querySelector("#btn-pause");
let botonMuted=document.querySelector("#btn-muted")
let video=document.querySelector('#videoP')
let duracionVideo=document.querySelector(".duracion");
let tiempoActual=document.querySelector(".tiempoActual")
let muestraTiempoActual;
const transformacionTiempo=(tiempo)=>{
    let minutos=0;
    let segundos=0;
    if(tiempo<60) {
        minutos='00';
        if(tiempo<10){console.log("ACa") 
            segundos="0"}
        
    }else{
        minutos=(tiempo/60).toFixed(0)
        
    }
    segundos+=parseInt((tiempo%60).toFixed(0))

    return`${minutos}:${segundos}`
}


window.addEventListener('load',()=>{
    duracionVideo.textContent=transformacionTiempo(video.duration)
   

})

botonPlay.addEventListener("click",()=>{
   muestraTiempoActual= setInterval(()=>{
        tiempoActual.textContent=transformacionTiempo(video.currentTime);
    },1000)
    video.play()
});

botonPausa.addEventListener("click",()=>{
    clearInterval(muestraTiempoActual)
    video.pause()
});

botonMuted.addEventListener("click",()=>{            
    video.muted=!video.muted
    console.log(video.muted)
    if(video.muted){
        let span= botonMuted.children[0];
       span.textContent="ON"
    }else{
       let span= botonMuted.children[0];
       span.textContent="OFF"
    }
    
});


