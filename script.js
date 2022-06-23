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
		history.classList.toggle('show_history')
		history.innerHTML = '<div class="titulo_historico">' +
		'<p class="titulo">Histórico:</p>' +
		'<img src="img/config.svg" class="icon_config" onclick="ativaConfig()"></div>' +
		'<div class="config" id="config">' +
		'<div class="menu_config">' + 
		'<button class="limpar" onclick="showLimpaContatos()">' +
		'<svg class="icon_busca" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"/></svg><p>Limpar</p></button>' +
		'<button class="importar">' +
		'<svg class="icon_busca" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M384 0v128h128L384 0zM352 128L352 0H176C149.5 0 128 21.49 128 48V288h174.1l-39.03-39.03c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0l80 80c9.375 9.375 9.375 24.56 0 33.94l-80 80c-9.375 9.375-24.56 9.375-33.94 0C258.3 404.3 256 398.2 256 392s2.344-12.28 7.031-16.97L302.1 336H128v128C128 490.5 149.5 512 176 512h288c26.51 0 48-21.49 48-48V160h-127.1C366.3 160 352 145.7 352 128zM24 288C10.75 288 0 298.7 0 312c0 13.25 10.75 24 24 24H128V288H24z"/></svg><p>Importar</p></button>' +
		'<button class="exportar" onclick="exportarContatos()">' +
		'<svg class="icon_busca" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M192 312C192 298.8 202.8 288 216 288H384V160H256c-17.67 0-32-14.33-32-32L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48v-128H216C202.8 336 192 325.3 192 312zM256 0v128h128L256 0zM568.1 295l-80-80c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L494.1 288H384v48h110.1l-39.03 39.03C450.3 379.7 448 385.8 448 392s2.344 12.28 7.031 16.97c9.375 9.375 24.56 9.375 33.94 0l80-80C578.3 319.6 578.3 304.4 568.1 295z"/></svg><p>Exportar</p></button></div>' +
		'<div class="src"><input placeholder="Buscar contato" type="text" name="busca" id="busca">' +
		'<button class="btn_busca" onclick="buscarContato()">' + 
		'<svg class="icon_busca xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/></svg></button>' +
		'</div><div class="resultado" id="resultado"></div></div>'

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
				'<img src="img/x.svg" class="lixo" onclick="excluiContato(' + i + ')">' +
			'</div>'
		}
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

function ativaConfig() {
	let config = document.getElementById('config')
	config.classList.toggle('show_config')
}

function showLimpaContatos() {
	let modal = document.getElementById('modal-limpa-contatos')
	modal.classList.toggle('show_limpa_contatos')
}
function limpaContatos() {
	localStorage.clear()
	document.location.reload(true)
}

function buscarContato() {
	let busca = document.getElementById('busca')
	let resultado = document.getElementById('resultado')
	var nomes = []

	for (var index = 1; index < contatos.length; index++) {
		var separador = contatos[index].indexOf('|');
		nomes[index] = contatos[index].slice(0, separador)
	}

	var res = nomes.indexOf(busca.value)
	
	if (res != null && res != '' && res != false && res != -1 && res != '-1') {
		var div = contatos[res].indexOf('|')
		var tam = contatos[res].length
		var prefixo = contatos[res].slice(div + 1, div + 4)
		var ddd = contatos[res].slice(div + 4, div + 6)
		var numero = contatos[res].slice(div + 6, tam)
		resultado.innerHTML = '<div class="contato" style="width: 98.9% !important; margin-top: 5px">' +
		'<div class="dados" onclick="addContato(' + res + ')">' +
			'<p class="titulo2" id="nomeh">' + nomes[res] + '</p>' +
			'<p class="subtitulo" id="numeroh">' + prefixo + ' (' + ddd + ') ' + numero + '</p>' +
		'</div>' +
		'<img src="img/x.svg" class="lixo" onclick="excluiContato(' + res + ')">' +
	'</div>'
	} else {
		resultado.innerHTML = ''
	}
}

function download(filename, textInput) {

	var element = document.createElement('a');
	element.setAttribute('href','data:text/plain;charset=utf-8, ' + encodeURIComponent(textInput));
	element.setAttribute('download', filename);
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
}

function exportarContatos() {
	var filename = 'contatos.txt'
	for (let i = 1; i < contatos.length; i++) {
		if (i == 1) {
			var text = contatos[i] + '\n'
		} else {
			text += contatos[i] + '\n'
		}
	}

	download(filename, text)
}

//fazer funções de importação e exportação de historico
//https://www.delftstack.com/pt/howto/javascript/read-text-file-in-javascript/
//https://www.delftstack.com/pt/howto/javascript/javascript-download/