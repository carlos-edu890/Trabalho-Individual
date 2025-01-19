




const card = document.getElementById("card");
const scrollLeft = document.getElementById("left");
const scrollRight = document.getElementById("right");

scrollLeft.addEventListener("click", () => {
  card.scrollBy({
    left: -200,
    behavior: "smooth",
  });
  console.log("scrollLeft");
});






function slider_carouselInit(){
  $('.owl-carousel.slider_carousel').owlCarousel({
      dots: false,
      loop: true,
      margin: 30,
      stagePadding: 2,
      autoplay: false,
      autoplayTimeout: 1500,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        760: {
          items: 2
        },
        992: {
          items: 5
        }
      }
  });
}

slider_carouselInit();





