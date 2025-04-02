function calcIdadeEmMeses(dataNascimento) {
    // Converte a data de nascimento para um objeto Date
    const nascimento = new Date(dataNascimento);
  
    // Obtém a data atual
    const hoje = new Date();
  
    // Calcula a diferença em anos
    let anos = hoje.getFullYear() - nascimento.getFullYear();
  
    // Calcula a diferença em meses
    let meses = hoje.getMonth() - nascimento.getMonth();
  
    // Ajusta a idade em meses se o aniversário ainda não ocorreu este ano
    if (meses < 0 || (meses === 0 && hoje.getDate() < nascimento.getDate())) {
      anos--;
      meses += 12;
    }
  
    // Calcula a idade total em meses
    const idadeEmMeses = anos * 12 + meses;
  
    return idadeEmMeses;
  }
  
  function exibirIdadeEmMeses() {
    // Obtém a data de nascimento do campo de entrada
    const dataNascimento = document.getElementById("iano").value;
  
    // Calcula a idade em meses
    const idadeEmMeses = calcIdadeEmMeses(dataNascimento);
  
    // Exibe a idade em meses no elemento com o ID "iidade"
    document.getElementById("iidade").textContent = idadeEmMeses + " meses";
  }


