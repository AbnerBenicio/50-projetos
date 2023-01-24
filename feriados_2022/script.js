const diaEl = document.getElementById("datas")
const avanca = document.getElementById("vai")
let input = document.querySelector(".t")


input.addEventListener("click", (event)=>{

    event.preventDefault()

    let i = 0
    let txt = document.querySelector("input").value
    geraFeriado(i, txt)

    avanca.addEventListener("click", () => {
        if (i < 11) {
            i = 1 + i
        } else {i = 0}
        geraFeriado(i, txt)
    })

})


//consumindo a api aqui dentro
async function geraFeriado (i, txt) { //async = definir uma função como assíncrona
    const config = {
        headers: {
            Accept: "application/json"
        },
    }

    const texto = "https://brasilapi.com.br/api/feriados/v1/" + txt
    console.log(texto)

    const res = await fetch("https://v2.nba.api-sports.io/games",config) //await eu espero armazenar a promisse na variável
                                                                 //armazenando a promisse na váriável res

    const data = await res.json()
    console.log(data)
        
    const info = document.createElement("div")
    info.className = "data"
    diaEl.innerHTML = data[i].date.replace(/[-]/g, "/")
}