// gsap.to('#box1',{
//     x: 500,
//     y: 200,
//     duration: 5,
//     // delay: 2,
//     rotate: "360deg",
//     // transform: 'translate(200px, 200px)',
//     borderRadius: '50%',
//     backgroundColor: 'blue',
//     // scrub:2,


// })
// gsap.from('#box2',{
//     x: 500,
//     duration: 5,
//     // delay: 2,
//     rotate: "360deg",
//     // transform: 'translate(200px, 200px)',
//     borderRadius: '50%',
//     backgroundColor: 'blue',
//     // scrub:2,
// })

// const tl = gsap.timeline();

// tl.to('#box1',{
//     x: 500,
//     y: 200,
//     duration: 5,
//     // delay: 2,
//     rotate: "360deg",
//     // transform: 'translate(200px, 200px)',
//     borderRadius: '50%',
//     backgroundColor: 'blue',
//     // scrub:2,


// })
// tl.from('#box2',{
//     x: 500,
//     duration: 5,
//     // delay: 2,
//     rotate: "360deg",
//     // transform: 'translate(200px, 200px)',
//     borderRadius: '50%',
//     backgroundColor: 'blue',
//     // scrub:2,
// })


const tl2 = gsap.timeline();

gsap.from('nav',{
    y: -200,
    opacity: 0,
    duration: 1,
    // ease: 'bounce',
})

tl2.from('nav .logo',{
    y: -200,
    opacity: 0,
    duration: 1,
    // ease: 'bounce',
})

tl2.from('nav li',{
    y: -100,
    opacity: 0,
    duration: 1,
    // ease: 'bounce',
    stagger:1,
})

tl2.from('nav button',{
    x: 100,
    opacity: 0,
    duration: 1,
    // ease: 'bounce',
})