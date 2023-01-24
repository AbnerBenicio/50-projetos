//chamando itens relacionados ao input e botões;
const add = document.getElementById("add")
const remove = document.getElementById("primeiro")
const notas = document.querySelector(".notas")
const principal = document.querySelector(".campos.principal")

//chamando itens relacioados ao dialog (modal);
const mostrar = document.querySelector(".instru")
const confir = document.querySelector(".confirm")
const dialog = document.querySelector("dialog")

//Função para mostrar o modal (pop-up);
mostrar.onclick = function () {
    dialog.showModal()
}

//Função para fechar o modal(pop-up) por meio de um botão
confir.onclick = function() {
    dialog.close()
}

//função para remover o input primário
remove.addEventListener("click", ()=>{
    principal.remove()
})

//função para criar novo input com botão ao lado
add.addEventListener("click", ()=>{

    //criando div, button etc
    let nDiv = document.createElement("div")
    nDiv.className = "campos"

    let marcador = document.createElement("div")
    marcador.className = "marcador"

    let marca = document.createElement("input")
    marca.type = "checkbox"

    let entrada = document.createElement("input")
    entrada.type = "text"

    let button = document.createElement("button")
    button.className = "btnC"

    let icon = document.createElement("i")
    icon.className = "fas fa-close"

    //adicionando a div com suas informações no html
    nDiv.appendChild(entrada)
    marcador.appendChild(marca)
    button.appendChild(icon)
    marcador.appendChild(button)
    nDiv.appendChild(marcador)
    notas.appendChild(nDiv)

    //função que remove input criado na função anterio
    button.addEventListener("click", ()=>{
        nDiv.remove()
    })
    //ao criar um botão, como o de remover, dentro de uma ação, pra ele funcionar você chama a função que usa ele dentro da que cria;
    //.remove serve para remover uma div, como a nDiv, que eu criei, ou como a principal, que eu chamei à partir da classe, lá em cima.
    
} )

