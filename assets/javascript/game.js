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

	var challenegers = ["luke", "obi", "vader", "sidious"];
	var lukeHp = 100;
	var obiHp = 125;
	var vaderHp = 160;
	var sidiousHp = 185;
	var userChar = true;
	var enemy = false;
	var Luke = false;
	var obi = false;
	var vader = false;
	var sidious = false;
	var lukeImg = $('.lukeImg')
	var obiImg = $('.obiImg')
	var vaderImg = $('.vaderImg')
	var sidiousImg = $('.sidiousImg')


	$('#luke-hp').text(lukeHp);
	$('#obi-hp').text(obiHp);
	$('#vader-hp').text(vaderHp);
	$('#sidious-hp').text(sidiousHp);


//=============================== LUKE AS CHARACTER ==========================================
	lukeImg.on('click', function(){
		$(this).appendTo('.character');
//=============================== OBI GOES TO ENEMIES SECTION ================================
		obiImg.appendTo('.enemies');
		obiImg.addClass('.fighter1')
		$('.button1').on('click', function(){
			$('.fighter1').appendTo('.defender');
			$('.obi').css({"background-color": "#e3eaed"});
			$('#obi-hp').css({"color": "black"});
		});
		$('.obi').css({"background-color": "red"});
		$('#obi-hp').css({"color": "white"});

//=============================== VADER GOES TO ENEMIES SECTION ================================
		vaderImg.appendTo('.enemies');
		vaderImg.addClass('.fighter2')
		$('.button2').on('click', function(){
			$('.fighter2').appendTo('.defender');
			$('.vader').css({"background-color": "#e3eaed"});
			$('#vader-hp').css({"color": "black"});
		});
		$('.vader').css({"background-color": "red"});
		$('#vader-hp').css({"color": "white"});	

//=============================== SIDIOUS GOES TO ENEMIES SECTION ================================
		sidiousImg.appendTo('.enemies');
		sidiousImg.addClass('.fighter3')
		$('.button3').on('click', function(){
			$('.fighter3').appendTo('.defender');
			$('.sidious').css({"background-color": "#e3eaed"});
			$('#sidious-hp').css({"color": "black"});
		});
		$('.sidious').css({"background-color": "red"});
		$('#sidious-hp').css({"color": "white"});
	});		


//=============================== OBI AS CHARACTER ==========================================
	obiImg.on('click', function(){
		$(this).appendTo('.character');

//=============================== LUKE GOES TO ENEMIES SECTION ================================
		lukeImg.appendTo('.enemies');
		lukeImg.addClass('.fighter0');
		$('.button1').on('click', function(){
			$('.fighter0').appendTo('.defender');
			$('.luke').css({"background-color": "#e3eaed"});
			$('#luke-hp').css({"color": "black"});
		});
		$('.luke').css({"background-color": "red"});
		$('#luke-hp').css({"color": "white"});	

//=============================== VADER GOES TO ENEMIES SECTION ================================
		vaderImg.appendTo('.enemies');
		vaderImg.addClass('.fighter2')
		$('.button2').on('click', function(){
			$('.fighter2').appendTo('.defender');
			$('.vader').css({"background-color": "#e3eaed"});
			$('#vader-hp').css({"color": "black"});
		});
		$('.vader').css({"background-color": "red"});
		$('#vader-hp').css({"color": "white"});	

//=============================== SIDIOUS GOES TO ENEMIES SECTION ================================
		sidiousImg.appendTo('.enemies');
		sidiousImg.addClass('.fighter3')
		$('.button3').on('click', function(){
			$('.fighter3').appendTo('.defender');
			$('.sidious').css({"background-color": "#e3eaed"});
			$('#sidious-hp').css({"color": "black"});
		});
		$('.sidious').css({"background-color": "red"});
		$('#sidious-hp').css({"color": "white"});
	});	


//=============================== VADER AS CHARACTER ==========================================
	vaderImg.on('click', function(){
		$(this).appendTo('.character');

//=============================== LUKE GOES TO ENEMIES SECTION ================================
		lukeImg.appendTo('.enemies');
		lukeImg.addClass('.fighter0');
		$('.button1').on('click', function(){
			$('.fighter0').appendTo('.defender');
			$('.luke').css({"background-color": "#e3eaed"});
			$('#luke-hp').css({"color": "black"});
		});
		$('.luke').css({"background-color": "red"});
		$('#luke-hp').css({"color": "white"});	

//=============================== OBI GOES TO ENEMIES SECTION ================================
		obiImg.appendTo('.enemies');
		obiImg.addClass('.fighter1')
		$('.button2').on('click', function(){
			$('.fighter1').appendTo('.defender');
			$('.obi').css({"background-color": "#e3eaed"});
			$('#obi-hp').css({"color": "black"});
		});
		$('.obi').css({"background-color": "red"});
		$('#obi-hp').css({"color": "white"});		

//=============================== SIDIOUS GOES TO ENEMIES SECTION ================================
		sidiousImg.appendTo('.enemies');
		sidiousImg.addClass('.fighter3')
		$('.button3').on('click', function(){
			$('.fighter3').appendTo('.defender');
			$('.sidious').css({"background-color": "#e3eaed"});
			$('#sidious-hp').css({"color": "black"});
		});
		$('.sidious').css({"background-color": "red"});
		$('#sidious-hp').css({"color": "white"});
	});	

//=============================== SIDIOUS AS CHARACTER ==========================================
	sidiousImg.on('click', function(){
		$(this).appendTo('.character');

//=============================== LUKE GOES TO ENEMIES SECTION ================================		
		lukeImg.appendTo('.enemies');
		lukeImg.addClass('.fighter0');
		$('.button1').on('click', function(){
			$('.fighter0').appendTo('.defender');
			$('.luke').css({"background-color": "#e3eaed"});
			$('#luke-hp').css({"color": "black"});
		});
		$('.luke').css({"background-color": "red"});
		$('#luke-hp').css({"color": "white"});

//=============================== OBI GOES TO ENEMIES SECTION ================================
		obiImg.appendTo('.enemies');
		obiImg.addClass('.fighter1')
		$('.button2').on('click', function(){
			$('.fighter1').appendTo('.defender');
			$('.obi').css({"background-color": "#e3eaed"});
			$('#obi-hp').css({"color": "black"});
		});
		$('.obi').css({"background-color": "red"});
		$('#obi-hp').css({"color": "white"});	

//=============================== VADER GOES TO ENEMIES SECTION ================================
		vaderImg.appendTo('.enemies');
		vaderImg.addClass('.fighter2')
		$('.button3').on('click', function(){
			$('.fighter2').appendTo('.defender');
			$('.vader').css({"background-color": "#e3eaed"});
			$('#vader-hp').css({"color": "black"});
		});
		$('.vader').css({"background-color": "red"});
		$('#vader-hp').css({"color": "white"});		
	});	


function selectDefender(){

}


});