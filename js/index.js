(function () {
	

	var cnt = 0;
	var elm = ".main";
	var $skew = $('.skew-wrapper');
	var $title = $('ul.skill-wrap');
  
  setInterval(function(){
    var time =  moment( new Date().getTime()).format('hh:mm')
    $('.time').text(time)
  },1000)

  
	
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
	
	// function mouse(e) {
	//   var x = e.clientX;
	//   var y = e.clientY;
	//   var coor = 'Coordinates: (' + x + ',' + y + ')';
	//   console.log(coor);
	//   console.log($skew);
	//   $skew.css('transform', 'perspective('+x*0.1+'px)');
	
	// }
	// $('.black-wrapper').mousemove(mouse);
	
	
	function onSkillClick() {
		console.log(this)
		var skillIndex = $(this).index()
		var $numwrap = $('.gradient-wrapper').find('.number')
		var numarr = [95, 80, 90]
		var descarr = [
			'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			'The discovery of the texts origin is attributed to Richard McClintock,',
			' Consequatur cupiditate ad inventore ex eveniet at fugiat,'
		]
		$('.desc').removeClass('active')
		setTimeout(function () {
			$('.desc').text(descarr[skillIndex]);
			$('.desc').addClass('active')
		}, 350)
		
		
		$title.find('li').removeClass('active')
		$(this).addClass('active')
		
		
		var memberCountConTxt = numarr[skillIndex]
		
		
		$({ val: 0 }).animate({ val: memberCountConTxt }, {
			duration: 2000,
			step: function () {
				var num = Math.floor(this.val);
				$numwrap.text(num);
			},
			complete: function () {
				var num = Math.floor(this.val);
				$numwrap.text(num);
			}
		});
	}
	
	$title.find('li').click(onSkillClick);


  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    keyboard: {
      enabled: true,
    },
  });

  document
    .querySelector(".p-btn")
    .addEventListener("click", function (e) {
      e.preventDefault();
      swiper.slideTo(0, 0);
    });
  document
    .querySelector(".f-btn")
    .addEventListener("click", function (e) {
      e.preventDefault();
      swiper.slideTo(1, 0);
    });
  document
    .querySelector(".b-btn")
    .addEventListener("click", function (e) {
      e.preventDefault();
      swiper.slideTo(2, 0);
    });

		swiper.on('activeIndexChange', function() {
			$('.swiper-slide').removeClass('active')
			$('.swiper-slide').eq(swiper.realIndex).addClass('active')
			console.log(swiper.realIndex); 
		});




	// Init
	var container = $("#container")[0],
	inner = $("#inner")[0];
	
	// Mouse
	var mouse = {
		_x: 0,
		_y: 0,
		x: 0,
		y: 0,
		updatePosition: function (event) {
			var e = event || window.event;
			this.x = e.clientX - this._x;
			this.y = (e.clientY - this._y) * -1;
			console.log(this.x);
		},
		setOrigin: function (e) {
			this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
			this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
		},
		show: function () {
			return "(" + this.x + ", " + this.y + ")";
		}
	};
	
	// Track the mouse position relative to the center of the container.
	mouse.setOrigin(container);
	
	//----------------------------------------------------
	
	var counter = 0;
	var refreshRate = 10;
	var isTimeUpdate = function () {
		return counter++ % refreshRate === 0;
	};
	
	//----------------------------------------------------
	
	
	var onMouseLeaveHandler = function () {
		inner.style = "";
	};
	
	var onMouseMoveHandler = function (event) {
		if (isTimeUpdate()) {
			update(event);
		}
	};
	
	//----------------------------------------------------
	
	var update = function (event) {
		mouse.updatePosition(event);
		updateTransformStyle(
		(mouse.y / inner.offsetHeight / 2).toFixed(2),
		(mouse.x / inner.offsetWidth / 2).toFixed(2)
		);
	};
	
	var updateTransformStyle = function (x, y) {
		console.log(x)
		var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
		inner.style.transform = style;
		// inner.style.webkitTransform = style;
		// inner.style.mozTranform = style;
		// inner.style.msTransform = style;
		// inner.style.oTransform = style;
	};
	
	//--------------------------------------------------------
	
	container.onmousemove = onMouseMoveHandler;
	container.onmouseleave = onMouseLeaveHandler;
}


)();