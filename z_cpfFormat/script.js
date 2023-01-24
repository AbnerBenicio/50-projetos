const campoCPF = document.getElementById("cpf") //PEGO O ELEMENTO HTML

campoCPF.addEventListener('focusin', (event) => { //focusin quando acessa o input
    let valorDoCPF = campoCPF.value;
    //let valorDoCPF = event.target.value; ESSE OU O EM CIMA FAZEM A MESMA COISA

    campoCPF.value = valorDoCPF.replace(/[.-]/g, "")
}) //SELECIONO O EVENTO (INPUT) E COM BASE NELE EU USO TARGET PRA SELECIONAR E VALUE PRA ISOLAR O VALOR
   //CRIO UMA VARIÁVEL PARA ARMAZENAR ESSE VALOR
   //DEFINO O VALOR DO CPF COMO SENDO SEM PONTOS E TRAÇOS
  
campoCPF.addEventListener('focusout', () => { //focusout quando sai do input
    let valorDoCPF = campoCPF.value;
    //let valorDoCPF = event.target.value; ESSE OU O EM CIMA FAZEM A MESMA COISA

    campoCPF.value = valorDoCPF.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4")
}) //AO SAIR DO INPUT, DEFINO UMA VÁRIÁVEL COM O VALOR QUE FOI DIGITADO
   //DEFINO O VALOR DO CPF COM PONTOS E TRAÇOS

