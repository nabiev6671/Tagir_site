var catalogDropdown = (function () {

	var init = function () {
			_setUpListners();
		};

	var _setUpListners = function (){
      catalogParent.hover(hoverIn,hoverOut);
		};

  ///////////////////// Объявление переменных//////////////////
  var
    catalog = $('.catalog-dropdown'),
    disTop = catalog.parent().position().top,
    disLeft = catalog.parent().position().left,
    paretnWidth = catalog.parent().width(),
    navHeight = catalog.parents(".main-nav").height(),
    posTop = disTop + navHeight,
    posLeft = disLeft,
    catalogParent = catalog.parent();

  catalog.css({
    "left" : posLeft + "px",
    "top" : posTop + "px",
    "width" : paretnWidth + "px"
  });

  var hoverIn = function () {
    catalog.css({"visibility": "visible"});
  };
  var hoverOut = function () {
    catalog.css({"visibility": "hidden"});
  };

	return {
			init: init
		};

})();
