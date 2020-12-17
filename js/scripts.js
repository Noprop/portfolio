const app = {};

app.eventListeners = function () {
  // cool hover effect for each project (not the slideshow, just the grid)
  // hoverdir is hover direction
  const gridItems = $(".grid li figure");
  for (let i = 0; i < gridItems.length; i++) {
    $(gridItems[i]).hoverdir();
  }
}

$(function () {
  app.eventListeners();
  if ($('.grid').length) {
    new CBPGridGallery( document.getElementById( 'grid-gallery' ) );
  }
});

