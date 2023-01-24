const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

//consumindo api aqui dentro
async function generateJoke () { //async = definir uma função como assíncrona
    const config = {
        headers: {
            Accept: "application/json"
        },
    }

    const res = await fetch("https://icanhazdadjoke.com",config) //await eu espero armazenar a promisse na variável
                                                                 //armazenando a promisse na váriável res

    const data = await res.json() //await eu espero armazenar a promisse na variável
                                  //.jason() pega os arquivos em json e converte, passando para a variável data

    jokeEl.innerHTML = data.joke //após a promisse estar armazenada, eu seleciono o objeto que eu quero dentro dela
}

// //consumindo a api aqui dentro
// function generateJoke () {
//     const config = {
//         headers: {
//             Accept: "application/json"
//         },
//     }

//     fetch("https://icanhazdadjoke.com",config).then(res => res.json()).then(data => {
//         jokeEl.innerHTML = data.joke
//     })

// }
