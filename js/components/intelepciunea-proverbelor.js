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


$("#oneInput").on('keyup', function() {
	let value = $(this).val();

	$("#one").children('input').each(function(index, item) {
		if(index != 0)
			$(item).val(value[index-1]);
	})
})

$("#twoInput").on('keyup', function() {
	let value = $(this).val();

	$("#two").children('input').each(function(index, item) {
		if(index != 0)
			$(item).val(value[index-1]);
	})
})

$("#threeInput").on('keyup', function() {
	let value = $(this).val();

	$("#three").children('input').each(function(index, item) {
		if(index != 0)
			$(item).val(value[index-1]);
	})
})

$("#fourInput").on('keyup', function() {
	let value = $(this).val();

	$("#four").children('input').each(function(index, item) {
		if(index != 0)
			$(item).val(value[index-1]);
	})
})

$("#fiveInput").on('keyup', function() {
	let value = $(this).val();

	$("#five").children('input').each(function(index, item) {
		if(index != 0)
			$(item).val(value[index-1]);
	})
})

$("#sixInput").on('keyup', function() {
	let value = $(this).val();

	$("#six").children('input').each(function(index, item) {
		if(index != 0)
			$(item).val(value[index-1]);
	})
})

$("#sevenInput").on('keyup', function() {
	let value = $(this).val();

	$("#seven").children('input').each(function(index, item) {
		if(index != 0)
			$(item).val(value[index-1]);
	})
})


$("#eightInput").on('keyup', function() {
	let value = $(this).val();

	$("#eight").children('input').each(function(index, item) {
		if(index != 0)
			$(item).val(value[index-1]);
	})
})

$("#checkAnswer").on("click", function() {
	var answer = "";

	$(".featured-input").each(function() {
		answer += $(this).val();
	});

	if(answer.toLowerCase() == "proverbe") {
		showModal("Felicitari, ai gasit raspunsul corect !")
	} else {
		showModal("Cuvantul bun este 'PROVERBE', mai incearca !")
	}
})
