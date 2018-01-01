import { TweenLite } from "gsap";

document.onmousemove = function(event) {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var x = event.clientX / width - 0.5;
    var y = event.clientY / height - 0.5;

    TweenLite.to(document.querySelectorAll(".background"), 0.6, {
        rotationY: 5 * x,
        rotationX: 5 * y,
        ease: Power1.easeOut,
        transformPerspective: 1000,
        transformOrigin: "center"
    });
};
