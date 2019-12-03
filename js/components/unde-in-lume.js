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



$("#checkAnswer").on("click", function() {
	var answer = 0;

	$(".js-input").each(function(index, item) {
		if($(item).val() == $(item).attr("data-good")) {
			answer = 1;
		}else {
			answer = 0;
		}
	});

	if(answer == 1) {
		showModal("Felicitari, ai gasit raspunsul corect !")
	} else {
		showModal("Ups, nu ai reusit, mai incearca !")
	}
})
