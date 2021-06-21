var cnt = 0;
var elm = ".main";
var $skew =$('.skew-wrapper');

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

// $('.black-wrapper').mousemove(mouse(e));
// function mouse(e) {
//   var x = e.clientX;
//   var y = e.clientY;
//   var coor = 'Coordinates: (' + x + ',' + y + ')';
//   console.log(coor);
//   console.log($skew);
//   if( x<1000 && y<1000 ) {
//     $skew.css('transform', 'skew( -'+x*0.006+'deg, -'+y*0.006+'deg)');
//   }
//   else if( x<1000 && y>1000 ) $skew.css('transform', 'skew( -'+x*0.006+'deg, -'+y*0.005+'deg)');
//   else if( x>1000 && y<1000 ) $skew.css('transform', 'skew( '+x*0.005+'deg, '+y*0.005+'deg)');
//   else if( x>1000 && y>1000 ) $skew.css('transform', 'skew( '+x*0.005+'deg, -'+y*0.005+'deg)');
// }



var $title = $('ul.skill-wrap');


function onSkillClick() {
  console.log(this)

  $(this).addClass('active')
  var $numwrap =$('.gradient-wrapper').find('.number')
  var num =$numwrap.text()
  
  var memberCountConTxt= $numwrap.text();
    
  $({ val : 0 }).animate({ val : memberCountConTxt }, { duration: 2000, 
    step: function() {
    var num = numberWithCommas(Math.floor(this.val));
    $numwrap.text(num);
  },
  complete: function() {
    var num = numberWithCommas(Math.floor(this.val));
    $numwrap.text(num);
  }
  });
  
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

$title.find('li').click(onSkillClick);