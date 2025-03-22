// Solicita a idade do usuário usando prompt()
let idade = prompt("Digite sua idade:");

// Verifica se a idade é um número válido
if (isNaN(idade)) {
  alert("Por favor, digite um número válido.");
} else {
  // Converte a idade para um número inteiro
  idade = parseInt(idade);

  // Verifica se a idade é maior ou igual a 18
  if (idade >= 18) {
    alert("Você é maior de idade.");
  } else {
    alert("Você é menor de idade.");
  }
}