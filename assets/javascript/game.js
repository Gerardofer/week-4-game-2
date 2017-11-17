//                      Game rules
//===========================================================

// 1.- there's a character that's chosen
// 2.- the other three charactes will then pass to be opponents, that's demonstrated by changing the plane of the charactes, chosen character top, three opponent middle, defender bottom.
// 3.- the hp for every character will reduced with every attack.  If user's hp is reduced to 0 or below, it is game over.  If the hp from the defender is reduced to 0 or below, that defender is errased from the screen and another defender needs to be selected. this is the process untill all the defenders are defeted.
// 4.- the user's character will inflict damage that accumulates with every attack.  Defenders's damage does not accumulate. the logic is, user attack inclicts 8 damage, defender attach inflicts 25, next attack the user's attack increases by 8, inflicting 16 damage, while the defender still inflicts the same damage of 25, etc.
// 5.- there is a restart buttom.
// 6.-  defender needs to be selected, or else a message pops alerting no character has been selected.

//possible functions to use are .toggleClass(), .insertAfter()

$(document).ready(function(){

	var userChar = [];
	var challenegers = [];
	var lukeHp = 100;
	var obiHp = 125;
	var vaderHp = 160;
	var sidiousHp = 185;
	var LukeAttack = 5;
	var obiAttack = 10;
	var vaderAttack = 20;
	var sidiousAttack = 25;
	var yourChar = false;
	var yourDef = false;
	var lukeImg = $('.lukeImg');
	var obiImg = $('.obiImg');
	var vaderImg = $('.vaderImg');
	var sidiousImg = $('.sidiousImg');
	var attackBtn = $('.attack');


	$('#luke-hp').text(lukeHp);
	$('#obi-hp').text(obiHp);
	$('#vader-hp').text(vaderHp);
	$('#sidious-hp').text(sidiousHp);


//=============================== LUKE AS CHARACTER ==========================================
	lukeImg.on('click', function(){
		$(this).appendTo('.character');
		userChar.push(lukeHp);
		if (userChar.length > 1){
			alert("You've already selected a character");
			return;
		}
		console.log(userChar);
		obiCharB();
		vaderCharA();	
		sidioudChar();
	});		

//=============================== OBI AS CHARACTER ==========================================
	obiImg.on('click', function(){
		$(this).appendTo('.character');
		userChar.push(obiHp);
		if (userChar.length > 1){
			alert("You've already selected a character");
			return;
		}
		console.log(userChar);
		lukeChar();
		vaderCharA();
		sidioudChar();
	});	

//=============================== VADER AS CHARACTER ==========================================
	vaderImg.on('click', function(){
		$(this).appendTo('.character');
		userChar.push(vaderHp);
		if (userChar.length > 1){
			alert("You've already selected a character");
			return;
		}
		console.log(userChar);
		lukeChar();
		obiCharA();	
		sidioudChar();
	});	

//=============================== SIDIOUS AS CHARACTER ==========================================
	sidiousImg.on('click', function(){
		$(this).appendTo('.character');
		userChar.push(sidiousHp);
		if (userChar.length > 1){
			alert("You've already selected a character");
			return;
		}
		console.log(userChar);
		lukeChar();
		obiCharA();
		vaderCharB();		
	});	


	attackBtn.on('click', function(){
		if (userChar < 1 || challenegers < 1){
		alert("Please select a character to fight");
		}
	})









//=============================== FUNCTIONS ====================================================

function lukeChar(){
	lukeImg.appendTo('.enemies');
	lukeImg.addClass('.fighter0');
	$('.button1').on('click', function(){
		challenegers.push(lukeHp);
		if (challenegers.length > 1){
			alert("You've already selected a character");
			return;
		};
		$('.fighter0').appendTo('.defender');
		$('.luke').css({"background-color": "#e3eaed"});
		$('#luke-hp').css({"color": "black"});
	});
	$('.luke').css({"background-color": "red"});
	$('#luke-hp').css({"color": "white"});
}

function vaderCharA(){
	vaderImg.appendTo('.enemies');
	vaderImg.addClass('.fighter2')
	$('.button2').on('click', function(){
		challenegers.push(vaderHp);
		if (challenegers.length > 1){
			alert("You've already selected a character");
			return;
		};
		$('.fighter2').appendTo('.defender');
		$('.vader').css({"background-color": "#e3eaed"});
		$('#vader-hp').css({"color": "black"});
	});
	$('.vader').css({"background-color": "red"});
	$('#vader-hp').css({"color": "white"});	
}

function vaderCharB(){
	vaderImg.appendTo('.enemies');
	vaderImg.addClass('.fighter2')
	$('.button3').on('click', function(){
		challenegers.push(vaderHp);
		if (challenegers.length > 1){
			alert("You've already selected a character");
			return;
		};
		$('.fighter2').appendTo('.defender');
		$('.vader').css({"background-color": "#e3eaed"});
		$('#vader-hp').css({"color": "black"});
	});
	$('.vader').css({"background-color": "red"});
	$('#vader-hp').css({"color": "white"});	
}

function obiCharA(){
	obiImg.appendTo('.enemies');
	obiImg.addClass('.fighter1')
	$('.button2').on('click', function(){
		challenegers.push(obiHp);
		if (challenegers.length > 1){
			alert("You've already selected a character");
			return;
		};
		$('.fighter1').appendTo('.defender');
		$('.obi').css({"background-color": "#e3eaed"});
		$('#obi-hp').css({"color": "black"});
	});
	$('.obi').css({"background-color": "red"});
	$('#obi-hp').css({"color": "white"});
}

function obiCharB(){
	obiImg.appendTo('.enemies');
	obiImg.addClass('.fighter1')
	$('.button1').on('click', function(){
		challenegers.push(obiHp);
		if (challenegers.length > 1){
			alert("You've already selected a character");
			return;
		};
		$('.fighter1').appendTo('.defender');
		alert ("Click on the 'attack' button to start the duel!")
		$('.obi').css({"background-color": "#e3eaed"});
		$('#obi-hp').css({"color": "black"});
	});
	$('.obi').css({"background-color": "red"});
	$('#obi-hp').css({"color": "white"});
}

function sidioudChar(){
	sidiousImg.appendTo('.enemies');
	sidiousImg.addClass('.fighter3')
	$('.button3').on('click', function(){
		challenegers.push(sidiousHp);
		if (challenegers.length > 1){
			alert("You've already selected a character");
			return;
		};
		$('.fighter3').appendTo('.defender');
		$('.sidious').css({"background-color": "#e3eaed"});
		$('#sidious-hp').css({"color": "black"});
	});
	$('.sidious').css({"background-color": "red"});
	$('#sidious-hp').css({"color": "white"});
}


});