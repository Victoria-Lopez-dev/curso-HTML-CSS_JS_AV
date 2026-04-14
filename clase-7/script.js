console.log("HOLAAA")
//Web Storage - API para almacenar informacion(formato de texto)
//NO guardar informacion sensible
//LocalStorage 
//SessionStorage

//Metodos : setItem(key,value) - getItem(key) - removeItem(key)

let nombre="Mariano"

//setItem()
sessionStorage.setItem("nombrePersona",nombre)
localStorage.setItem("valor",true)

//getItem()
// let dato=localStorage.getItem("valor");// "true"
// console.log(typeof(dato))
let dato=localStorage.getItem("lalala");//null
 console.log(dato)
//localStorage.removeItem('valor')

//-------------------------------

const sillaSig={
    nombre:'silla signature',
    precio:3800
}
const sillaNordic={
    nombre:'silla nordic',
    precio:2800
}
const sillaNoct={
    nombre:'silla nocturne',
    precio:3100
}
const productDisp=[sillaSig,sillaNoct,sillaNordic]
const listaProd=[];
//funcion que se ejecuta al cargar el index.html
const themeRender=()=>{

    //defina con que tema se inicia
    let nodo=document.querySelector('#botonTheme');
    let theme=localStorage.getItem("theme");//night - day - null
    if(theme == 'night'){
        if(nodo) nodo.textContent="NIGHT";
        document.body.classList.add('night');
        localStorage.setItem("theme",'night')
    }else{
        if(nodo) nodo.textContent="DAY";
        document.body.classList.remove('night');
        localStorage.setItem("theme",'day')
    }

    //reestablecer el contador del changuito de compra
    let cantidad=localStorage.getItem("itemsCant");
    if(cantidad){
        document.querySelector("#count").textContent=cantidad;
    }

};


const theme=(nodo)=>{
    let theme=nodo.textContent;
    if(theme == 'NIGHT'){
        nodo.textContent="DAY";
        document.body.classList.remove('night');
        localStorage.setItem("theme",'day')

    }else{
        nodo.textContent="NIGHT";
        document.body.classList.add('night');
        localStorage.setItem("theme",'night')
    }
}

const addProd=(nodo)=>{
    //cambio del contador
    let numCantidad=document.querySelector("#count");
    let cantidad=numCantidad.textContent;
    console.log(cantidad)
    numCantidad.textContent=parseInt(cantidad)+1;

    //agregar producto a la lista

    //OPCION 1
    // if(nodo.id =="signature") listaProd.push(sillaSig);
    // if(nodo.id =="nocturne") listaProd.push(sillaNoct);
    // if(nodo.id =="nordic") listaProd.push(sillaNordic);

    //OPCION 2
    let silla=productDisp.find((prod)=>prod.nombre.includes(nodo.id));
    listaProd.push(silla);
    console.log(listaProd)
    console.log(JSON.stringify(listaProd))
    // if(nodo.id =="nocturne") listaProd.add(sillaNoct);
    // if(nodo.id =="nordic") 
    localStorage.setItem('itemsCant',parseInt(cantidad)+1)
    localStorage.setItem('productos',JSON.stringify(listaProd))
}

//JSON - JavaScript Object Notation 
let ejemploJSON=`[{
    "dato1":222,
    "dato2":"skjk"
},{
    "dato1":222,
    "dato2":"skjk"
}]`;

let ejemploJSON2=`{
    "info1":{
        "dato1":222,
        "dato2":"skjk"
    },
      "info2":{
        "dato1":222,
        "dato2":"skjk"
    },
}`

//stingify() - parse() -> JSON
//JSON.stringify(array|objeto) // array-objeto -> JSON
//JSON.parse(json) // JSON -> array - objeto