var elem = document.querySelector('.img');
var msnry = new Masonry( elem,  {
// options
itemSelector: '.grid-item',
columnWidth: 230,
gutter:20,

isFitWidth: true
});