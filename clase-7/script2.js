const themeRender=()=>{

    // definir el tema del sitio al cargarse el HTML
    let theme=localStorage.getItem("theme");//night - day - null
    if(theme == 'night'){
        document.body.classList.add('night');
        localStorage.setItem("theme",'night')
    }else{
        document.body.classList.remove('night');
        localStorage.setItem("theme",'day')
    }
    
    //obtener la informacion de la lista de compra previa y mostrarla

    let prodPreviosJSON=localStorage.getItem("productos");//JSON
    let prodPrevios=JSON.parse(prodPreviosJSON);
    let listaDesglo=document.querySelector("ul")
    if(prodPrevios){
        console.log(prodPrevios,);
        console.log(prodPreviosJSON)
        prodPrevios.forEach((item)=>{
            let li=document.createElement('li');
            li.innerHTML=`<strong>Producto:</strong><span>${item.nombre}</span>
            <strong>Precio:</strong><span>${item.precio}</span>`
            return listaDesglo.appendChild(li)
        })
    }else{
        listaDesglo.innerHTML=`<li> No tiene productos cargados en el carrito de compras </li>`
    }
};

// <li>
//             <strong>Producto:</strong><span></span>
//             <strong>Precio:</strong><span></span>
//         </li>

toString()