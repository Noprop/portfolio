const app = {};

app.eventListeners = function () {
  console.log('test');
  $(".grid-gallery li").on("mouseenter mouseleave ", (e) => {
    // console.log('test');
    // console.log(e.target);
    // console.log($(e.target));
    // const element = $(e.target);
    // element.toggleClass('test')
    console.log('it works');
  })
  // $(".grid-gallery li").on("click", () => {
  //   console.log('test');
  //   $(".slideshow").toggleClass("slideshow-open");
  // })
}

// $("li").on("click", () => {
//   console.log('test');
//   $(".slideshow").toggleClass("slideshow-open");
// })

$(function () {
  app.eventListeners();
});

