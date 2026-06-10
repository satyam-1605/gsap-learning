gsap.registerPlugin(ScrollTrigger);

gsap.to(".box1", {
    rotate: 360,
    duration: 3,
    backgroundColor: "red",
});

gsap.to(".box2", {
    rotate: 360,
    duration: 2,
    backgroundColor: "white",
    scrollTrigger: {
        trigger: ".section2",
        start: "top center",
        end: "buttom top",
        markers: true,
        scrub: true,
        
    },
});

gsap.to(".box3", {
    rotate: 360,
    duration: 2,
    backgroundColor: "white",
    scrollTrigger: {
        trigger: ".section2",
        start: "40%",
        end: "buttom top",
        markers: true,
        
    },
});