/*!
 * Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

// POPUP
$('.mt-auto').on('click', function () {
	$('section').animate({ opacity: '0.5' }, 0);
	$('#pop').show();
});

$('.close').on('click', function () {
	$('section').animate({ opacity: '1' }, 0);
	$('#pop').hide();
});

// 수량
$('.minus').on('click', function () {
	let $result = $(this).next();
	let count = Number($result.text());

	count--;
	if (count < 0) {
		count = 0;
	}
	$result.text(count);
});

$('.plus').on('click', function () {
	let $result = $(this).prev();
	let count = Number($result.text());

	count++;
	$result.text(count);
});

// 메뉴바

$('.M-ADE').on('click', function () {
	$('.ESPRESSO').hide();
	$('.ADE').show();
});
$('.M-ESPRESSO').on('click', function () {
	$('.ADE').hide();
	$('.ESPRESSO').show();
});
