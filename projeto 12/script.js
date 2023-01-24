const btns = document.querySelectorAll(".faq-toggle")

btns.forEach ((btn) => {
    btn.addEventListener ("click", ()=>{
        btn.parentNode.classList.toggle("ativo")
    })
}) 
//Percorro todos os botões
//Para cada botão, eu adiciono um evento de click
//A cada click em um botão, o seu nó pai (parentNode) vai sofrer uma troca de classe
//*parentNode é a div ou tag em que o botão, ou qualquer outra div/tag está dentro

