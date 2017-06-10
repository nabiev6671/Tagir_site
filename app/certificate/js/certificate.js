var certificate = (function () {
	var init = function () {
      _setUpListners();
		};
	var _setUpListners = function (){
      certificatImg.click(popurOn);
      popupClose.click(popupClosefunc);
		};

  ///////////////////// Объявление переменных//////////////////
  var
      doc = $(document),
      certificatGall = doc.find(".certificate-gallery"),
      popupClose = doc.find(".popup-close"),
      certificatImg = certificatGall.find(".certificate-img"),
      popup = doc.find(".popup-gallery"),
      popupImg = popup.find('.popup-img'),
      imgSrc;


  var popurOn = function () {
    popupImg.attr("src", $(this).attr("src"));
    popup.fadeIn("slow");
  };

  var popupClosefunc = function () {
    popup.fadeOut("slow");
  };

  return {
			init: init
		};

})();
