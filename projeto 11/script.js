const insert = document.getElementById("insert")

//window = pego a janela do programa
window.addEventListener("keydown", (event) => { //event é o que acontece após eu apertar uma tecla

    //verificando objetos do evento e inserindo no html
    insert.innerHTML = `
    
    <div class="key">
        ${event.key === " " ? "Space" : event.key} 
        <small>event.key</small>
    </div>
    
    <div class="key">
        ${event.keyCode}
        <small>event.keyCode</small>
    </div>
    
    <div class="key">
        ${event.code}
        <small>event.code</small>
    </div>
    ` 
})