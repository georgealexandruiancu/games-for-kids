/**
 * Author:    Iancu George-Alexandru
 * Created:   03.11.2019
 *
 * (c) Copyright by Iancu George-Alexandru.
 **/
var gameName = "albinuta";

async function getKidName() {
	return localStorage.getItem('name');
}
var mousePressed = false;
var lastX, lastY;
var ctx;

$(window).on("load", async function () {
	var kidName = await getKidName();

	$("[data-name='kidName']").html(kidName);
});

$('.js-clickMaze').on('click', function () {
	var moveType = $(this).attr('data-move');
	var elementToMove = $('.recicleaza__trash');
	var positionElement = elementToMove.position();
	if (moveType == 'up') {
		var newMove = positionElement.top - 4;
		elementToMove.css('top', newMove + 'px');
	} else if (moveType == 'down') {
		var newMove = positionElement.top + 4;
		elementToMove.css('top', newMove + 'px');
	} else if (moveType == 'right') {
		var newMove = positionElement.left + 4;
		elementToMove.css('left', newMove + 'px');
	} else if (moveType == 'left'){
		var newMove = positionElement.left - 4;
		elementToMove.css('left', newMove + 'px');
	}

	// trebuie sa fac catch daca trece de 0 0
})

$(document).keydown(function (e) {

	var elementToMove = $('.recicleaza__trash');
	var positionElement = elementToMove.position();

	switch (e.which) {
		case 37: // left
			var newMove = positionElement.left - 4;
			elementToMove.css('left', newMove + 'px');
			break;

		case 38: // up
			var newMove = positionElement.top - 4;
			elementToMove.css('top', newMove + 'px');
			break;

		case 39: // right
			var newMove = positionElement.left + 4;
			elementToMove.css('left', newMove + 'px');
			break;

		case 40: // down
			var newMove = positionElement.top + 4;
			elementToMove.css('top', newMove + 'px');
			break;

		default: return; // exit this handler for other keys
	}
	e.preventDefault(); // prevent the default action (scroll / move caret)
});