<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html>
<head>
      <title>JavaScript 23</title>
      <script type="text/javascript" src="js/treino.js"> </script>
	  <style text="text/css">
	     img, table { width:250px; }
	     fieldset {width:250px; }
		 label {display:block; float:left; }
		 label, input { width:80px; margin:3px 0;}
		 th, td {border:1px solid #000; font-size:0.8em; }
	  </style>
</head>

<body>
	
<form id="formulario"> 
    <fieldset>
        <legend>Calculadora </legend>
        		
        <label for="op1">Primeiro Operando:</label><br />
		<input type="number" name="op1" /><br>
		<br />
		
		<label for="Op">Operação:</label>
		<input id="op" type="text" name="op" /><br>
		
		<label for="op2">Segundo Operando:</label><br />
		<input type="number" name="op2" /><br>
		<br />
		
		<label for="r">Resultado:</label>
		<input type="text" name="r" disabled="disabled" /> <br>
		
		<a href="#" onclick="calculadora()";>Calcular</a>
	</fieldset>
</form>

<br>


<table>
	 <tr><td align= "center" > INSTRUÇÕES:</td> </tr>
</table>	 
<table>
     <tr><th>SINAIS</th><th>OPERAÇÕES</th></tr>
	 <tr><td align= "center" >+</td><td>Para soma</td></tr>
	 <tr><td align= "center">-</td><td>Para Subtração</td></tr>
	 <tr><td align= "center">*</td><td>Para Multiplicação</td></tr>
	 <tr><td align= "center">/</td><td>Para Divisão</td></tr>
</table>
</body>

</html>
