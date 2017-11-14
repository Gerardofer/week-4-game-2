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

	var lukeHp = 100;
	var obiHp = 125;
	var vaderHp = 160;
	var sidiousHp = 185;	
	var lukeImg = false;
	var obiImg = false;
	var vaderImg = false;
	var sidiousImg = false;

	$('#luke-hp').text(lukeHp);
	$('#obi-hp').text(obiHp);
	$('#vader-hp').text(vaderHp);
	$('#sidious-hp').text(sidiousHp);


	$('#luke').on('click', function(){
		lukeImg = true
		if (lukeImg === true){
			$('.obiImg').appendTo('.enemies');
			$('.vaderImg').appendTo('.enemies');
			$('.sidiousImg').appendTo('.enemies');
		};
	})

	$('#obi').on('click', function(){
		obiImg = true
		if (obiImg === true){
			$('.lukeImg').appendTo('.enemies');
			$('.vaderImg').appendTo('.enemies');
			$('.sidiousImg').appendTo('.enemies');
		};
	})	

	$('#vader').on('click', function(){
		vaderImg = true
		if (vaderImg === true){
			$('.lukeImg').appendTo('.enemies');
			$('.obiImg').appendTo('.enemies');
			$('.sidiousImg').appendTo('.enemies');
		};
	})

	$('#sidious').on('click', function(){
		sidiousImg = true
		if (sidiousImg === true){
			$('.lukeImg').appendTo('.enemies');
			$('.obiImg').appendTo('.enemies');
			$('.vaderImg').appendTo('.enemies');
		};
	})	

});


