    function calcularMediaAluno(nota1,nota2,nota3){
    const media = (nota1 + nota2 + nota3) /3
    
    return media >= 7 ? "Aprovado" : media >=5 ? "Recuperação" :
    "Reprovado"
    }

    const nota1 = parseFloat(prompt("1º notaa"))

    const nota2 = parseFloat(prompt("2º notaa"))

    const nota3 = parseFloat(prompt("3º nota"))

    const resultado = calcularMediaAluno(nota1,nota2,nota3)

    alert(`Média : ${ (nota1 + nota2 + nota3) /3}`)

    alert(resultado)