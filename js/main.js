var chufeng = window.chufeng || {};
(function () {
	chufeng = {
		swiperGameInit: function() {
			var self = this;
			var swiper = new Swiper('.game_list', {
		        direction: 'vertical',
		        autoplay: 3000,
		        autoHeight: true,
		        loop: true
		    });
		},
		swiperImgInit: function () {
			var swiper = new Swiper('.img_list', {
		        pagination: '.swiper-pagination',
		        paginationClickable: true,
		        direction: 'horizontal',
		        autoplay: 5000,
		        loop: true,
		        onSlideChangeStart: function (res) {
		        	var index = res.activeIndex % 3;
		        	if(index === 0){
		        		index = 3
		        	}
		        	$('.img_info_wrap').addClass('hidden');
		        	$('#img_info_' + index).removeClass('hidden');
		        }
		    });
		},
		openVideo: function () {
			$('.modal_backdrop, .modal_video').removeClass('hidden');
		},
		closeVideo: function () {
			$('.modal_backdrop, .modal_video').addClass('hidden');
		},
		swiperInit: function () {
			chufeng.swiperGameInit();
			chufeng.swiperImgInit();
		}
	};

	$('.video_btn').on('click', function () {
		chufeng.openVideo();
	});
	$('.modal_close').on('click', function () {
		chufeng.closeVideo();
	});
	$('.download_entry').on('click', function () {
		$(this).closest('.game_center_item').find('.download_wrap').removeClass('hidden');
	});
	$('.download_wrap').on('click', function () {
		$(this).addClass('hidden');
	});

	
})();







