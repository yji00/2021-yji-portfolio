var cnt = 0;
var elm = ".main";
var $skew = $('.skew-wrapper');
var delay = 2000;

var now = -1;
var isScroll = true;
var $section = $('.gnb-wrapper > section');
var sectionLast = $section.length - 1;
var zIdx = 11;

/*
$(window).on("mousewheel DOMMouseScroll", function (e) {
	e.preventDefault();
	if (isScroll) {
		isScroll = false;
		var delta = 0;
		if (!event) event = window.event;
		if (event.wheelDelta) {
			delta = event.wheelDelta / 120;
			if (window.opera) delta = -delta;
		}
		else if (event.detail)
			delta = -event.detail / 3;
		// 마우스휠을 위에서 아래로
		if (delta < 0) {
			now = (now == sectionLast) ? 0 : now + 1;
			$section.eq(now).css('z-index', zIdx++);
			$section.eq(now).addClass('active')
		}
		else { // 마우스휠을 아래에서 위로
			now = (now == 0) ? sectionLast : now - 1;
			$section.eq(now).css('z-index', zIdx++);
			$section.eq(now).removeClass('active')
		}
		setTimeout(function () {
			isScroll = true;
			//$section.removeClass('active')
		}, delay)
	}
});
*/

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

 $('.black-wrapper').mousemove(mouse);
 function mouse(e) {
   var x = e.clientX;
   var y = e.clientY;
   var coor = 'Coordinates: (' + x + ',' + y + ')';
   console.log(coor);
   console.log($skew);
   if( x<1000 && y<1000 ) {
     $skew.css('transform', 'skew( -'+x*0.006+'deg, -'+y*0.006+'deg)');
   }
   else if( x<1000 && y>1000 ) $skew.css('transform', 'skew( -'+x*0.006+'deg, -'+y*0.005+'deg)');
   else if( x>1000 && y<1000 ) $skew.css('transform', 'skew( '+x*0.005+'deg, '+y*0.005+'deg)');
   else if( x>1000 && y>1000 ) $skew.css('transform', 'skew( '+x*0.005+'deg, -'+y*0.005+'deg)');
 }


var $title = $('ul.skill-wrap');


function onSkillClick() {
	console.log(this)
	
	$(this).addClass('active')
	var $numwrap = $('.gradient-wrapper').find('.number')
	var num = $numwrap.text()
	
	var memberCountConTxt = $numwrap.text();
	
	$({ val: 0 }).animate({ val: memberCountConTxt }, {
		duration: 2000,
		step: function () {
			var num = numberWithCommas(Math.floor(this.val));
			$numwrap.text(num);
		},
		complete: function () {
			var num = numberWithCommas(Math.floor(this.val));
			$numwrap.text(num);
		}
	});
	
	function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
}

$title.find('li').click(onSkillClick);