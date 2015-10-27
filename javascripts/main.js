console.log("hello");

window.onload = function () {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    console.log(pswpElement);
    // build items array
    var items = [
        { src: 'images/winnie1.jpg', w: 400, h: 600 },
        { src: 'images/dance.jpg', w: 600, h: 1200 },
        { src: 'images/oregon.jpg', w: 2048, h: 1536 },
        { src: 'images/bday.jpg', w: 960, h: 720 },
        { src: 'images/family.jpg', w: 2048, h: 1365 },
        { src: 'images/happy.jpg', w: 251, h: 320 },
        { src: 'images/family2.jpg', w: 2048, h: 1150 },
        { src: 'images/garba.jpg', w: 468, h: 468 },
        { src: 'images/lovesquish.jpg', w: 339, h: 480 },
        { src: 'images/uma.jpg', w: 921, h: 921 },
        { src: 'images/kitten.jpg', w: 1200, h: 900 },

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