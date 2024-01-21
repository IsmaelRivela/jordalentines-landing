`use strict`

{// const angelsLayer = document.querySelector(`.main__angels`)

// const tvLayer = document.querySelector( `.main__tv ` )
// const pergaminosLayer = document.querySelector(`.main__scrolls`)

// // let hasScroll = false

// // let mouseMovePositivo = ()=>{
// //     angelsLayer.style.transform = `perspective(100px) translate3d( 0px , 0px , 1rem)`
// // }
// // let mouseMoveNegativo = ()=>{
// //     angelsLayer.style.transform = `perspective(100px) translate3d( 0px , 0px , -1rem)`
// // }

// window.addEventListener( `wheel` , ( e )=>{

//     let distancia = e.deltaY
//     let contador = 0

//     let mouseMovePositivo = ()=>{
//         contador++
//     }

//     let mouseMoveNegativo = ()=>{
//         contador--
//     }

//     let mouseWheel = ()=>{
//         distancia > 0
//             ? mouseMovePositivo()
//             : mouseMoveNegativo()
//     }

    

//     angelsLayer.style.transform = `translate3d( 0px , 0px , ${distancia * contador}px )`

//     mouseWheel()
    
//     console.log( distancia
//          )
//     console.log( contador )
// }
}

const mainScrolls = document.querySelector(`.Main-scrolls`)
const mainAngelRight = document.querySelector(`.Main-angels-img--der`)
const mainAngelLeft = document.querySelector(`.Main-angels-img--izq`)
const mainAngels = document.querySelector(`.Main-angels`)
const mainTv = document.querySelector(`.Main-tv`)
const buttonTv = document.querySelector(`.Main-tv-link`)

// const alturaVentana = document.documentElement.scrollHeight - window.innerHeight

// let proporcion = (scrollY / alturaVentana) * 100


window.addEventListener(`scroll` , ()=>{
    
    
    const alturaVentana = document.documentElement.scrollHeight - window.innerHeight

    let scrollY = Math.floor(window.scrollY)
    
    let proporcion = Math.floor((scrollY / alturaVentana) * 100)
    
    let pergaminoHandler = ()=>{

        if(proporcion <= 30){
            proporcion = 30
        }

        mainScrolls.style.transform = `scale(calc(${proporcion}% * 3)`
        
        mainTv.style.transform = `scale(calc(${proporcion}% * 1.5 )`

        mainAngels.style.transform = `scale(calc(${proporcion}% * 3.5)`

        if(proporcion >= 80){
            buttonTv.classList.add(`isActive`)
        }else{
            buttonTv.classList.remove(`isActive`)
        }
    }
    

    pergaminoHandler()
    
    console.log(pergaminoHandler)
    console.log(proporcion)

})

