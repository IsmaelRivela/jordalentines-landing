`use strict`

// Codigo del canvas

// let canvas = document.getElementById(`Main-canvas`)
// let context = canvas.getContext(`2d`)
// let image = new Image()

// image.src = `assets/canvas/(1).png`

// let canvasWidth = window.innerWidth * 0.6 



// image.onload = ()=>{
//     window.addEventListener(`scroll` , e => {

//     context.drawImage(image , 0 , 0 );
// })

// }

// console.log(canvas.width , canvas.height)



//______________________________________

// let canvas = document.getElementById('Main-canvas');
// let context = canvas.getContext('2d');
// let image = new Image();

// image.src = 'assets/canvas/(1).png';

// image.onload = () => {
//     window.addEventListener('scroll', ( e ) => {

//         // Calcular las dimensiones proporcionales de la imagen
//         let aspectRatioImage = image.width / image.height;
//         let drawWidth = canvas.width;
//         let drawHeight = canvas.width / aspectRatioImage;

//         // Calcular la posición de la imagen en el canvas
//         let drawX = 0;
//         let drawY = 0;

//         // Dibujar la imagen en el canvas
//         context.drawImage(image, drawX, drawY, drawWidth, drawHeight);
//     });

//     // Llamada inicial para dibujar la imagen al cargar la página
//     window.dispatchEvent(new Event('scroll'));
// };


//-------------------------------------------------

// const Imagen = new Image()

// const canvas = document.getElementById("Main-canvas")

// const ctx = canvas.getContext("2d")

// const scrollPixeles = document.documentElement.scrollHeight - window.innerHeight

// const totalFrames = 99

// const buttonLink = document.querySelector(`.Main-link`)


// let contadorImagen = 1

// let cargarImagen = ( numeroImagen ) =>{
    
//     Imagen.src = `assets/canvas/(${numeroImagen}).png`

//     Imagen.onload = () => {

//         canvas.width = Imagen.width;
//         canvas.height = Imagen.height;

//         ctx.clearRect(0, 0, canvas.width, canvas.height);

//         ctx.drawImage( Imagen, 0, 50 , canvas.width, canvas.height )

//         // console.log(canvas.width , `canvaswidth`)
//     };
// }



// window.addEventListener( 'scroll' , ( e )=>{

//     let scrollY = window.scrollY 

//     let proporcion = totalFrames / scrollPixeles 

//     let framesAvanzados = Math.floor( scrollY * proporcion )


//     if (framesAvanzados > totalFrames) {
//         framesAvanzados = totalFrames;
//          // Limitar a 99
//     } else if (framesAvanzados < 1) {
//         framesAvanzados = 1; // Limitar a 1
//     }

//     if(framesAvanzados >= 80){
//         buttonLink.classList.add(`isActive`)
//     }else{
//         buttonLink.classList.remove(`isActive`)
//     }

//     cargarImagen( framesAvanzados )
    
// })

// window.onload = () => {
//     cargarImagen( contadorImagen )
// };


// --------------------------------------

const Imagen = new Image()
const canvas = document.getElementById("Main-canvas")
const ctx = canvas.getContext("2d")
const totalFrames = 99
const buttonLink = document.querySelector(`.Main-link`)
const scrollPixeles = document.documentElement.scrollHeight - window.innerHeight


let contadorImagen = 1

let cargarImagen = (numeroImagen) => {
  Imagen.src = `assets/canvas/(${numeroImagen}).png`

  Imagen.onload = () => {
    canvas.width = Imagen.width
    canvas.height = Imagen.height

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(Imagen, 0, 50, canvas.width, canvas.height)
  }
}

function animar() {
  let scrollY = window.scrollY
  let proporcion = totalFrames / scrollPixeles
  let framesAvanzados = Math.floor(scrollY * proporcion)

  if (framesAvanzados > totalFrames) {
    framesAvanzados = totalFrames
  } else if (framesAvanzados < 1) {
    framesAvanzados = 1
  }

  if (framesAvanzados >= 80) {
    buttonLink.classList.add(`isActive`)
  } else {
    buttonLink.classList.remove(`isActive`)
  }

  cargarImagen(framesAvanzados)

  // Llama a requestAnimationFrame para la próxima actualización
  requestAnimationFrame(animar)
}

// Inicia la animación
requestAnimationFrame(animar)

// Puedes también manejar la lógica de inicialización en window.onload si es necesario
window.onload = () => {
  cargarImagen(contadorImagen)
 }
