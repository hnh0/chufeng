var chufeng = window.chufeng || {};
(function () {
	chufeng = {
		gameInfo:[
			'<b>《萌三国》</b>经典页游的传承之作萌系手游|主公！你还在等什么？还不快来建立三国霸业！！！',
			'<b>《战争学院》</b>全球首款动态团战手游|百名LOL英雄悉数登场，数十名明星优倾情奉献，共同演绎全方位的视听盛宴。',
			'<b>《赛尔号星际跑酷》</b>奔跑吧赛尔号！|无限星际穿越，赛尔号星际跑酷今日上线。'
		],
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
		        	var info = chufeng.gameInfo[index - 1].split('|'),
		        		name = info[0],
		        		des = info[1];
		        	$('#game_icon').attr('src','img/game' + index + '.png');
		        	$('#game_name_txt').html('').html(name);
		        	$('#game_des_txt').html('').html(des);
		        }
		    });
		},
		openVedio: function () {
			$('.modal_backdrop, .modal_video').removeClass('hidden');
		},
		closeVedio: function () {
			$('.modal_backdrop, .modal_video').addClass('hidden');
		},
		swiperInit: function () {
			chufeng.swiperGameInit();
			chufeng.swiperImgInit();
		}
	};

	$('.video_btn').on('click', function () {
		chufeng.openVedio();
	});
	$('.modal_close').on('click', function () {
		chufeng.closeVedio();
	});
	$('.download_entry').on('click', function () {
		$(this).closest('.game_center_item').find('.download_wrap').removeClass('hidden');
	});
	$('.download_wrap').on('click', function () {
		$(this).addClass('hidden');
	});

	
})();







