$(document).ready(function () {
  if ($("div").is(".partners")) {
    partnerSlider.init();
  }
  if ($("div").is(".certificate-img-wrap")) {
    certificate.init();
  }
  if ($("div").is(".big-slider")) {
    bigSlider.init();
  }
  catalogDropdown.init();
});
