const exercicio1 = () => {
  document.getElementById(
    "resposta"
  ).innerHTML = `<h2>Resposta da Atividade</h2>`;
  for (let i = 1; i <= 10; i++) {
    document.getElementById("resposta").innerHTML += `<h3>#${i}<h3/>`;
  }
};
const exercicio2 = () => {
  let num = document.getElementById(`num`).value;
  for (let i = 0; i <= num; i += 2) {
    document.getElementById("resposta").innerHTML += `<h3>#${i}<h3/>`;
  }
};

const exercicio3 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  if (num <= 0) {
    error.innerText = `O número :${num}, não é positivo, informe um número válido `;
    result.innerText = "";
  } else {
    error.innerText = "";
    result.innerText = "";

    let primo = true;

    for (let i = 2; i < num; i++) {
      if (num % i == 0) primo = false; // % resto da divisão
    }

    primo
      ? (result.innerText = `O número ${num} é primo!`)
      : (error.innerText = `O número ${num} não é primo!`);
  }
};

const exercicio4 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  result.innerHTML = "";
  error.innerText = "";
  if (num <= 0) {
    error.innerText = `O número ${num}, não é positivo, informe um número válido `;
    result.innerHTML = "";
  } else {
    for (let i = 0; i <= 10; i++) {
      result.innerHTML += `${num} X ${i} = ${num * i} <br >`;
    }
  }
};

const exercicio5 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  let contador = 0;
  result.innerHTML = "";
  error.innerText = "";

  if (num <= 0) {
    error.innerText = `O número :${num}, não é positivo, informe um número válido `;
    result.innerHTML = "";
  } else {
    while (contador <= num) {
      if (contador % 2 !== 0) {
        result.innerHTML += `${contador} <br>`;
      }
      contador++;
    }
  }
};

const exercicio6 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  let contador = 0;
  let somar = 0;
  if (num <= 0) {
    error.innerText = `O número :${num}, não é positivo, informe um número válido `;
    result.innerHTML = "";
  } else
    while (contador <= num) {
      if (contador % 2 == 0) {
        somar += contador;
        result.innerHTML = `${somar}`;
      }

      contador++;
    }
};

const exercicio7 = () => {
  let nume = 10;
  let result = document.getElementById("resposta");
  while (nume >= 1) {
    result.innerHTML += `${nume} <br>`;
    nume--;
  }
};

const exercicio8 = () => {
  let palavra = document.getElementById("palavra").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  error.innerText = "";
  result.innerText = "";

  let inversa = "";
  if (palavra == "") {
    error.innerText = `Escreva uma palavra `;
  } else {
    for (let i = 1; i <= palavra.length; i++) {
      inversa += palavra.charAt(palavra.length - i);
    }

    palavra.toLowerCase() == inversa.toLowerCase()
      ? (result.innerText = "A palavra é um palíndromo!")
      : (error.innerText = "A palavra não é um palíndromo!");
  }
};

const exercicio9 = () => {
  let result = document.getElementById("resposta");
  let somar = 0;
  for (let i = 1; i <= 100; i++) {
    somar += i;
    result.innerHTML = `<h2>Resposta da Atividade</h2> ${somar}`;
  }
};

const exercicio10 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  let soma = 0;
  let contador = 0;
  error.innerText = "";
  result.innerHTML = "";

  if (num <= 0) {
    error.innerText = `O número ${num} é inválido, informe um número válido `;
    result.innerHTML = "";
  } else {
    while (num >= contador) {
      soma += contador;
      contador++;
    }

    let media = soma / num;
    result.innerHTML += `A soma é ${soma} <br>`;
    result.innerHTML += `A média é ${media} <br>`;
  }
};

const exercicio11 = () => {
  let result = document.getElementById("resposta");

  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0) {
      result.innerHTML += `${i} <br>`;
    }
  }
};

