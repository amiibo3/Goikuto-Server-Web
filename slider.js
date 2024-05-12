document.addEventListener("DOMContentLoaded", () => {
  document.getElementByClassName("slider").slick({
    autoplay: true, 
    dots: true, 
    centerMode: true, 
    centerPadding: '0px', 
    slidesToShow: 3, 
  });
});