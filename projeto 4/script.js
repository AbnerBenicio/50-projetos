const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active') //toggle add e remove
    input.focus() //focus já direciona pra começar a digitar sem ter que clicar no search
})

