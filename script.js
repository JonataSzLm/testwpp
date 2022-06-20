let url_web = 'https://web.whatsapp.com/send?phone="'
let url_pc = 'https://api.whatsapp.com/send?phone="'
var contatos = []
var existe = false

function enviarNumero() {
	let nome = document.getElementById('nome')
	let prefixo = document.getElementById('prefixo')
	let ddd = document.getElementById('ddd')
	let numero = document.getElementById('numero')
	let radio = document.getElementsByName('whatsapp')
	var tamanho = localStorage.length


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

	var telefone = prefixo.value + ddd.value + numero.value
	url += telefone + '"';

	for (let i = 1; i <= tamanho; i++) {
		var tamCtt = contatos[i].length
		var divCtt = contatos[i].indexOf('|')
		var telCtt = contatos[i].slice(divCtt+1, tamCtt)
		
		if (telefone == telCtt) {
			var indice = i
			existe = true
			break
		}
	}

	if (existe) {
		gravaContato(nome.value, telefone, indice)
	} else {
		gravaContato(nome.value, telefone, false)
	}

	window.open(url, '_blank');
}

function carregaContatos() {
	let history = document.getElementById('history')
	var tamanho = localStorage.length
	if (tamanho > 0) {
		history.innerHTML = '<p class="titulo">Historico:</p>'
		for (let i = tamanho; i >= 1; i--) {
			contatos[i] = localStorage.getItem(i)
			var temp = localStorage.getItem(i)
			var divisor = temp.indexOf('|')
			var tamTemp = temp.length
			var nomeh = temp.slice(0, divisor) //pega o nome
			var prefixo = temp.slice(divisor+1, divisor+4)
			var ddd = temp.slice(divisor+4, divisor+6)
			var numero = temp.slice(divisor+6, tamTemp)
			history.innerHTML += '<div class="contato">' +
				'<div class="dados" onclick="addContato(' + i + ')">' +
					'<p class="titulo2" id="nomeh">' + nomeh + '</p>' +
					'<p class="subtitulo" id="numeroh">' + prefixo + ' (' + ddd + ') ' + numero + '</p>' +
				'</div>' +
				'<img src="img/lixeira.svg" class="lixo" onclick="excluiContato(' + i + ')">' +
			'</div>'
		}
	} else {
		history.innerHTML = '<p class="titulo2">Ainda não há registros de contatos</p>'
	}
}

function excluiContato(num) {
	contatos.splice(num, 1)
	localStorage.clear();
	var tam = contatos.length
	if (tam > 0) {
		for (i = 1; i < tam; i++) {
			localStorage.setItem(i, contatos[i])
		}
	}
	document.location.reload(true)
}

function addContato(num) {
	let nome = document.getElementById('nome')
	let prefixo = document.getElementById('prefixo')
	let ddd = document.getElementById('ddd')
	let numero = document.getElementById('numero')
	var divisor = contatos[num].indexOf('|')
	var tamTemp = contatos[num].length
	nome.value = contatos[num].slice(0, divisor) //pega o nome
	prefixo.value = contatos[num].slice(divisor+1, divisor+4)
	ddd.value = contatos[num].slice(divisor+4, divisor+6)
	numero.value = contatos[num].slice(divisor+6, tamTemp)
}

function gravaContato(nome, telefone, indice) {
	var tam = localStorage.length;
	var cont = nome + '|' + telefone
	if (indice) {
		localStorage.setItem(indice, cont)
	} else {
		localStorage.setItem(tam + 1, cont)
	}
}