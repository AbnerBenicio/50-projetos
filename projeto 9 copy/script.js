const sounds = ["Tome", "Ele Gosta", "Dança", "Cavalo", "Calma", "Ui"] //LISTA COM OS "NOMES" DOS BOTÕES

sounds.forEach(sound => { //PERCORRENDO A LISTA
    
    const btn = document.createElement("button") //CRIANDO OS BOTÕES
    btn.classList.add("btn") //DEFININDO A CLASSE DOS BOTÕES

    btn.innerText = sound //ADICIONANDO O TEXTO DA LISTA AOS BOTÕES

    document.getElementById("buttons").appendChild(btn) //ADICIONO OS BOTÕES AO HTML

    btn.addEventListener("click", () => {

        stopSong() //CHAMANDO A FUNÇÃO
        document.getElementById(sound).play() //PEGO O ELEMENTO COM O ID ESPECÍFICO E DOU PLAY NO ÁUDIO
    })
 
})

const btnPara = document.createElement("button") //CRIANDO O BOTÃO
btnPara.classList.add("btn") //DEFININDO A CLASSE DO BOTÃO
btnPara.innerText = "Parar" //ADICIONANDO TEXTO AO BOTÃO
document.getElementById("buttons").appendChild(btnPara) //ADICIONANDO BOTÃO NO HTML

btnPara.addEventListener("click", () => { //CHAMANDO A FUNÇÃO
    stopSong()
})

function stopSong() { //FUNÇÃO QUE PAUSA O SOM
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause() //PERCORRO OS SONS DNV, VEJO QUAL TA TOCANDO E PAUSO
        song.currentTime = 0 //DEFININDO TEMPO DE PARTIDA (INICIAL) COMO ZERO, PARA COMEÇAR DO INÍCIO
    })
}

