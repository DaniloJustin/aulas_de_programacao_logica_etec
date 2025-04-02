function calcularIdade() {
    // Solicita a data de nascimento ao usuário
    const dataNascimento = prompt("Digite sua data de nascimento (DD/MM/AAAA):");
  
    // Divide a data em dia, mês e ano
    const partesData = dataNascimento.split("/");
    const diaNascimento = parseInt(partesData[0]);
    const mesNascimento = parseInt(partesData[1]) - 1; // Meses em JavaScript começam em 0
    const anoNascimento = parseInt(partesData[2]);
  
    // Obtém a data atual
    const dataAtual = new Date();
    const diaAtual = dataAtual.getDate();
    const mesAtual = dataAtual.getMonth();
    const anoAtual = dataAtual.getFullYear();
  
    // Calcula a idade
    let idade = anoAtual - anoNascimento;
  
    // Verifica se o aniversário já ocorreu este ano
    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
      idade--;
    }
  
    // Exibe a idade
    alert("Sua idade é: " + idade + " anos.");
  }
  
  // Chama a função para calcular a idade
  calcularIdade();