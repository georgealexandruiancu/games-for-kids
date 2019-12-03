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


$(".js-check-ans-btn").on("click", function() {
	
	var child = $(this).parent().parent();
	var kidans = $(child).find(".js-check-ans").val();
	var goodans = $(child).find(".js-check-ans").attr("data-check");

	if(kidans == goodans) {
		showModal("Felicitari, ai raspuns corect!")
	} else {
		showModal("Ups, ai raspuns gresit, raspunsul corect este '" + goodans +"' !")
	}
})
