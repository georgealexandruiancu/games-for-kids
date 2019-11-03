/**
 * Author:    Iancu George-Alexandru
 * Created:   03.11.2019
 *
 * (c) Copyright by Iancu George-Alexandru.
 **/
var gameName = "cel-mai-fricos";

async function getKidName() {
	return localStorage.getItem('name');
}

window.onload = async () => {
	var kidName = await getKidName();

	$("[data-name='kidName']").html(kidName);
}

setTimeout(() => {
	$('kbd').draggable({
		helper: 'clone'
	});

	$('.cel-mai-fricos__input .input').droppable({
		helper: 'clone',
		drop: function(ev, ui) {
			if ($(this).parent().find('.ui-draggable').length) {
				$(this).parent().find('.ui-draggable').remove();
			}
			console.log(ui);
			$(this).append(ui.draggable.clone(true));
		}
	})
}, 2000);

$('#evaluation').on('click', async function () {
	// magic happends here
	var childText = '';
	var correctText = 'îl omor pe cel ce pune mâna pe mistreț ';
	$('.'+gameName+'__group').each(function () {
		$(this).children('.cel-mai-fricos__input').each(function () {
			var element = $(this).children('.input').children('kbd');
			var checkIfExistAns = $(this).children('.input').find('kbd');
			if(checkIfExistAns.length) {
				childText += element.attr('data-value')
			}
		})
		childText += " ";
	});
	
	if(childText == correctText) {
		$('.evaluation-quiz-message').addClass('evaluation-quiz-message__good');
		$('.evaluation-quiz-message').html("Felicitari, " + await getKidName() + "! Ai completat foarte bine si corect !");
		$("#evaluation").css('display', 'none');
	} else {
		$('.evaluation-quiz-message').addClass('evaluation-quiz-message__error');
		$('.evaluation-quiz-message').html(" Ups ! Din pacate te-ai incurcat, te ajutam noi. Textul este: îl omor pe cel ce pune mâna pe mistreț . Completeaza corect si apasa butonul. Succes!");
	}

})