const exercicio12 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  let soma = 0;
  result.innerHTML = "";
  error.innerText = "";

  if (num <= 0) {
    error.innerText = `O número ${num} é inválido, informe um número válido `;
    result.innerHTML = "";
  } else {

  for (let i = 1; i <= num.length; i++) {
    soma += parseInt(num.charAt(num.length - i));
    result.innerHTML = `A soma dos digitos é ${soma}`
  }

}
};

// const exercicio13 = () => {
//   let num1 = document.getElementById("num1").value;
//   let num2 = document.getElementById("num2").value;
//   let error = document.getElementById("erro");
//   let result = document.getElementById("resultado");
//   error.innerText = "";
//   result.innerText = "";

//   if (num1 && num2 <= 0) {
//     error.innerText = `O número :${num}, não é positivo, informe um número válido `;
//     result.innerText = "";
//   } else {
//     let primo = true;

//     for (let i = 2; i < num; i++) {
//       if (num % i == 0) primo = false; // % resto da divisão
//     }

//     primo
//       ? (result.innerText = `O número ${num} é primo!`)
//       : (error.innerText = `O número ${num} não é primo!`);
//   }
// };

const exercicio14 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  let area = num1 * num2;
  result.innerHTML = "";
  error.innerText = "";

  if (num1 <= 0 || num2 <= 0) {
    error.innerText = ` Não é positivo, informe um número válido `;
    result.innerHTML = "";
  } else {
    result.innerHTML = `A área do retangulo é ${area}`;
  }
};

const exercicio15 = () => {};//----------------------------------------------------------------

const exercicio16 = () => {
  let num1 = document.getElementById("num1").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  let circulo = 3.14 * num1 ** 2;
  result.innerHTML = "";
  error.innerText = "";

  if (num1 <= 0) {
    error.innerText = ` Informe um número válido `;
  } else {
    result.innerHTML = `A área do circulo é ${circulo}`;
    console.log(circulo);
  }
};

const exercicio17 = () => {
  let base = document.getElementById("num1").value;
  let altura = document.getElementById("num2").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let area = (base * altura) / 2;
  result.innerHTML = "";
  error.innerText = "";

  if (altura <= 0 || base <= 0) {
    error.innerText = ` Não é positivo, informe um número válido `;
    result.innerHTML = "";
  } else {
    result.innerHTML = `A área do triâgulo ${area}`;
  }
};

const exercicio18 = () => {
  let baseMaior = document.getElementById("num1").value;
  let baseMenor = document.getElementById("num2").value;
  let altura = document.getElementById("num3").value;
  let trapezio = ((baseMaior + baseMenor) * altura) / 2;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
//-----------------------------------------------------------------------------------------------------------------------------------
  if (baseMaior <= 0 || altura <= 0 || baseMenor <= 0) {
    error.innerText = ` Não é positivo, informe um número válido `;
    result.innerHTML = "";
  } else {
    result.innerHTML = `A área do trapézio é ${trapezio}`;
  }
};

const exercicio19 = () =>{
  let data =  document.getElementById("data").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let data1 = new Date()
  let data2 = new Date(data)
  let diferenca = data1.getTime() - data2.getTime()
  result.innerHTML = `A idade da pessoa é ${Math.floor(diferenca/ (1000 * 60 * 60 * 24 * 365.25))};`

 
}

const exercicio20 = () =>{
  let frase = document.getElementById("frase").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let inversa = "";
  if (frase == "") {
    error.innerText = `Escreva uma palavra `;
  } else {
    for (let i = 1; i <= frase.length; i++) {
      inversa += frase.charAt(frase.length - i);
      result.innerHTML = `O inverso é ${inversa}`
    }
  }
};

const exercicio21 = () =>{
  let frase = document.getElementById("frase").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");

if (frase == "") {
    error.innerText = `Escreva uma palavra `;
  } else {
  result.innerHTML = `${frase.trim()}`
}
}
const exercicio22 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");


}
