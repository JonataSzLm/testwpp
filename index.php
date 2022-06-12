<!DOCTYPE html>
<html lang="pt-br">
<head>
	<title>Teste API WPP</title>
	<meta charset="utf-8">
	<style type="text/css">
		body {
			height: 730px;
			width: 100%;
			margin: 0;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
			border: none;
			font-family: "Segoe UI";
			background-color: #f8f9fa;
		}
		.container {
			width: 50%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			background-color: #fefefe;
			padding: 100px;
		}
		.titulo {
			font-size: 35px;
			font-weight: 400px;
			line-height: 26px;
			color: #232323
			style: normal;
		}
		.caixa {
			height: 50px;
			font-size: 35px;
			margin: 10px 3px;
			border-radius: 5px;
			border: 2px solid rgb(150,150,150);
		}
		#phone {
			display: none;
		}
		#prefixo {
			width: 80px;
		}
		#ddd {
			width: 85px;
		}
		#numero {
			width: 250px;
		}
		.btn_div {
			justify-content: center;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			width: 100%;
			height: 100%;
		}
		#botao {
			font-weight: bold;
			height: 50px;
			font-size: 13px;
			margin-top: 30px;
			background-color: #01e675;
			border: none;
			color: white;
			padding: 10px 20px;
			border-radius: 5px;
		}
		#botao:hover {
			background-color: white;
			color: #01e675;
			border: solid 2px #01e675;
		}
	</style>
	<script type="text/javascript">
		function enviarNumero() {
			var numero = 0;
			var url = 'https://web.whatsapp.com/send?phone="';
			numero = document.getElementById('prefixo').value + document.getElementById('ddd').value + document.getElementById('numero').value;
			url += numero + '"';
			window.open(url, '_blank');
		}
	</script>
</head>
<body>
	<div class="container">
		<p class="titulo">Conversar com:</p>
		<div class="btn_div">
			<input type="text" name="prefixo" id="prefixo" value="+55" class="caixa">
			<input type="number" name="ddd" id="ddd" min="0" max="100" value="37"
		class="caixa">
			<input type="number" name="numero" id="numero"
		class="caixa" min="10000000" max="999999999" value="9">
			<div class="btn_div"><input type="submit" value="INICIAR CONVERSA" id="botao" onclick="enviarNumero()"></div>
		</div>
	</div>
</body>
</html>