const tagsEl = document.getElementById("tags")
const textarea = document.getElementById("textarea") //chamo itens do html

textarea.focus() //ao iniciar a página já foca para o usuário escrever

textarea.addEventListener ("keyup", (event) => { //a cada tecla pressionada:
    createTags(event.target.value) //eu envio o valor digitado para a função que vai criara as tags 

    if (event.key === "Enter") { //se a tecla que eu clicar for enter ele limpa o input (textarea)
        setTimeout(() => {
            event.target.value = ""
        }, 10)

        randomSelect() //e chama a função que ira fazer o sorteio
    }
})

function createTags (text) { //nessa função
    const tags = text.split(",").filter(tag => tag.trim() !== "").map(tag => tag.trim())
    //crio uma lista "tags" que tem como separador (split)
    //filtra (filter), textos vazios, só aceitando o que for diferente deles
    //e manipula (map) as tags sem espaços em branco

    tagsEl.innerHTML = "" //toda vez que chamar a função o html será limpo, para não gerar acumulo de letras, e sim só os nome

    tags.forEach((tag) => {
        const tagEl = document.createElement("span")
        tagEl.classList.add("tag")
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    }) //percorro a lista ,crio elementos html e vou adicionando as tags neles e adicionando o elemento criado (span) ao nó pai (tagEl)
}

function randomSelect () { //nessa função:
    const times = 30 //defino um tempo como parametro

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        selectTag(randomTag)

        setTimeout(() => {
            removeSelectTag(randomTag)
        }, 100);
    }, 100)
    //crio um intervalo em que, a cada 100ms eu defino qual foi a tag escolhida na função pickRandomTag
    //mudo a cor da tag selecionada
    //retorno a cor original dps de mais 100ms
    //isso fica rodando até que o setTimeout de baixo não seja ativo, ou seja, 3000 ms
    //e só para de rodar porque dentro do setTimeout o intervalo acima foi limpo

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()
            selectTag(randomTag)
        }, 100);

    }, times * 100);
    //após ficar sorteando, eu paro o sorteio, limpando o intervalo
    //defino qual tag é escolhida ao final, usando a função pickRandomTag
    //e mudo a cor dela
    //tudo isso depois de 30 * 100ms de sorteio
}

function pickRandomTag () { //nessa função
    const tags = document.querySelectorAll(".tag") //seleciono todas as tags

    return tags[Math.floor(Math.random() * tags.length)] //retorno uma tag escolhida com um índice aleatorio
    //math.floor pega o valor e arredonda para baixo
    //math.random pega um valor decimal aleatório
    //tags.length pega o tamanho da lista de tags
}

function selectTag (tag) { ///nessa função
    tag.classList.add("select") //adiciona a classe select no html, que muda de cor no css
}

function removeSelectTag (tag) { //nessa função
    tag.classList.remove("select") //remove a classe select no html, que muda de cor no css
}