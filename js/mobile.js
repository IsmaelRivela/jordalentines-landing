`use strict`

// Listener de scroll para pintar imagenes en el canvas a medida que haces scroll

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

let animar = () => {
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

  requestAnimationFrame(animar)
}

requestAnimationFrame(animar)

window.onload = () => {
  cargarImagen(contadorImagen)
 }
