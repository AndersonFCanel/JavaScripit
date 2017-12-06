function calculadora(){


	var formulario = document.getElementById("formulario");
	
	var op1 = +formulario.op1.value;
	var op2 = +formulario.op2.value;
	var op = formulario.op.value; 
	
	
	
	var resultado;
	
	switch(op){
		case '+':
			resultado = op1 + op2;
			//formulario.r.value = r.toFixed(2);
			alert(op1 + " + " + op2 + " = " +resultado);
		break;
		case '-':
			resultado = op1 - op2;
			//formulario.r.value = r.toFixed(2);
			alert(op1 + " - " + op2 + " = " +resultado);
		break;
		case '*':
			resultado = op1 * op2;
			//formulario.r.value = r.toFixed(2);
			alert(op1 + " * " + op2 + " = " +resultado);	
		break;
		case '/':
			resultado = op1 / op2;
			//formulario.r.value = r.toFixed(2);
			alert(op1 + " / " + op2 + " = " +resultado);
		break;
	}
	
	
}