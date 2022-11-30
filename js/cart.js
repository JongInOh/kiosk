$('.fa-cart-plus').on('click', function () {
	$('#pop').hide();
	$('.cart-flex').perent().prop(flex);
	let flex = $('.cart-flex').perent().prop(flex);
	console.log(flex);
});

// 작업중 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!111

// 장바구니 합계
if ($('.cart').length) {
	var cartList = $('.cart div');
	var tartgetTotal = $('.total .totalprice');
	var totalprice = 0;
	var itemDelBtn = cartList.find('.close-cart');
	// 열리자마자 합계 다시계산
	calcTotal();

	// 수량바꾸면  합계다시계산
	$('.result').change(function () {
		calcTotal();
	});
	// x눌러서 item삭제   합계다시계산

	// 합계구하기
	function calcTotal() {
		cartList.each(function () {
			var uniPrice = parseInt(
				$(this).find('.unit-price').text().replace('￦', '')
			);
			var unitCount = $(this).find('input').val();
		});

		// 변수명 totalprice 단가 * 수량
		// grandTotal값을 tartgetTotal의 내용으로교체
	}
}

// 빈 변수에     (단가 * 수량)+ (단가*수량)
