var partnerSlider = (function () {
	var init = function () {
			_setUpListners();
      _sliderPosChange('left');
		};
	var _setUpListners = function (){

		};

  ///////////////////// Объявление переменных//////////////////
  var
      pSlider = $(".partners-slider"),
      display = pSlider.find(".partners-slider_view"),
      imgConteiner = display.find(".partners-slider_img-container"),
      imgList = imgConteiner.find(".partners-slider_img-list"),
      displayWidth = display.width(), // ширина видимосй части
      imgConteinerWidth = imgConteiner.width(), // ширина контейнера для картинок
      dir,  // В эту переменную записывается направление
      sliderPos = imgConteiner.position().left, // позиция контейнера со списком рисунков относитьно левого края
      sliderEnd = sliderPos - imgConteinerWidth, // записываем конечную позицию слайдера относительно левого края
      listNum = imgList.length, // количество слайдов
      imgListWidth = imgList.width(), // ширина одного слайда
      allImgListWidth = imgListWidth * listNum, // ширина всех слайдов
      sliderSpeed = 50000; // скорость перемещения слайдера

  var _sliderPosChange = function (dir) {
    if (dir === 'left') {
      imgConteiner.animate({
        left: - allImgListWidth + imgListWidth
      }, sliderSpeed, 'linear', function () {
        _sliderPosChange('right');
      });
    } else if (dir === 'right'){
      imgConteiner.animate({
        left: 0
      }, sliderSpeed,'linear', function () {
        _sliderPosChange('left');
      });
    }

  };

	return {
			init: init
		};

})();
