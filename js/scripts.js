/*!
 * Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

// json img
$(document).ready(function () {
	$.ajax({
		url: 'js/item.json',
		dataType: 'json',
		success: function (data) {
			$.each(data, function (idx) {
				// if (idx > 8) return false;
				$('.card-img-top').eq(idx).attr('src', this['img']);
				$('.menu-name').eq(idx).text(this['name']);
				$('.menu-price').eq(idx).text(this['price']);
			});
		},
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
		$('.ADE').css('display', 'grid');
		$('.ADE').show().css('display', 'grid');
	});
	$('.M-ESPRESSO').on('click', function () {
		$('.ADE').hide();
		$('.ESPRESSO').show();
	});

	// POPUP
	$('.mt-auto').on('click', function () {
		$('section').animate({ opacity: '0.5' }, 0);
		$('#pop').show();
		var idx = $('.mt-auto').index($(this));
		$.ajax({
			url: 'js/item.json',
			dataType: 'json',
			success: function (data) {
				$('#pop img').attr('src', data[idx]['img']);
				$('.menu-Pname').text(data[idx]['name']);
				$('.menu-Pprice').text(data[idx]['price']);
			},
		});
	});

	$('.close').on('click', function () {
		$('section').animate({ opacity: '1' }, 0);
		$('#pop').hide();
		$;
	});
});
