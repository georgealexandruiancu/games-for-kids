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

$('.card').each(function (index, item) {
	$(item).children('.collapse').attr('aria-labelledby', 'header' + index);
	$(item).children('.collapse').attr('id', 'header' + index);
	$(item).children('.card-header').attr('id', 'header' + index);
});

$('.collapse').each(function (index, item) {
	$(item).addClass('u-display-none');
	$(item).addClass('animated');
	$(item).addClass('bounceInUp');
});

$('.card-header').on('click', function () {
	if ($(this).parent().children('.collapse').hasClass('u-display-none')) {

		$(this).parent().children('.collapse').removeClass('u-display-none');
		$(this).parent().children('.collapse').addClass('u-display-block');

	} else {

		$(this).parent().children('.collapse').addClass('u-display-none');
		$(this).parent().children('.collapse').removeClass('u-display-block');

	}
});

function myFunction() {
	// Declare variables
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementsByClassName("input-book")[0];
	filter = input.value.toUpperCase();
	table = document.getElementsByClassName("accordion")[0];
	tr = table.getElementsByClassName("titleCard");
	parent = table.getElementsByClassName('card');

	// Loop through all table rows, and hide those who don't match the search query
	for (i = 0; i < tr.length; i++) {
		td = tr[i];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				parent[i].style.display = "";
			} else {
				parent[i].style.display = "none";
			}
		}
	}
}