
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
    elem.addEventListener('mousemove', function (detls) {
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power2.out,
            duration: 0.3,
            x: detls.clientX - elem.getBoundingClientRect().left - image.width / 2,
            y: detls.clientY - elem.getBoundingClientRect().top - image.height / 2,
        });
    });

    // elem.addEventListener('mouseleave', function () {
    //     gsap.to(image, {
    //         opacity: 0,
    //         duration: 0.3
    //     });
    // });
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