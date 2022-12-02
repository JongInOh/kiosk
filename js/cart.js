var total_price = 0;
$('.menu').on('click', function () {
	$('section').animate({ opacity: '1' }, 0);
	$('#pop').hide();
	var name = $('.menu-Pname').text();
	var price = $('.menu-Pprice').text().substring(1);
	var cnt = count;
	var src = $('.Pimg').attr('src');
	// $('.cart-flex').parent().prop(cartflex);
	// let cartflex = $('.cart-flex').parent().prop(cartflex);
	var $item = $(
		"<li class='card cart-flex'><img class='cart-img-top' src='" +
			src +
			"'/><dsiv class='cart-body p-4'><div class='text-center'><h5 class='fw-bolder'>" +
			name +
			"</h5><div class='d-flexbt'><button class='minus btn-cart btn-outline-dark'><i class='fa-solid fa-minus'></i></button><span class='result'>" +
			cnt +
			"</span><button class='plus btn-cart btn-outline-dark'><i class='fa-solid fa-plus'></i></button></div></div></dsiv><span class='fw-bolder p-4 d-flexrevers'>￦" +
			price +
			"</span><button class='btn-x-cart close-cart'><i class='fa-solid fa-xmark'></i></button></li>"
	);
	$('.cart-list').append($item);
	$('.btn-x-cart.close-cart').on('click', function () {
		var price = Number(
			$(this).parent().find('.fw-bolder.p-4.d-flexrevers').text().substring(1)
		);
		var cnt = Number($(this).parent().find('.result').text());
		total_price -= price * cnt;
		alert(total_price);
		$('#total-item').val(total_price);
		$(this).parent().remove();
	});
	$('.card.cart-flex').each(function () {
		total_price += Number(
			$(this).find('.fw-bolder.p-4.d-flexrevers').text().substring(1)
		);
	});
	$('.fw-bolder.total-price').val(total_price);
});
