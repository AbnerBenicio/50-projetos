const result = document.getElementById("resultado");
const valor = document.getElementById("prev-result");
const pseudo = document.getElementById("pseudo");
const contador = document.getElementById("contador");
const erro = document.querySelector(".fundo");
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
    pseudo.innerText = "0";
  } else if (pseudo.textContent != "p") {
    let str = valor.textContent;
    if (valor.textContent.charAt(str.length - 1) == ")") {
      result.innerText = result.textContent + "0";
      valor.innerText = valor.textContent + "*0";
      pseudo.innerText = pseudo.textContent + "0";
    } else {
      result.innerText = result.textContent + "0";
      valor.innerText = valor.textContent + "0";
      pseudo.innerText = pseudo.textContent + "0";
    }
  } else {
    result.innerText = "0";
    valor.innerText = "0";
    pseudo.innerText = "0";
  }
});

b1.addEventListener("click", () => {
  if (result.textContent == "0") {
    result.innerText = "1";
    valor.innerText = "1";
    pseudo.innerText = "1";
  } else if (pseudo.textContent != "zera") {
    let str = valor.textContent;
    if (valor.textContent.charAt(str.length - 1) == ")") {
      result.innerText = result.textContent + "1";
      valor.innerText = valor.textContent + "*1";
      pseudo.innerText = pseudo.textContent + "1";
    } else {
      result.innerText = result.textContent + "1";
      valor.innerText = valor.textContent + "1";
      pseudo.innerText = pseudo.textContent + "1";
    }
  } else {
    result.innerText = "1";
    valor.innerText = "1";
    pseudo.innerText = "1";
  }
});

b2.addEventListener("click", () => {
  if (result.textContent == "0") {
    result.innerText = "2";
    valor.innerText = "2";
    pseudo.innerText = "2";
  } else if (pseudo.textContent != "zera") {
    let str = valor.textContent;
    if (valor.textContent.charAt(str.length - 1) == ")") {
      result.innerText = result.textContent + "2";
      valor.innerText = valor.textContent + "*2";
      pseudo.innerText = pseudo.textContent + "2";
    } else {
      result.innerText = result.textContent + "2";
      valor.innerText = valor.textContent + "2";
      pseudo.innerText = pseudo.textContent + "2";
    }
  } else {
    result.innerText = "2";
    valor.innerText = "2";
    pseudo.innerText = "2";
  }
});

b3.addEventListener("click", () => {
  if (result.textContent == "0") {
    result.innerText = "3";
    valor.innerText = "3";
    pseudo.innerText = "3";
  } else if (pseudo.textContent != "zera") {
    let str = valor.textContent;
    if (valor.textContent.charAt(str.length - 1) == ")") {
      result.innerText = result.textContent + "3";
      valor.innerText = valor.textContent + "*3";
      pseudo.innerText = pseudo.textContent + "3";
    } else {
      result.innerText = result.textContent + "3";
      valor.innerText = valor.textContent + "3";
      pseudo.innerText = pseudo.textContent + "3";
    }
  } else {
    result.innerText = "3";
    valor.innerText = "3";
    pseudo.innerText = "3";
  }
});

b4.addEventListener("click", () => {
  if (result.textContent == "0") {
    result.innerText = "4";
    valor.innerText = "4";
    pseudo.innerText = "4";
  } else if (pseudo.textContent != "zera") {
    let str = valor.textContent;
    if (valor.textContent.charAt(str.length - 1) == ")") {
      result.innerText = result.textContent + "4";
      valor.innerText = valor.textContent + "*4";
      pseudo.innerText = pseudo.textContent + "4";
    } else {
      result.innerText = result.textContent + "4";
      valor.innerText = valor.textContent + "4";
      pseudo.innerText = pseudo.textContent + "4";
    }
  } else {
    result.innerText = "4";
    valor.innerText = "4";
    pseudo.innerText = "4";
  }
});

b5.addEventListener("click", () => {
  if (result.textContent == "0") {
    result.innerText = "5";
    valor.innerText = "5";
    pseudo.innerText = "5";
  } else if (pseudo.textContent != "zera") {
    let str = valor.textContent;
    if (valor.textContent.charAt(str.length - 1) == ")") {
      result.innerText = result.textContent + "5";
      valor.innerText = valor.textContent + "*5";
      pseudo.innerText = pseudo.textContent + "5";
    } else {
      result.innerText = result.textContent + "5";
      valor.innerText = valor.textContent + "5";
      pseudo.innerText = pseudo.textContent + "5";
    }
  } else {
    result.innerText = "5";
    valor.innerText = "5";
    pseudo.innerText = "5";
  }
});

