let url_web = 'https://web.whatsapp.com/send?phone="';
let url_pc = 'https://api.whatsapp.com/send?phone="';


function enviarNumero() {
	let nome = document.getElementById('nome');
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

	var tam = localStorage.length;
	localStorage.setItem(tam + 1, nome.value);
	localStorage.setItem(tam + 2, telefone);

	window.open(url, '_blank');
}

function pegaContatos() {
	let history = document.getElementById('history');
	var tamanho = localStorage.length;
	if (tamanho > 1) {
		history.innerHTML = '<p class="titulo">Historico:</p>';
		for (let i = 1; i <= tamanho; i++) {
			if (i % 2 === 0) {
				var nomeh = localStorage.getItem(i-1);
				var numeroh = localStorage.getItem(i);
				history.innerHTML += '<div class="contato">' +
					'<div class="dados" onclick="addContato(' + i + ')">' +
						'<p class="titulo2" id="nomeh">' + nomeh + '</p>' +
						'<p class="subtitulo" id="numeroh">' + numeroh + '</p>' +
					'</div>' +
					'<img src="img/lixeira.svg" class="lixo" onclick="excluiContato(' + i + ')">' +
				'</div>';
			}
		}
	} else {
		history.innerHTML += '<p class="titulo2">Ainda não há registro de contatos:</p>'
	}
}

function excluiContato(num) {
	localStorage.removeItem(num - 1);
	localStorage.removeItem(num);
	document.location.reload(true);
}

function addContato(num) {
	let nome = document.getElementById('nome');
	let prefixo = document.getElementById('prefixo');
	let ddd = document.getElementById('ddd');
	let numero = document.getElementById('numero');
	let radio = document.getElementsByName('whatsapp');
	nome.value = localStorage.getItem(num - 1);
	var telefone = localStorage.getItem(num);
	prefixo.value = telefone.slice(0, 3);
	ddd.value = telefone.slice(3, 5);
	numero.value = telefone.slice(5, 14);
}