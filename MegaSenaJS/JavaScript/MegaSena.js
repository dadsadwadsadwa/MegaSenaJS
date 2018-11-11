/*
Feito por Bruno Dias
	03/11/2018
Caso fassa alguma alteração poste no github ou mande o link
GitHub = https://github.com/CodandoCafeina
*/
var bilhete1=new Array();var erros=new Array();var bilhete=new Array();var lista=new Array();
var bilhet=new Array();var bilhete2=new Array();var bilhe=new Array();

function montarBilhete(){
	if(lista.length < 1){
		bilhe=[];
	}
	if(bilhete.length < 2){
		bilhete=["1"];
		var cont = 0;var tot_aposta = 6;
		while(cont<tot_aposta){
			while(bilhe.length < 6){
			 	var numeros = parseInt(prompt());
				while(bilhe.indexOf(numeros) != -1){
					numeros = parseInt(prompt());
				}
				if(numeros != " "){			
					bilhe.push(numeros);
				}
			}
			cont++;
		}
		document.getElementById("bilhete").innerHTML = bilhe+"<br>";
	}
}

function bilhetePronto(){
	if(lista.length < 1){
		bilhete=[];
	}
	if(bilhe.length < 1){
		while(bilhete.length < 6){
		 	var numeros = Math.ceil(Math.random()*60);
			while(bilhete.indexOf(numeros) != -1){
				numeros = Math.ceil(Math.random()*60);
			}
			bilhete.push(numeros);
		}
		document.getElementById("bilhete").innerHTML=bilhete+"<br>";
	}
}

function adicionaBilhete(){
	if(lista.length < 1){
		bilhet=[];
	}
	if(lista.length < 1){
		while(bilhet.length < 6){
		 	var numero = Math.ceil(Math.random()*60);
			while(bilhet.indexOf(numero) != -1){
				numero = Math.ceil(Math.random()*60);
			}
			bilhet.push(numero);
		}
		document.getElementById("bilhet").innerHTML = bilhet+"<br>";
	}
}

function imagemNumeroAleatorio(){//função de sortear um numero clicando na imagem e mostrando o numero na div
	if(lista.length < 6 && bilhete != ""){	
		var num = Math.ceil(Math.random()*60);
		while(lista.indexOf(num) != -1){
			num = Math.ceil(Math.random()*60);
		}
		lista.push(num)
		if(bilhete.indexOf(num) != -1){
			bilhete1.push(num);
		}else if(bilhet.indexOf(num) != -1){
			bilhete2.push(num);
		}else if(bilhe.indexOf(num) != -1){
			bilhete1.push(num);
		}else{
			erros.push(num);
		}
	}else{
		num = lista[5];
	}
	var ac=document.getElementById("acerto").innerHTML="Acertos bilhete 1: "+bilhete1+"<br>"+"Acertos bilhete 2: "+bilhete2+"<br>";
	var err=document.getElementById("erro").innerHTML="Erros: "+erros+"<br>";
	if(bilhete != ""){
		var numero = document.getElementById('num_imagem').innerHTML = num;
		var list = document.getElementById('lista').innerHTML = lista;
	}
}

function restart(){
	bilhete=[];lista=[];bilhete1=[];bilhete2=[];erros=[];bilhet=[];bilhe=[];
	document.getElementById("bilhete").innerHTML="";
	document.getElementById("bilhet").innerHTML="";
	document.getElementById("acerto").innerHTML="";
	document.getElementById("erro").innerHTML="";
	document.getElementById("num_imagem").innerHTML="";
	document.getElementById("lista").innerHTML="";
}