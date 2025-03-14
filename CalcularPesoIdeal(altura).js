function calcularpesoIdeal(altura){
	
	const pesoIdeal = (72.5 * altura) - 58;
	return pesoIdeal;
}


const altura = parseFloat(prompt("digite sua altura em metro:"))

if(!isNaN(altura)){

	 const resultado = calcularpesoIdeal(altura)
	 alert("seu peso Ideal é: " + resultado.toFixed(2) + " Kg")


} else{
	console.log(["POR FAVOR DIGITE SUA ALTURA EM DECIMAL COM E NÃO !"])
}