b6.addEventListener("click", () => {
  if (result.textContent == "0") {
    result.innerText = "6";
    valor.innerText = "6";
    pseudo.innerText = "6";
  } else if (pseudo.textContent != "zera") {
    let str = valor.textContent;
    if (valor.textContent.charAt(str.length - 1) == ")") {
      result.innerText = result.textContent + "6";
      valor.innerText = valor.textContent + "*6";
      pseudo.innerText = pseudo.textContent + "6";
    } else {
      result.innerText = result.textContent + "6";
      valor.innerText = valor.textContent + "6";
      pseudo.innerText = pseudo.textContent + "6";
    }
  } else {
    result.innerText = "6";
    valor.innerText = "6";
    pseudo.innerText = "6";
  }
});

b7.addEventListener("click", () => {
  if (result.textContent == "0") {
    result.innerText = "7";
    valor.innerText = "7";
    pseudo.innerText = "7";
  } else if (pseudo.textContent != "zera") {
    let str = valor.textContent;
    if (valor.textContent.charAt(str.length - 1) == ")") {
      result.innerText = result.textContent + "7";
      valor.innerText = valor.textContent + "*7";
      pseudo.innerText = pseudo.textContent + "7";
    } else {
      result.innerText = result.textContent + "7";
      valor.innerText = valor.textContent + "7";
      pseudo.innerText = pseudo.textContent + "7";
    }
  } else {
    result.innerText = "7";
    valor.innerText = "7";
    pseudo.innerText = "7";
  }
});

b8.addEventListener("click", () => {
  if (result.textContent == "0") {
    result.innerText = "8";
    valor.innerText = "8";
    pseudo.innerText = "8";
  } else if (pseudo.textContent != "zera") {
    let str = valor.textContent;
    if (valor.textContent.charAt(str.length - 1) == ")") {
      result.innerText = result.textContent + "8";
      valor.innerText = valor.textContent + "*8";
      pseudo.innerText = pseudo.textContent + "8";
    } else {
      result.innerText = result.textContent + "8";
      valor.innerText = valor.textContent + "8";
      pseudo.innerText = pseudo.textContent + "8";
    }
  } else {
    result.innerText = "8";
    valor.innerText = "8";
    pseudo.innerText = "8";
  }
});

b9.addEventListener("click", () => {
  if (result.textContent == "0") {
    result.innerText = "9";
    valor.innerText = "9";
    pseudo.innerText = "9";
  } else if (pseudo.textContent != "zera") {
    let str = valor.textContent;
    if (valor.textContent.charAt(str.length - 1) == ")") {
      result.innerText = result.textContent + "9";
      valor.innerText = valor.textContent + "*9";
      pseudo.innerText = pseudo.textContent + "9";
    } else {
      result.innerText = result.textContent + "9";
      valor.innerText = valor.textContent + "9";
      pseudo.innerText = pseudo.textContent + "9";
    }
  } else {
    result.innerText = "9";
    valor.innerText = "9";
    pseudo.innerText = "9";
  }
});

bPonto.addEventListener("click", () => {
  if (!pseudo.textContent.includes(".")) {
    if (pseudo.textContent == "0") {
      let str = valor.textContent;
      if (valor.textContent.charAt(str.length - 1) == ")") {
        valor.innerText = valor.textContent + "*0.";
        result.innerText = result.textContent + "0.";
        pseudo.innerText = pseudo.textContent + ".";
      } else {
        valor.innerText = valor.textContent + "0.";
        result.innerText = result.textContent + "0.";
        pseudo.innerText = pseudo.textContent + ".";
      }
    } else if (pseudo.textContent != "zera") {
      valor.innerText = valor.textContent + ".";
      result.innerText = result.textContent + ".";
      pseudo.innerText = pseudo.textContent + ".";
    } else {
      valor.innerText = "0.";
      result.innerText = "0.";
      pseudo.innerText = ".";
    }

    console.log(valor.textContent);
  }
});

