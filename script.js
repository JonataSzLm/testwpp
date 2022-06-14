//https://api.whatsapp.com/send?phone=
//fazer funcionalidade para enviar na aplicação tb
//fazer percistencia de dados dos nomes e numeros
//add favicon e novo nome
//melhorar design da pag

function enviarNumero() {
	var telefone = 0;
	var url = 'https://web.whatsapp.com/send?phone="';
	let prefixo = document.getElementById('prefixo');
	let ddd = document.getElementById('ddd');
	let numero = document.getElementById('numero');
	telefone = prefixo.value + ddd.value + numero.value;
	url += telefone + '"';
	window.open(url, '_blank');
}