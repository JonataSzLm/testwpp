<!DOCTYPE html>
<html lang="pt-br">
<head>
	<title>Conversar com:</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="style.css">
	<script type="text/javascript" src="script.js"></script>
	<link rel="icon" type="image/png" sizes="16x16"  href="img/favicon-16x16.png">
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="theme-color" content="#ffffff">
</head>
<body onload="carregaContatos()">
	<div class="container">
		<div class="send">
			<img src="img/icone.svg" class="icone">
			<p class="titulo">Conversar com:</p>
			<form onsubmit="enviarNumero()" id="formulario" name="formulario" class="formulario">
				<div>
					<input type="radio" name="whatsapp" id="WebWhatsapp" value="web" class="radio" checked>
					<label for="WebWhatsapp">Whatsapp Web</label>
					<input type="radio" name="whatsapp" id="PCWhatsapp" value="pc" class="radio">
					<label for="PCWhatsapp">Whatsapp App</label>
				</div>
				<input type="text" name="nome" id="nome" class="caixa" placeholder="Nome do contato" required>
				<div class="phone">
					<input type="text" name="prefixo" id="prefixo" value="+55" class="caixa" required>
					<input type="number" name="ddd" id="ddd" min="0" max="100" value="37"
				class="caixa" required>
					<input type="number" name="numero" id="numero"
				class="caixa" min="10000000" max="999999999" value="9" required>
				</div>
				<input type="submit" value="INICIAR CONVERSA" id="botao">
			</form>
		</div>
		<div class="history" id="history"></div>
		<input type="file" onchange="loadFile(this.files[0])" accept=".jsl" id="arquivo" name="arquivo" class="arquivo">
	</div>
</body>
</html>


<div class="background_modal" id="background-modal" onclick="showLimpaContatos()">
	<div class="limpa_contatos" id="modal-limpa-contatos" onclick="showLimpaContatos()">
		<h1>Limpar Histórico</h1>
		<hr>
		<p>Você tem certeza que deseja apagar todos os seus contatos no historico?</p>
		<div>
			<button onclick="showLimpaContatos()" class="exportar">CANCELAR</button>
			<button onclick="limpaContatos()" class="limpar">LIMPAR</button>
		</div>
	</div>
</div>
<!--	
	***Tornar responsivo***

	Botão de (?) no topo do container direito
		Tela de ajuda [Modal]
-->
