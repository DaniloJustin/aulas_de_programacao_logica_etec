function calcularMediaAluno(nota1,nota2,nota3){

    // Calcular a média das três notas
    const media = (nota1 + nota2 + nota3) / 3;

// "return" Esta palavra-chave indica que a função calcularMediaAluno irá retornar um valor

// Essa linha de código é uma analise em uma única linha , para saber a situação do aluno, e também é uma forma eficiente e simplificada de escrever uma estrutura condicional simples.
return media >= 7 ? "Aluno aprovado!" : media >= 5 ? "Aluno em recuperaçao" : "Aluno reprovado"
}

const nota1 = parseFloat(prompt("primeira nota:"))
// const --> Usa quando voce saber que o valor da variavel por exemplo "NOTAS" não possa ser alterada.

// parseFloat --> É a função que converte a entrada da informação que o usuário digitou em número para NÚMERO DECIMAL "Onde decimal é um número que é separando por um ponto " . " ou uma vicula " , "

// prompt --> É a função para exibe uma caixa de diálogo para o usuário inserir suas informações.

const nota2 = parseFloat(prompt("segunda nota:"))

const nota3 = parseFloat(prompt("terceira nota:"))

const resultado = calcularMediaAluno(nota1,nota2,nota3);


// Exibe a media do aluno no console "F12" 
console.log(`Média: ${(nota1+nota2+nota3) / 3}`);

// Exibe a situação do aluno
alert(resultado);