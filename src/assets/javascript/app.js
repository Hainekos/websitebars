UIkit.util.on("#slider li", 'click', function () {
    UIkit.slideshow('#slideshow').show(this.getAttribute('uk-slideshow-item'));
});
UIkit.util.on("#slideshow", 'itemshow', function (a, b) {
    UIkit.slider("#slider").show(b.index);
});