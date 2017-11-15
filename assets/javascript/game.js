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
	var lukeImg = false;
	var obiImg = false;
	var vaderImg = false;
	var sidiousImg = false;

	$('#luke-hp').text(lukeHp);
	$('#obi-hp').text(obiHp);
	$('#vader-hp').text(vaderHp);
	$('#sidious-hp').text(sidiousHp);

	luke();
	obi();

//=======================Luke as the challenger ===================================
	function luke(){
		// if (luke === true){
			$('#luke').on('click', function(){
			 
				$('.obiImg').appendTo('.enemies');
				$('.obi').css({'background-color': "red"});
				$('.obiImg').addClass($('#obi').on('click', function(){
					$('.obiImg').insertAfter('.defender');
					$('.obi').css({'background-color': "#e3eaed"});
				}));
				$('.vaderImg').appendTo('.enemies');
				$('.vader').css({'background-color': "red"});
				$('.vaderImg').addClass($('#vader').on('click', function(){
					$('.vaderImg').insertAfter('.defender');
					$('.vader').css({'background-color': "#e3eaed"});
				}));
				$('.sidiousImg').appendTo('.enemies');
				$('.sidious').css({'background-color': "red"});
				$('.sidiousImg').addClass($('#sidious').on('click', function(){
					$('.sidiousImg').insertAfter('.defender');
					$('.sidious').css({'background-color': "#e3eaed"});
				}));
			});
		// };
	};


//========================== Obi Wan as the challeneger =================================
	function obi(){
		$('#obi').on('click', function(){
			 
			$('.lukeImg').appendTo('.enemies');
			$('.luke').css({'background-color': "red"});
			$('.lukeImg').addClass($('#luke').on('click', function(){
				$('.lukeImg').insertAfter('.defender');
				$('.luke').css({'background-color': "#e3eaed"});
			}));
			$('.vaderImg').appendTo('.enemies');
			$('.vader').css({'background-color': "red"});
			$('.vaderImg').addClass($('#vader').on('click', function(){
				$('.vaderImg').insertAfter('.defender');
				$('.vader').css({'background-color': "#e3eaed"});
			}));
			$('.sidiousImg').appendTo('.enemies');
			$('.sidious').css({'background-color': "red"});
			$('.sidiousImg').addClass($('#sidious').on('click', function(){
				$('.sidiousImg').insertAfter('.defender');
				$('.sidious').css({'background-color': "#e3eaed"});
			}));
		});
	};
	

	// $('#vader').on('click', function(){
	// 	vaderImg = true
	// 	if (vaderImg === true){
	// 		$('.lukeImg').appendTo('.enemies');
	// 		$('.luke').css({'background-color': "red"});
	// 		$('#luke').on('click', function(){
	// 			vaderImg === false;
	// 			if (lukeImg === true){
	// 				$('.vaderImg').insertAfter('.character');
	// 				$('.lukeImg').insertAfter('.defender');
	// 				$('.luke').css({'background-color': "#e3eaed"});
	// 			}
	// 		});
	// 		$('.obiImg').appendTo('.enemies');
	// 		$('.obi').css({'background-color': "red"});
	// 		$('#obi').on('click', function(){
	// 			vaderImg === false;
	// 			if (obiImg === true){
	// 				$('.vaderImg').insertAfter('.character');
	// 				$('.obiImg').insertAfter('.defender');
	// 				$('.obi').css({'background-color': "#e3eaed"});
	// 			}
	// 		});
	// 		$('.sidiousImg').appendTo('.enemies');
	// 		$('.sidious').css({'background-color': "red"});
	// 		$('#sidious').on('click', function(){
	// 			vaderImg === false;
	// 			if (sidiousImg === true){
	// 				$('.vaderImg').insertAfter('.character');
	// 				$('.sidiousImg').insertAfter('.defender');
	// 				$('.sidious').css({'background-color': "#e3eaed"});
	// 			}
	// 		});
	// 	};
	// })

	// $('#sidious').on('click', function(){
	// 	sidiousImg = true
	// 	if (sidiousImg === true){
	// 		$('.lukeImg').appendTo('.enemies');
	// 		$('.luke').css({'background-color': "red"});
	// 		$('#luke').on('click', function(){
	// 			sidiousImg === false;
	// 			if (lukeImg === true){
	// 				$('.sidiousImg').insertAfter('.character');
	// 				$('.lukeImg').insertAfter('.defender');
	// 				$('.luke').css({'background-color': "#e3eaed"});
	// 			}
	// 		});
	// 		$('.obiImg').appendTo('.enemies');
	// 		$('.obi').css({'background-color': "red"});
	// 		$('#obi').on('click', function(){
	// 			sidiousImg === false;
	// 			if (obiImg === true){
	// 				$('.sidiousImg').insertAfter('.character');
	// 				$('.obiImg').insertAfter('.defender');
	// 				$('.obi').css({'background-color': "#e3eaed"});
	// 			}
	// 		});
	// 		$('.vaderImg').appendTo('.enemies');
	// 		$('.vader').css({'background-color': "red"});
	// 		$('#vader').on('click', function(){
	// 			sidiousImg === false;
	// 			if (vaderImg === true){
	// 				$('.sidiousImg').insertAfter('.character');
	// 				$('.vaderImg').insertAfter('.defender');
	// 				$('.vader').css({'background-color': "#e3eaed"});
	// 			}
	// 		});
	// 	};
	// })	

});


