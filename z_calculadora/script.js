const result = document.getElementById("resultado");
const valor = document.getElementById("prev-result");
const erro = document.querySelector(".fundo")
const b0 = document.getElementById("0");
const b1 = document.getElementById("1");
const b2 = document.getElementById("2");
const b3 = document.getElementById("3");
const b4 = document.getElementById("4");
const b5 = document.getElementById("5");
const b6 = document.getElementById("6");
const b7 = document.getElementById("7");
const b8 = document.getElementById("8");
const b9 = document.getElementById("9");
const bMenos = document.getElementById("menos");
const bPonto = document.getElementById("ponto");
const bIgual = document.getElementById("igual");
const bMais = document.getElementById("mais");
const bMulti = document.getElementById("multi");
const bDiv = document.getElementById("div");
const bReset = document.getElementById("C");
const bParenteses1 = document.getElementById("parenteses1");
const bParenteses2 = document.getElementById("parenteses2");
const bPorcent = document.getElementById("porcentagem");

let resultado;

b0.addEventListener("click", () => {
  if (result.textContent == "0") {
    result.innerText = "0";
    valor.innerText = "0";
  } else {
    result.innerText = result.textContent + "0";
    valor.innerText = valor.textContent + "0";
  }
});

b1.addEventListener("click", () => {
  if (result.textContent == "0") {
    result.innerText = "1";
    valor.innerText = "1";
  } else {
    result.innerText = result.textContent + "1";
    valor.innerText = valor.textContent + "1";
  }
});

b2.addEventListener("click", () => {
  if (result.textContent == "0") {
    result.innerText = "2";
    valor.innerText = "2";
  } else {
    result.innerText = result.textContent + "2";
    valor.innerText = valor.textContent + "2";
  }
});

b3.addEventListener("click", () => {
  if (result.textContent == "0") {
    result.innerText = "3";
    valor.innerText = "3";
  } else {
    result.innerText = result.textContent + "3";
    valor.innerText = valor.textContent + "3";
  }
});

b4.addEventListener("click", () => {
  if (result.textContent == "0") {
    result.innerText = "4";
    valor.innerText = "4";
  } else {
    result.innerText = result.textContent + "4";
    valor.innerText = valor.textContent + "4";
  }
});

b5.addEventListener("click", () => {
  if (result.textContent == "0") {
    result.innerText = "5";
    valor.innerText = "5";
  } else {
    result.innerText = result.textContent + "5";
    valor.innerText = valor.textContent + "5";
  }
});

b6.addEventListener("click", () => {
  if (result.textContent == "0") {
    result.innerText = "6";
    valor.innerText = "6";
  } else {
    result.innerText = result.textContent + "6";
    valor.innerText = valor.textContent + "6";
  }
});

b7.addEventListener("click", () => {
  if (result.textContent == "0") {
    result.innerText = "7";
    valor.innerText = "7";
  } else {
    result.innerText = result.textContent + "7";
    valor.innerText = valor.textContent + "7";
  }
});

b8.addEventListener("click", () => {
  if (result.textContent == "0") {
    result.innerText = "8";
    valor.innerText = "8";
  } else {
    result.innerText = result.textContent + "8";
    valor.innerText = valor.textContent + "8";
  }
});

b9.addEventListener("click", () => {
  if (result.textContent == "0") {
    result.innerText = "9";
    valor.innerText = "9";
  } else {
    result.innerText = result.textContent + "9";
    valor.innerText = valor.textContent + "9";
  }
});

bPonto.addEventListener("click", () => {
  if (result.textContent == "0") {
    alert("Digite um número antes de colocar o ponto");
  } else {
    result.innerText = result.textContent + ".";
    valor.innerText = valor.textContent + ".";
  }
});

bMais.addEventListener("click", () => {
  if (result.textContent == "0") {
    alert("Digite um número antes de colocar o sinal de mais");
  } else {
    result.innerText = result.textContent + "+";
    valor.innerText = valor.textContent + "+";
  }
});

bMenos.addEventListener("click", () => {
  if (result.textContent == "0") {
    alert("Digite um número antes de colocar o sinal de menos");
  } else {
    result.innerText = result.textContent + "-";
    valor.innerText = valor.textContent + "-";
  }
});

bMulti.addEventListener("click", () => {
  if (result.textContent == "0") {
    alert("Digite um número antes de colocar o sinal de multiplicação");
  } else {
    result.innerText = result.textContent + "x";
    valor.innerText = valor.textContent + "*";
  }
});

bDiv.addEventListener("click", () => {
  if (result.textContent == "0") {
    alert("Digite um número antes de colocar o sinal de multiplicação");
  } else {
    result.innerText = result.textContent + "/";
    valor.innerText = valor.textContent + "/";
  }
});

bPorcent.addEventListener("click", () => {
  if (result.textContent == "0") {
    alert("Digite um número antes de colocar o sinal de multiplicação");
  } else {
    result.innerText = result.textContent + "%";
    valor.innerText = valor.textContent + "/100";
  }
});

bParenteses1.addEventListener("click", () => {
  if (result.textContent == "0") {
    result.innerText = "(";
    valor.innerText = "(";
  } else {
    result.innerText = result.textContent + "(";
    valor.innerText = valor.textContent + "(";
  }
});

bParenteses2.addEventListener("click", () => {
  if (result.textContent == "0") {
    result.innerText = ")";
    valor.innerText = ")";
  } else {
    result.innerText = result.textContent + ")";
    valor.innerText = valor.textContent + ")";
  }
});

bIgual.addEventListener("click", () => {
  if (result.textContent == "0") {
    alert("Digite um número antes de colocar o sinal de igual");
  } else {
    operacao();
  }
});

function operacao() {
  try {
    resultado = eval(valor.textContent);
    valor.innerText = resultado
    result.innerText = resultado;
  } catch (err) {
    setTimeout(() => {
        erro.classList.remove("ativo")
    }, 2000);
    erro.classList.add("ativo")
    if (typeof resultado !== "undefined") {
        result.innerText = resultado
        valor.innerText = resultado
    } else {
        result.innerText = "0"
        valor.innerText = "0"
    }
    
  }
}

erro.addEventListener("click", () => {
    erro.classList.remove("ativo")
})
