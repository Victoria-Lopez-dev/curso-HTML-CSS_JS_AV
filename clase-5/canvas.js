/* API -> Aplication Programing Interfase
intermediario - cliente(front) y servicio
- acciones complejas de una manera mas simple
- APIs externas -> Asincronia 
-APIs incluidas a partir de HTML5 -> canvas - geolocation- drag&drop */

/* Canvas -> API grafica  */
/* Canvas -> figuras primitivas -> trazos y rectangulos

*/

let canvas=document.querySelector('canvas');

let lienzo= canvas.getContext('2d');
console.dir(lienzo)
// rectangulos ->
// fillRect(x,y,width,height) 
// strokeRect(x,y,width,height)
// clearRect(x,y,width,height)
lienzo.fillStyle="#ff1144";
lienzo.fillRect(10,40,50,50);
lienzo.strokeStyle='green';
lienzo.lineWidth='5';
lienzo.strokeRect(10,40,50,50);
lienzo.fillStyle="#33AA";
lienzo.fillRect(80,40,150,50);

//trazos

//lineTo(x,y) - moveTo(x,y) -
//  arc(x,y,r,ang-inicial,ang-final,direccion)-
// arcTo()
// -quadraticCurveTo(pcx,pcy,x,y) -> 1 punto de control
// - bezierCurveTo(pcx1,pcy1,pcx2,pcy2,x,y) -> 2 punto de control
//radiantes -> Math.PI/180* grados

const grados45=Math.PI/180*45;

//beginPath() - closePath()
lienzo.strokeStyle='#f90';
lienzo.lineWidth='6';

lienzo.beginPath();
lienzo.moveTo(50,100);
lienzo.lineTo(100,140);
lienzo.lineTo(160,100);
lienzo.arc(180,100,60,grados45,0,true)
lienzo.quadraticCurveTo(20,30,100,100)
lienzo.stroke();// solo el contorno
lienzo.closePath();

lienzo.strokeStyle='blue';
lienzo.lineWidth='3';
lienzo.beginPath();
lienzo.moveTo(290,40);
//lienzo.lineTo(290,140);
lienzo.bezierCurveTo(10,50,380,100,290,140)
lienzo.stroke();// solo el contorno
lienzo.closePath();

lienzo.beginPath();
lienzo.moveTo(50,100);
lienzo.arc(40,80,30,0,Math.PI*2,true)
lienzo.fill();// solo el relleno y no hace falta el closePath

lienzo.clearRect(130,30,160,160);

lienzo.beginPath();
lienzo.lineWidth='1'
lienzo.font="20px Arial"
lienzo.strokeText("Chau",40,20)
lienzo.closePath();

//texto -> 
// fillText("texto",x,y) 
// strokeText("texto",x,y)

//setInterval(()=>{},ms)

const moverPalabra=(ejeY)=>{
    lienzo.clearRect(130,0,160,160);//"oculta"
    lienzo.beginPath();//arma
        lienzo.fillStyle='black';
        lienzo.font="20px Arial"
        lienzo.fillText("HOLAAA",140,ejeY)
    lienzo.closePath();
}
let boton=document.querySelector("button");
let inicio=10;
let arranque=false;
let arrancar;
boton.addEventListener("click",()=>{
    
    arranque=!arranque;
    if(arranque){
        arrancar=setInterval(()=>{
            inicio+=10;
            moverPalabra(inicio)
        },300);
    }else{
        clearInterval(arrancar)
    }
    
    
});