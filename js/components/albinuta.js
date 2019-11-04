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

	canv = document.getElementById('myCanvas');
	ctx = canv.getContext("2d");
	canv.width = $('#myCanvas').width();
	canv.height = 450;

	$('#myCanvas').mousedown(function (e) {
		mousePressed = true;
		Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
	});

	$('#myCanvas').mousemove(function (e) {
		if (mousePressed) {
			Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
		}
	});

	$('#myCanvas').mouseup(function (e) {
		mousePressed = false;
	});
	$('#myCanvas').mouseleave(function (e) {
		mousePressed = false;
	});
});

function Draw(x, y, isDown) {
	if (isDown) {
		ctx.beginPath();
		ctx.strokeStyle = $('#selColor').val();
		ctx.lineWidth = $('#selWidth').val();
		ctx.lineJoin = "round";
		ctx.moveTo(lastX, lastY);
		ctx.lineTo(x, y);
		ctx.closePath();
		ctx.stroke();
	}
	lastX = x; lastY = y;
}

function clearArea() {
	// Use the identity matrix while clearing the canvas
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}