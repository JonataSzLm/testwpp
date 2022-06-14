let url_web = 'https://web.whatsapp.com/send?phone="';
let url_pc = 'https://api.whatsapp.com/send?phone="'

function enviarNumero() {
	let prefixo = document.getElementById('prefixo');
	let ddd = document.getElementById('ddd');
	let numero = document.getElementById('numero');
	let radio = document.getElementsByName('whatsapp');


	for (var i = 0; i < radio.length; i++) {
		if (radio[i].checked) {
			var wpp = radio[i].value;
		}
	}

	if (wpp == 'web') {
		var url = url_web;
	} else if (wpp == 'pc') {
		var url = url_pc;
	}

	var telefone = prefixo.value + ddd.value + numero.value;
	url += telefone + '"';
	window.open(url, '_blank');
}