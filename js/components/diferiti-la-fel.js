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

$(".js-image-sex").on("click", function() {
	$(".js-image-sex").each(function() { $(this).removeClass("border-active") });
	$(this).addClass("border-active");
})


$("#checkAnswer").on("click", function() {
	var answer = 1;

	$(".js-get-diferiti").each(function() {
		if($(this).val() == "" || $(this).val < 0) {
			answer = 0;
		}
	})

	if(answer == 1) {
		showModal("Felicitari, multumim pentru completare !")
	} else {
		showModal("Ups, completeaza toate spatiile goale !")
	}
})
