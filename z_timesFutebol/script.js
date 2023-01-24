const panels = document.querySelectorAll('.panel') //selecionar qualaquer coisa, nesse caso, a class panel

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses() //chamei uma função
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
} //criei a função