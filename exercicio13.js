function calcularPesoIdeal(altura, sexo) {
	
	if(sexo === "M") {
	return (72.7 * altura) - 58;

} else if(sexo === 'F'){

	return (62.1 * altura) - 44.7;
} else{

	return null
	}

}

function informarPesoIdeal(peso, altura, sexo) {
	
	const pesoIdeal = calcularPesoIdeal(altura, sexo)
	if(pesoIdeal === null) {

	return 'Sexo inválido. por favor, informe "M" para masculindo e "F" para femenino'

	}

	if(peso < pesoIdeal) {

		return 'Voce está abaixo do peso ideal'

	} else if(peso > pesoIdeal) {

		return 'Voce esta acima do peso.'

	} else {

		return 'Voce está dentro do peso Ideal.'

	}
}

function obterEntradasECalcular() {
    const altura = parseFloat(prompt("Informe a altura em metros:"));
    const sexo = prompt("Informe o sexo (M maiusculo para masculino, F minusculo para feminino):");
    const peso = parseFloat(prompt("Informe o peso em quilogramas:"));

    const resultado = informarPesoIdeal(peso, altura, sexo);
    console.log(resultado);

} 

	obterEntradasECalcular()