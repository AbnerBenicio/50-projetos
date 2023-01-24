const infos = document.querySelectorAll(".p1")

infos.forEach((info) => {
    
    info.addEventListener("click", () => {

        info.classList.toggle("ativo")

    })
})





