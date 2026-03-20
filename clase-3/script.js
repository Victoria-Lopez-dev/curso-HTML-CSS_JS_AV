const productos = [
  { id: 1, nombre: "Laptop", precio: 1200, categoria: "tecnologia", stock: 5 },
  { id: 2, nombre: "Mouse", precio: 25, categoria: "tecnologia", stock: 50 },
  { id: 3, nombre: "Teclado", precio: 75, categoria: "tecnologia", stock: 0 },
  { id: 4, nombre: "Silla", precio: 300, categoria: "hogar", stock: 10 },
  { id: 5, nombre: "Escritorio", precio: 450, categoria: "hogar", stock: 2 }
];
const productosB=[
    { id: 6, nombre: "plato", precio: 1200, categoria: "hogar", stock: 5 },
  { id: 7, nombre: "lapices", precio: 25, categoria: "libreria", stock: 150 },
]
const usuarios = [
  { id: 1, nombre: "Ana", edad: 22, activo: true, compras: [120, 300] },
  { id: 2, nombre: "Luis", edad: 17, activo: false, compras: [] },
  { id: 3, nombre: "Carlos", edad: 30, activo: true, compras: [50] },
  { id: 4, nombre: "Marta", edad: 25, activo: true, compras: [200, 150, 100] }
];

//HOF -> hight Order Function 
//funciones que tienen dentro otras funciones 

//map -foreach - filter -find
//some -> devuelve un booleano 
// - reduce-> acumular -> (acc,item)=>como funciona el acumulador,valorInicial
//  concat

productos.filter((prod)=>{ prod.precio>200})

function alerta(params) {
  alert(params)
}
function saludo(nombre,mensaje) {
    let frase=nombre+' bienvenid@'
    mensaje(frase)
}

//saludo("Marta",alerta)

let resultado=productos.some((prod)=> prod.categoria =="hogar");
let resultado2=productos.some((prod)=> prod.categoria =="oficina");

let total=productos.reduce((acc,prod)=>acc+prod.precio,0)

let productosFinal=productos.concat(productosB) // [...productos,..productosB];

//encadenamiento de metodos -> metodos que devuevlan un array 


let comprasTotales=productos
.map((prod)=>prod.precio)
.reduce((acc,prec)=>acc+prec,0);


console.log(comprasTotales)
console.log(productosFinal)

console.log(resultado,resultado2)