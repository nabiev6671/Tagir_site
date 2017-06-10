var bigSlider = (function () {

	var init = function () {
      console.log("-------------");
      console.log("Модуль bigSlider подключен");
      console.log("-------------");
			_setUpListners();
      sliderSize();
      // sliderControl();
		};

  var _setUpListners = function (){
    setInterval(sliderControl,3000);

  };


  var
      bSlider = $('.big-slider'), // слайдер
      bSliderWidth = bSlider.width(), // ширина слайдера
      bSliderHeight = bSlider.height(), //высота слайдера
      img = bSlider.find('.big-slider_img'), // картинка
      imgNum = img.length, // количество картинок
      imgBox = bSlider.find('.big-slider_img-box'), // контейнер картинок
      display = bSlider.find('.big-slider_view'), // дисплей
      displayWidth = display.width(), //ширина дисплея
      displayHeight = display.height(),//высота дисплея
      shiftDir = 'left', // переменная для хранения направление шага сдвига
      allImgWidth = imgNum * displayWidth, // ширина контейнера картинок
      bSliderSpeed = 5000;

  var sliderSize = function () {
    img.css({
      'width' : displayWidth + 'px'
    });
  };


  var sliderControl = function () {

    if (shiftDir === 'left') {
      sliderChange('left');
    } else if (shiftDir === 'right') {
      sliderChange('right');
    }


  };

  var sliderChange = function (changeDir) {
    var
      posLeft = imgBox.position().left; // позиционирование контейнера для картинок относительно левого края



    if (posLeft < -allImgWidth + displayWidth * 3) {
      shiftDir = 'right';
    } else if (posLeft >= -displayWidth) {
      shiftDir = 'left';
    }

    if (changeDir === 'left') {
      console.log('Сдвиг влево');
      console.log('Положение уменьшилось до' + posLeft);
      console.log('======');
      imgBox.animate({
        left : posLeft - displayWidth
      },1000);
    } else if (changeDir === 'right') {
      console.log('Сдвиг вправо');
      console.log('Положение увеличелось до' + posLeft);
      console.log('======');
      imgBox.animate({
        left : posLeft + displayWidth
      },1000);
    }

  };




	return {
			init: init
		};

})();
