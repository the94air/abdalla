import { TweenLite } from "gsap";

window.$ = require('jquery');

$(document).mousemove(function(event) {
    var x = event.clientX / $(window).width() - 0.5;
    var y = event.clientY / $(window).height() - 0.5;

    TweenLite.to($(".background"), 0.6, {
        rotationY: 5 * x,
        rotationX: 5 * y,
        ease: Power1.easeOut,
        transformPerspective: 1000,
        transformOrigin: "center"
    });
});
