$('.menu').on('click', function () {
	$('section').animate({ opacity: '1' }, 0);
	$('#pop').hide();
	// $('.cart-flex').parent().prop(cartflex);
	// let cartflex = $('.cart-flex').parent().prop(cartflex);
	$('ul.h100.cart').append('<li></li>');
});

// 작업중 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!111

// 장바구니 합계
// $(document).ready(function () {
// 	if ($('.cart-list').length) {
// 		var cartList = $('.cart-list li');
// 		var tartgetTotal = $('.total-price');
// 		var totalprice = 0;
// 		var itemDelBtn = cartList.find('.close-cart');

// 		// 열리자마자 합계 다시계산
// 		calcTotal();

// 		// 수량바꾸면  합계다시계산
// 		$('.result')
// 			.text()
// 			.change(function () {
// 				calcTotal();
// 			});

// 		// x눌러서 item삭제   합계다시계산
// 		itemDelBtn.click(function () {
// 			var userAction = confirm('삭제하시겠습니까?');
// 			if (userAction) {
// 				$(this).parent().remove();
// 				calcTotal();
// 			}
// 		});

// 		// 합계구하기
// 		function calcTotal() {
// 			cartList = $('.cart-list li');
// 			console.log(cartList.length);
// 			totalprice = 0;

// 			if (cartList.length > 0) {
// 				cartList.each(function () {
// 					var unitPrice = parseInt(
// 						$(this).find('.menu-price').text().replace('￦', '')
// 					);
// 					var unitCount = $(this).find('input').val();

// 					totalprice += unitCount * unitPrice;

// 				});

// 			}
// 		}
// 		else{
// 			tartgetTotal.text("￦0");
// 		};
// 		// 변수명 totalprice 단가 * 수량
// 		// grandTotal값을 tartgetTotal의 내용으로교체
// 	}
// });

// 빈 변수에     (단가 * 수량)+ (단가*수량)
