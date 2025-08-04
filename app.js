
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circleMouseFollower() {
    window.addEventListener("mousemove", function (det) {
        document.querySelector('.miniCircle').style.transform = `translate(${det.clientX}px, ${det.clientY}px)`;
    });
}


function webAnimation() {
    let tl = gsap.timeline();

    tl.from('.nav', {
        y: '20',
        opacity: 0,
        duration: 2,
        ease: Expo.easeInOut,
    })

    tl.to('.boundingele', {
        y: '0',
        ease: Expo.easeInOut,
        duration: 1.5,
        stagger: .2,
        delay: -1


    })

    tl.from('.heroFooter', {
        ease: Expo.easeInOut,
        opacity: 0,
        duration: 1.5,
        delay: -1
    })
}
circleMouseFollower();
webAnimation();