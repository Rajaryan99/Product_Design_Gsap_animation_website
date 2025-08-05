
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
        // timer = setTimeout(function () {
        //     document.querySelector('.miniCircle').style.transform = `translate(${detail.clientX}px, ${detail.clientY}px) scale(1, 1)`;

        // }, 100)
    });
}
skweCircle();

// function Circle() {
//     let xScale = 1;
//     let yScale = 1;

//     let Xpre = 0;
//     let Ypre = 0;

//   

//         Xpre = del.clientX;
//         Ypre = del.clientY;


//     })
// }






document.querySelectorAll('.elem').forEach(function (elem) {

    let rotate = 0;
    let diffroot = 0;
    elem.addEventListener('mousemove', function (detls) {
        let topDiff = detls.clientY - elem.getBoundingClientRect().top;
        // let leftDiff = detls.clientX - elem.getBoundingClientRect().left;
        diffroot = detls.clientY - rotate;
        rotate = detls.clientX;
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power1,
            top: topDiff,
            left: detls.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffroot),

        });
    });

    elem.addEventListener('mouseleave', function () {
        gsap.to(elem.querySelector('img'), {
            opacity: 0,
        });
    });
});


function circleMouseFollower(xScale, yScale) {
    window.addEventListener("mousemove", function (detail) {
        document.querySelector('.miniCircle').style.transform = `translate(${detail.clientX}px, ${detail.clientY}px) scale(${xScale},${yScale})`;
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