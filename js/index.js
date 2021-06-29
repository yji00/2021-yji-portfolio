(function () {

	
	var elm = ".main";
	var scrollChk = true;
	var $section = $('.section');
	var sectionLast = $section.length - 1;
	var sectionIdx = 0;
	var $skew = $('.skew-wrapper');
	var $title = $('ul.skill-wrap');
  
  setInterval(function(){
    var time =  moment( new Date().getTime()).format('hh:mm')
    $('.time').text(time)
  },1000)

  
	
	// //개별적으로 Wheel 이벤트 적용
	// $section.on("mousewheel DOMMouseScroll", function (e) {
	// 	e.preventDefault();
	// 	if(scrollChk) {
	// 		scrollChk = false;
	// 		var delta = 0;
	// 		if (!event) event = window.event;
	// 		if (event.wheelDelta) {
	// 			delta = event.wheelDelta;
	// 			if (window.opera) delta = -delta;
	// 		}
	// 		else if (event.detail)
	// 			delta = -event.detail;
	// 		console.log(delta)
			
	// 		$section.each(function() {
	// 			$(this).css('z-index', 9);
	// 			$(this).css('transform', 'rotate(0)');
	// 		})
	// 		$section.eq(sectionIdx).css('z-index', 11);
			
	// 		if (delta < 0) { // 마우스휠을 위에서 아래로
	// 			sectionIdx = sectionIdx === sectionLast ? 0 : sectionIdx + 1;
	// 			$section.eq(sectionIdx).css('z-index', 10);
	// 			$(this).css('transform', 'rotate(-180deg)')
	// 		}
	// 		else { // 마우스휠을 아래에서 위로
	// 			sectionIdx = sectionIdx === 0 ? sectionLast : sectionIdx - 1;
	// 			$section.eq(sectionIdx).css('z-index', 10);
	// 			$(this).css('transform', 'rotate(180deg)')
	// 		}
	// 		setTimeout(function() {
				
	// 			scrollChk = true;
	// 		}, 2000);
	// 	}
	// });
	
	function mouse(e) {
	 var x = e.clientX;
	 var y = e.clientY;
	 var coor = 'Coordinates: (' + x + ',' + y + ')';
	 //console.log(coor);
	 //console.log($skew);
	 $skew.css('transform', 'perspective(' + x * 0.1 + 'px)');
	}
	
	$('.black-wrapper').mousemove(mouse);
	
	
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

		$('.skill-desc').removeClass('active')
		setTimeout(function () {
			$('.skill-desc').addClass('active')
		}, 500)
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
	
	$title.find('li').mouseenter(onSkillClick);


  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
	  breakpoints : {
		  '767': { slidesPerView: 1, spaceBetween: 30 },
		  '991': { slidesPerView: 3, spaceBetween: 30 },
	  },
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    keyboard: {
      enabled: true,
    },
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
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

	$('.button').click(function(){
		$('.button').removeClass('active')
		$(this).addClass('active')
	})



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