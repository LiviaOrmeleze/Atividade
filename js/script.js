const exercicio1 = () => {
    document.getElementById("resposta").innerHTML =  `<h2>Resposta da Atividade</h2>`
  for (let i = 1; i <= 10; i++) {
    document.getElementById("resposta").innerHTML += `<h3>#${i}<h3/>`;

  }
};
const exercicio2 = () => {
    let num = document.getElementById(`num`).value
  for (let i = 0; i <= num; i += 2) {
    document.getElementById("resposta").innerHTML += `<h3>#${i}<h3/>`;
  }
};

const exercicio3 = () => {
    let num = document.getElementById("num").value
  if (num == num/1 && num % num === 0) {
    document.getElementById("resposta").innerText = `O número :${num}, é primo.`;
  } else {
    
  }
}