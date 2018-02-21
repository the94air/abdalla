import { TweenLite } from "gsap";

document.onmousemove = function(event) {
    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    let x = event.clientX / width - 0.5;
    let y = event.clientY / height - 0.5;

    TweenLite.to(document.querySelectorAll(".background"), 0.6, {
        rotationY: 5 * x,
        rotationX: 5 * y,
        ease: Power1.easeOut,
        transformPerspective: 1000,
        transformOrigin: "center"
    });
};

document.getElementById('show-date').innerHTML = new Date().getFullYear();
let coded = "MSr4zAHf@6hAHB.IOh";
let key = "K0D9GpJwh8WF7OqfsxCXy4dNlkSiEgLVavuQ2tcz1eBT5Hn6PUA3mbZMIoRrYj";
let shift=coded.length;
let i, ltr;
let to="";
for (i=0; i<coded.length; i++) {
    if (key.indexOf(coded.charAt(i))==-1) {
        ltr = coded.charAt(i)
        to += (ltr)
    }
    else {     
        ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
        to += (key.charAt(ltr))
    }
}
let ContactForm = document.getElementById('contact-from');
ContactForm.action = 'https://formspree.io/' + to;