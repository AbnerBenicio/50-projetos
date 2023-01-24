const temaClaro = document.querySelector(".dia")
const temaEscuro = document.querySelector(".noite")
const tela = document.querySelector(".container")
const menu = document.querySelector(".menu")
const nav = document.querySelector("nav")

temaEscuro.addEventListener ("click", ()=>{
    tela.classList.add("ativo")
})

temaClaro.addEventListener ("click", ()=>{
    tela.classList.remove("ativo")
})

menu.addEventListener ( "click", () => {
    nav.classList.toggle("ativo")
    menu.classList.toggle("ativo")
})