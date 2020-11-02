//jsq .header-right > a --> apre hamburger menu nella vp
$(".header-right > a").click(function () {
  $(".hamburger-menu").show();
});

//jsq .close --> chiude hamburger menu nella vp
$(".close").click(function () {
  $(".hamburger-menu").hide();
});
