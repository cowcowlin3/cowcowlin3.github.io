$(document).ready(function() {
   $("#product_slick").slick();
   $("#news_slick").slick({
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

   x=$('#navbar').on('activate.bs.scrollspy', function () {
       var activeSection = $(this).find("li.active a").attr("href");

       //if (activeSection == "#contact ")
       //{
        //  console.log(activeSection);
       //}
   });


   $('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

});

function funOpenNews(sDivId) {
	$.fancybox.open({
    src: "#" + sDivId,
    smallBtn : false,
    toolbar  : true,
		width:  1024,
		height: 1024,
		autoSize: false,
		fitToView : true,
		padding: 20,
		margin: 30
	});	 
}