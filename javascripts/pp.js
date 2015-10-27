console.log("hello");

window.onload = function () {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    console.log(pswpElement);
    // build items array
    var items = [
        { src: 'images/tr/tr1.jpg', w: 360, h: 480 },
        { src: 'images/tr/tr2.jpg', w: 960, h: 720 },
        { src: 'images/tr/tr3.jpg', w: 960, h: 1280 },
        { src: 'images/tr/tr4.jpg', w: 1800, h: 1200 },
        { src: 'images/tr/tr5.jpg', w: 2048, h: 1152 },
        { src: 'images/tr/tr6.jpg', w: 540, h: 960 },
        { src: 'images/tr/tr7.jpg', w: 703, h: 469},
        { src: 'images/tr/tr8.jpg', w: 960, h: 643 },
        { src: 'images/tr/tr9.jpg', w: 2048, h: 1536 },
        { src: 'images/tr/tr10.jpg', w: 2048, h: 1536 },
    ];

    // define options (if needed)
    var options = {
        // optionName: 'option value'
        // for example:
        index: 0 // start at first slide
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};