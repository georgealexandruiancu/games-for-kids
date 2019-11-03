/**
 * Author:    Iancu George-Alexandru
 * Created:   03.11.2019
 *
 * (c) Copyright by Iancu George-Alexandru.
 **/
var gameName = "pregatiri-pentru-drumetie";

async function getKidName() {
	return localStorage.getItem('name');
}

window.onload = async () => {
	var kidName = await getKidName();

	$("[data-name='kidName']").html(kidName);
}

$('.' + gameName + '__item').on('click', function () {
	if ($(this).hasClass('pregatiri-pentru-drumetie--selected')) {
		$(this).removeClass(gameName + '--selected');
	} else {
		$(this).addClass(gameName + '--selected');
	}
})

$('#evaluation').on('click', async function () {
	var countCheck = 0;
	$('.' + gameName + '--selected').each(function() {
		if($(this).attr('data-check') != 'true') {
			countCheck++;
			$(this).removeClass(gameName + '--selected');
			$(this).addClass(gameName + '--wrong');
		} else {
			$(this).removeClass(gameName + '--selected');
			$(this).addClass(gameName + '--good');
		}
	})
	

	if(countCheck > 0) {
		$('.evaluation-quiz-message').addClass('evaluation-quiz-message__error');
		$('.evaluation-quiz-message').html("Din pacate au fost niste greseli in selectarea ta ! Te rugam sa citesti cu atentie echipamentul prezentat mai sus si sa reincerci :) ! Mult succes !");
		$('.js-retry-game').removeClass('u-display-none');
		$('#evaluation').addClass('u-display-none');
	}else {
		$('.evaluation-quiz-message').addClass('evaluation-quiz-message__good');
		$('.evaluation-quiz-message').html("Felicitari, " + await getKidName() + "! Ai completat foarte bine si corect !");
		$('#evaluation').addClass('u-display-none');
	}
})