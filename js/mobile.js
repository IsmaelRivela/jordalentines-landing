// `use strict`
// {
//   // // Listener de scroll para pintar imagenes en el canvas a medida que haces scroll
//   // const Imagen = new Image()
//   // const canvas = document.getElementById("Main-canvas")
//   // const ctx = canvas.getContext("2d")
//   // const totalFrames = 99
//   // const buttonLink = document.querySelector(`.Main-link`)
//   // const scrollPixeles = document.documentElement.scrollHeight - window.innerHeight
//   // let contadorImagen = 1
//   // let cargarImagen = (numeroImagen) => {
//   //   Imagen.src = `assets/canvas/(${numeroImagen}).png`
//   //   Imagen.onload = () => {
//   //     canvas.width = Imagen.width
//   //     canvas.height = Imagen.height
//   //     ctx.clearRect(0, 0, canvas.width, canvas.height)
//   //     ctx.drawImage(Imagen, 0, 50, canvas.width, canvas.height)
//   //   }
//   // }
//   // let animar = () => {
//   //   let scrollY = window.scrollY
//   //   let proporcion = totalFrames / scrollPixeles
//   //   let framesAvanzados = Math.floor(scrollY * proporcion)
//   //   if (framesAvanzados > totalFrames) {
//   //     framesAvanzados = totalFrames
//   //   } else if (framesAvanzados < 1) {
//   //     framesAvanzados = 1
//   //   }
//   //   if (framesAvanzados >= 80) {
//   //     buttonLink.classList.add(`isActive`)
//   //   } else {
//   //     buttonLink.classList.remove(`isActive`)
//   //   }
//   //   cargarImagen(framesAvanzados)
//   //   requestAnimationFrame(animar)
//   // }
//   // requestAnimationFrame(animar)
//   // window.onload = () => {
//   //   cargarImagen(contadorImagen)
//   //  }
// }

// const canvas = document.getElementById("Main-canvas");
// const ctx = canvas.getContext("2d");
// const buttonLink = document.querySelector(".Main-link");
// const scrollPixels = document.documentElement.scrollHeight - window.innerHeight;

// const imageLoader = document.querySelector(`.imageLoader`)

// const totalFrames = 99;
// const imagesPerPage = 10;
// const cache = new Map();

// for (let i = 0; i < 99; i++) {
//   imageLoader.src = `assets/canvas/(${i}).png`;
// }

// let currentPage = 1;

// let cargarImagen = (numeroImagen) => {
//   if (cache.has(numeroImagen)) {
//     // Usar la imagen desde la caché si está disponible
//     return Promise.resolve(cache.get(numeroImagen));
//   }

//   return new Promise((resolve, reject) => {
//     const Imagen = new Image();
//     Imagen.src = `assets/canvas/(${numeroImagen}).png`;

//     Imagen.onload = () => {
//       cache.set(numeroImagen, Imagen);
//       resolve(Imagen);
//     };

//     Imagen.onerror = (error) => {
//       reject(error);
//     };
//   });
// };

// let animar = () => {
//   let scrollY = window.scrollY;
//   let proporcion = totalFrames / scrollPixels;
//   let framesAvanzados = Math.floor(scrollY * proporcion);

//   if (framesAvanzados > totalFrames) {
//     framesAvanzados = totalFrames;
//   } else if (framesAvanzados < 1) {
//     framesAvanzados = 1;
//   }

//   if (framesAvanzados >= 80) {
//     buttonLink.classList.add("isActive");
//   } else {
//     buttonLink.classList.remove("isActive");
//   }

//   cargarImagen(framesAvanzados).then((imagen) => {
//     canvas.width = imagen.width;
//     canvas.height = imagen.height;

//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(imagen, 0, 50, canvas.width, canvas.height);
//   });

//   requestAnimationFrame(animar);
// };

// const loadNextPage = () => {
//   for (let i = 0; i < imagesPerPage; i++) {
//     cargarImagen(currentPage * imagesPerPage + i);
//   }
//   if(currentPage >= 99)
//   currentPage++;
// };

// // Inicializar con la primera página
// loadNextPage();

// // Escuchar el evento de scroll
// window.addEventListener("scroll", () => {
//   // Detectar cuando el usuario llega al final de la página
//   if (
//     window.scrollY + window.innerHeight >=
//     document.documentElement.scrollHeight
//   ) {
//     // Cargar la siguiente página
//     loadNextPage();
//   }

//   // Animar según el scroll
//   requestAnimationFrame(animar);
// });

// // Evento onload para cargar la primera imagen al cargar la página
// window.onload = () => {
//   cargarImagen(1);
// };


'use strict';

const canvas = document.getElementById("Main-canvas");
const ctx = canvas.getContext("2d");
const buttonLink = document.querySelector(".Main-link");

const totalFrames = 99;
const cache = new Map();

let currentPage = 1;

let cargarImagen = (numeroImagen) => {
  if (cache.has(numeroImagen)) {
    // Usar la imagen desde la caché si está disponible
    return Promise.resolve(cache.get(numeroImagen));
  }

  return new Promise((resolve, reject) => {
    const Imagen = new Image();
    Imagen.src = `assets/canvas/(${numeroImagen}).png`;

    Imagen.onload = () => {
      cache.set(numeroImagen, Imagen);
      resolve(Imagen);
    };

    Imagen.onerror = (error) => {
      reject(error);
    };
  });
}; 

// Cargar todas las imágenes al iniciar la página
for (let i = 0; i < totalFrames; i++) {
  cargarImagen(i + 1);
}

// Animar el canvas según el scroll
let animar = () => {
  let scrollY = window.scrollY;
  let framesAvanzados = Math.floor((scrollY / window.innerHeight) * totalFrames);

  if (framesAvanzados > totalFrames) {
    framesAvanzados = totalFrames;
  } else if (framesAvanzados < 1) {
    framesAvanzados = 1;
  }

  if (framesAvanzados >= 80) {
    buttonLink.classList.add("isActive");
  } else {
    buttonLink.classList.remove("isActive");
  }

  cargarImagen(framesAvanzados).then((imagen) => {
    canvas.width = imagen.width;
    canvas.height = imagen.height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(imagen, 0, 50, canvas.width, canvas.height);
  });
};

// Animar al cargar la página
animar();

// Animar según el scroll
window.addEventListener("scroll", () => {
  requestAnimationFrame(animar);
});

// Evento onload para cargar la primera imagen al cargar la página
window.onload = () => {
  cargarImagen(1);
};
