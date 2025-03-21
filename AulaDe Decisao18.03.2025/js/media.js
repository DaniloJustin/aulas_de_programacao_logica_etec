function calcularMediaAluno(nota1,nota2,nota3){
    const media = (nota1 + nota2 + nota3) / 3;

    return media >= 7 ? "aprovado" : media >=5 ? "recuperação" : "reprovado"; 
}

    const nota1 = parseFloat(prompt(" 1º nota"));

    const nota2 = parseFloat(prompt(" 2º nota"));

    const nota3 = parseFloat(prompt( " 3º nota"));

    const resultado = calcularMediaAluno(nota1,nota2,nota3);

    alert(`média ${ (nota1 + nota2 + nota3) /3}`);

    alert(resultado);

    //