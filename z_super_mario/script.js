const abrirModal = document.querySelector(".abrir-modal")
const fecharModal = document.querySelector(".fechar-modal")

const modal = document.querySelector(".modal")
const iframe = document.getElementById("video")
const src = iframe.src

abrirModal.addEventListener("click", () => {
    toggle()
    iframe.setAttribute("src", src)
})

fecharModal.addEventListener("click", () => {
    toggle()
    iframe.setAttribute("src", "")
})

function toggle () {
    modal.classList.toggle("aberto")
}