bMais.addEventListener("click", () => {
  if (result.textContent == "0") {
    alert("Digite um número antes de colocar o sinal de mais");
  } else {
    pseudo.textContent = "0";
    valor.innerText = valor.textContent + "+";
    if (
      valor.textContent.includes("++") ||
      valor.textContent.includes("/+") ||
      valor.textContent.includes("*+") ||
      valor.textContent.includes("-+") ||
      valor.textContent.includes(".+")
    ) {
      valor.innerText = valor.textContent.slice(0, -1);
    } else {
      result.innerText = result.textContent + "+";
    }
  }
});

bMenos.addEventListener("click", () => {
  if (result.textContent == "0") {
    alert("Digite um número antes de colocar o sinal de menos");
  } else {
    pseudo.textContent = "0";
    valor.innerText = valor.textContent + "-";
    if (
      valor.textContent.includes("--") ||
      valor.textContent.includes("/-") ||
      valor.textContent.includes("+-") ||
      valor.textContent.includes("*-") ||
      valor.textContent.includes(".-")
    ) {
      valor.innerText = valor.textContent.slice(0, -1);
    } else {
      result.innerText = result.textContent + "-";
    }
  }
});

bMulti.addEventListener("click", () => {
  if (result.textContent == "0") {
    alert("Digite um número antes de colocar o sinal de multiplicação");
  } else {
    pseudo.textContent = "0";
    valor.innerText = valor.textContent + "*";
    if (
      valor.textContent.includes("**") ||
      valor.textContent.includes("/*") ||
      valor.textContent.includes("+*") ||
      valor.textContent.includes("-*") ||
      valor.textContent.includes(".*")
    ) {
      valor.innerText = valor.textContent.slice(0, -1);
    } else {
      result.innerText = result.textContent + "x";
    }
  }
});

bDiv.addEventListener("click", () => {
  if (result.textContent == "0") {
    alert("Digite um número antes de colocar o sinal de multiplicação");
  } else {
    pseudo.textContent = "0";
    valor.innerText = valor.textContent + "/";
    if (
      valor.textContent.includes("//") ||
      valor.textContent.includes("*/") ||
      valor.textContent.includes("+/") ||
      valor.textContent.includes("-/") ||
      valor.textContent.includes("./")
    ) {
      valor.innerText = valor.textContent.slice(0, -1);
    } else {
      result.innerText = result.textContent + "/";
    }
  }
});

bPorcent.addEventListener("click", () => {
  if (result.textContent == "0") {
    alert("Digite um número antes de colocar o sinal de multiplicação");
  } else {
    pseudo.textContent = "0";
    result.innerText = result.textContent + "%";
    valor.innerText = valor.textContent + "/100";
  }
});

bParenteses1.addEventListener("click", () => {
  if (result.textContent == "0") {
    result.innerText = "(";
    valor.innerText = "(";
    pseudo.innerText = "(";
  } else if (pseudo.textContent != "zera") {
    if (pseudo.textContent != "0") {
      result.innerText = result.textContent + "(";
      valor.innerText = valor.textContent + "*(";
      pseudo.innerText = pseudo.textContent + "(";
      pseudo.textContent = "0";
    } else {
      result.innerText = result.textContent + "(";
      valor.innerText = valor.textContent + "(";
      pseudo.innerText = pseudo.textContent + "(";
      pseudo.textContent = "0";
    }
  } else {
    result.innerText = "(";
    valor.innerText = "(";
    pseudo.innerText = "(";
  }
});

bParenteses2.addEventListener("click", () => {
  if (result.textContent == "0") {
    result.innerText = "(";
    valor.innerText = "(";
    pseudo.innerText = "(";
  } else if (pseudo.textContent != "zera") {
    result.innerText = result.textContent + ")";
    valor.innerText = valor.textContent + ")";
    pseudo.innerText = pseudo.textContent + ")";
    pseudo.textContent = "0";
  } else {
    result.innerText = "(";
    valor.innerText = "(";
    pseudo.innerText = "(";
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
    valor.innerText = resultado;
    result.innerText = resultado;
    pseudo.textContent = "zera";
  } catch (err) {
    setTimeout(() => {
      erro.classList.remove("ativo");
    }, 2000);
    erro.classList.add("ativo");
    if (typeof resultado !== "undefined") {
      result.innerText = resultado;
      valor.innerText = resultado;
    } else {
      result.innerText = "0";
      valor.innerText = "0";
    }
  }
}

erro.addEventListener("click", () => {
  erro.classList.remove("ativo");
});
