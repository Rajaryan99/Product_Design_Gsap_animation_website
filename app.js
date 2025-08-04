
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


let timer;
function skweCircle() {
    clearTimeout(timer);
    let xScale = 1;
    let yScale = 1;

    let xPrev = 0;
    let yPrev = 0;

    window.addEventListener("mousemove", function (dets) {
        xScale = gsap.utils.clamp(.8, 1.2, dets.clientX - xPrev);
        yScale = gsap.utils.clamp(.8, 1.2, dets.clientY - yPrev);

        xPrev = dets.clientX;
        yPrev = dets.clientY;



        circleMouseFollower(xScale, yScale);
        timer = setTimeout(function () {
            document.querySelector('.miniCircle').style.transform = `translate(${det.clientX}px, ${det.clientY}px) scale(1, 1)`;

        }, 100)
    });
}

skweCircle();

function circleMouseFollower(xScale, yScale) {
    window.addEventListener("mousemove", function (det) {
        document.querySelector('.miniCircle').style.transform = `translate(${det.clientX}px, ${det.clientY}px) scale(${xScale},${yScale})`;
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