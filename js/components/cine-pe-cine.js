/**
 * Author:    Iancu George-Alexandru
 * Created:   02.11.2019
 *
 * (c) Copyright by Iancu George-Alexandru.
 **/
var gameName = "cine-pe-cine";

async function getKidName() {
	return localStorage.getItem('name');
}

window.onload = async () => {
	var kidName = await getKidName();

	$("[data-name='kidName']").html(kidName);
}


$("#evaluation").on("click", async function () {
	// magic happends here

	var goodAnswers = [];
	var kidAnswers = [];
	$("." + gameName + "__input").each(function () {

		let goodAnswer = $(this).attr('data-answer');
		goodAnswers.push(goodAnswer);

		let kidAnswer = $(this).val();
		kidAnswers.push(kidAnswer);
	});

	console.log(goodAnswers);
	console.log(kidAnswers);

	var checkAns = 0;
	for (let i = 0; i < goodAnswers.length; i++) {


		if (goodAnswers[i].toLowerCase() !== kidAnswers[i].toLowerCase() ) {
			checkAns = 1;
			$('[data-answer="' + goodAnswers[i] + '"]').addClass(gameName + "__input--error");
			$('[data-answer="' + goodAnswers[i] + '"]').val(goodAnswers[i])
		} else {
			$('[data-answer="' + goodAnswers[i] + '"]').addClass(gameName + "__input--good");
		}

	}

	if(checkAns == 0) {
		$('.evaluation-quiz-message').addClass('evaluation-quiz-message__good');
		$('.evaluation-quiz-message').html("Felicitari, "+await getKidName()+"! Ai raspuns corect la toate intrebarile !");
		$("#evaluation").css('display', 'none');
	} else {
		$('.evaluation-quiz-message').addClass('evaluation-quiz-message__error');
		$('.evaluation-quiz-message').html(" Ups ! Din pacate te-ai incurcat, te ajutam noi. Urmareste casutele colorate cu rosu!");
	}

})
