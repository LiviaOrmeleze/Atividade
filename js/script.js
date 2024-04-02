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
    let contador= 0 
    let somar = 0 
    if (num <= 0) {
      error.innerText = `O número :${num}, não é positivo, informe um número válido `;
      result.innerHTML = ""; 
    } else
    while (contador <= num) {
      if (contador % 2 == 0) {
        somar += contador 
        result.innerHTML = `${somar}`
      }
     
      contador++;
    }
  }

  const exercicio7 = () => {
    let nume = 10 
    let result = document.getElementById("resposta")
    while (nume >= 1) {
      result.innerHTML += `${nume} <br>`
      nume --
    }
  }

  const exercicio8 = () => {

  }

  const exercicio9 = () =>{
    let result = document.getElementById("resposta")
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      
    }
  }