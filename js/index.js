`use strict`

// Listener de scroll

const mainScrolls = document.querySelector(`.Main-scrolls`)
const mainAngelRight = document.querySelector(`.Main-angels-img--der`)
const mainAngelLeft = document.querySelector(`.Main-angels-img--izq`)
const mainAngels = document.querySelector(`.Main-angels`)
const mainTv = document.querySelector(`.Main-tv`)
const buttonTv = document.querySelector(`.Main-tv-link`)


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

