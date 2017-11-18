// ===================Things to finish ============================

// - complete the logic that will reduce the Hp for all the players selected
// - fix the bug that moves a player in the enemies section to the character section if the picture is selected.
// - add sounds effects. 

$(document).ready(function(){

	var userChar = [];
	var challenegers = [];
	var lukeHp = 100;
	var obiHp = 120;
	var vaderHp = 150;
	var sidiousHp = 180;
	var lukeAttack = 5;
	var obiAttack = 10;
	var vaderAttack = 20;
	var sidiousAttack = 25;
	var totalAttack = 0;
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


//======================================== LUKE'S SCENARIO =====================================
	attackBtn.on('click', function(){
		if (userChar < 1 || challenegers < 1){
		alert("Please select a character to fight");
		}
		if (userChar[0] === 100 && challenegers[0] === 120){
			totalAttack += lukeAttack;
			lukeHp = lukeHp - obiAttack;
			obiHp = obiHp - totalAttack;
			if (obiHp <= 0){
				challenegers = [];
				obiImg.detach();
				$('.button1').detach()
			};
			console.log(totalAttack);
			$('#luke-hp').text(lukeHp);
			$('#obi-hp').text(obiHp);
		}
	});

	attackBtn.on('click', function(){
		if (userChar < 1 || challenegers < 1){
		alert("Please select a character to fight");
		}

		if (userChar[0] === 30 && challenegers[0] === 150){
			totalAttack += lukeAttack;
			lukeHp = lukeHp - vaderAttack
			vaderHp = vaderHp - totalAttack;
			console.log(totalAttack);
			if (vaderHp <= 0){
				challenegers = [];
				vaderImg.detach();
				$('.button2').detach()
			}
			if (lukeHp <= 0){
				userChar = [];
				totalAttack = 0;
				alert("Game Over");
				alert("Please click 'reset' to start a new game");
				lukeImg.detach();
				vaderImg.detach();
				sidiousImg.detach();
			}
			$('#luke-hp').text(lukeHp);
			$('#vader-hp').text(vaderHp);
		}	
	});


//===================================== OBI'S SCENARIO ==================================		
	attackBtn.on('click', function(){
		if (userChar < 1 || challenegers < 1){
		alert("Please select a character to fight");
		}

		if (userChar[0] === 120 && challenegers[0] === 100){
			totalAttack += obiAttack;
			obiHp = obiHp - lukeAttack;
			lukeHp = lukeHp - totalAttack;
			if(lukeHp <= 0){
				challenegers = [];
				lukeImg.detach();
				$('.button1').detach();
			}
			console.log(totalAttack);
			$('#obi-hp').text(obiHp);
			$('#luke-hp').text(lukeHp);
		};
	});



	attackBtn.on('click', function(){
		if (userChar < 1 || challenegers < 1){
		alert("Please select a character to fight");
		}
		if (challenegers[0] === 150){
			obiHp = obiHp - vaderAttack;
			vaderHp = vaderHp - totalAttack;
			if (vaderHp <= 0){
				challenegers = [];
				vaderImg.detach();
				$('.button2').detach();
			}
			console.log(totalAttack);
			$('#obi-hp').text(obiHp);
			$('#vader-hp').text(lukeHp);
		}
	});
	

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