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
		var totalprice = parseInt($('.menu-Pprice').text().replace('￦', ''));
		// console.log(price);
		$.ajax({
			url: 'js/item.json',
			dataType: 'json',
			success: function (data) {
				$('#pop img').attr('src', data[idx]['img']);
				$('.menu-Pname').text(data[idx]['name']);
				$('.menu-Pprice').text(data[idx]['price']);
			},
		});

		// 수량
		// var totalprice = val($('.menu-Pprice'));
		$('.minus').on('click', function () {
			let $result = $(this).next();
			let count = Number($result.text());
			// let sum = 0;
			const totalitem = 0;
			// var totalprice = $(this).val();

			count--;
			if (count < 0) {
				count = 0;
			}
			$result.text(count);
			$('#total-item').val(totalitem);
			// console.log(totalprice);
			// $('#total-price').val(totalprice);
			// sum += parseInt($('.menu-price').val()) * parseInt($('.menu-item').val());
			// console.log('price', parseInt($('.menu-price').val()));
			// console.log('price', parseInt($('.menu-item').val()));
			// console.log(totalitem);
		});

		$('.plus').on('click', function () {
			let $result = $(this).prev();
			let count = Number($result.text());
			const totalitem = count;
			// var totalprice = $(this).val();
			// const totalprice = $(this).val();
			count++;
			$result.text(count);
			// console.log(totalprice);
			$('#total-item').empty().val(totalitem);
			// $('#total-price').empty().val(totalprice);
			// // sum += parseInt($('.menu-price').val()) * parseInt($('.menu-item').val());
			// console.log('price', parseInt($('.menu-price').val()));
			// console.log('price', parseInt($('.menu-item').val()));
			// console.log(totalitem);
		});
		console.log(totalprice);
		var countbtn = $('.grid111');
		console.log(countbtn);
		$('.close').on('click', function () {
			$('section').animate({ opacity: '1' }, 0);
			$('#pop').hide();

			$('.d-flexbt').append(countbtn);
		});

		// cartlist = "<li></li>"
		// $('.cart-list>li').append('');
	});
});
