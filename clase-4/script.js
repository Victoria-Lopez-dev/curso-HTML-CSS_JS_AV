const agregadoClass=(nodo)=>{
    nodo.classList.toggle("girar")
}
const rotar=()=>{
    const padre=document.querySelector(".padre");
    padre.style.animation='rotar 3s 4'
}