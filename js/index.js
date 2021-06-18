var cnt = 0;
var elm = ".main";

// 개별적으로 Wheel 이벤트 적용
// $(elm).on("mousewheel DOMMouseScroll", function (e) {
// 	e.preventDefault();
// 	var delta = 0;
// 	if (!event) event = window.event;
// 	if (event.wheelDelta) {
// 		delta = event.wheelDelta / 120;
// 		if (window.opera) delta = -delta;
// 	}
// 	else if (event.detail)
// 		delta = -event.detail / 3;
// 	// 마우스휠을 위에서 아래로
// 	if (delta < 0) {
// 		cnt++;
// 	}
// 	else { // 마우스휠을 아래에서 위로
// 		cnt--;
// 	}
// 	var rotate = cnt ;
// 	var scale = 1 - (cnt / 100);
	
// 	console.log(cnt);
// 	$(this).css('transform', 'rotate('+rotate+'deg) scale('+scale+')')
// });

