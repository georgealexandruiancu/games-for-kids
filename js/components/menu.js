/**
 * Author:    Iancu George-Alexandru
 * Created:   02.11.2019
 *
 * (c) Copyright by Iancu George-Alexandru.
 **/
async function getKidName() {
	return localStorage.getItem('name');
}

window.onload = async () => {
	var kidName = await getKidName();

	$("[data-name='kidName']").html(kidName);
}


$(".menu-elements__button").on("click", async function() {
	var me = $(this);
	// magic happends here
	var nameSaved = await getKidName();
	$('.u-loading').css('display', 'initial');
	$('.u-loading .intro-loading-text').html(`
		<h1>Buna `+ nameSaved + `!</h1>
		<h1>Incarcam jocul `+ me.attr('data-game') + ` pentru tine</h1>
	`);
	setTimeout(function () {
		window.location = "/de-la-comuna-noastra-la-planeta-albastra/pages/" + me.attr('data-href') + '.html';
	}, 3000);
	
})
