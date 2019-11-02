/**
 * Author:    Iancu George-Alexandru
 * Created:   02.11.2019
 *
 * (c) Copyright by Iancu George-Alexandru.
 **/

$("[data-intro='slide-block-1'").css('display', 'none');
$(".u-loading").css('display', 'none');


setTimeout(function () {
	$("[data-intro='slide-block-0']").css('display', 'none');
	$("[data-intro='slide-block-1']").css('display', 'inline-block');
}, 5000);

$("#checkName").on('keyup', function() {
	if(this.value) {
		$("[data-intro='button-start']").addClass('animated infinite pulse');
	} else if(this.value == ""){
		$("[data-intro='button-start']").removeClass('animated infinite pulse');
	}
});

async function getKidName() {
	return localStorage.getItem('name');
}

$("[data-intro='button-start']").on("click", async function() {
	// magic happends here
	var kidName = $("#checkName").val();

	localStorage.setItem('name', kidName);

	let nameSaved = await getKidName();
	$('.u-loading').css('display', 'initial');
	$('.u-loading .intro-loading-text').html(`
		<h1>Buna `+ nameSaved + `!</h1>
		<h1>Construim terenul de joaca pentru tine !</h1>
	`);
	setTimeout(function () {
		window.location = "/pages/menu.html";
	}, 4000);
	
})
