const tl = gsap.timeline({})
function front() {
    tl.from(".brand , .main-nav > *",{
        y:-41,
        opacity:0,
        delay:1,
        duration:0.4,
        stagger:0.2,
        ease: "power2.out",
        scrub:2
    })
    tl.from(".hero-left > *",{
        x:-41,
        opacity:0,
        // delay:1,
        duration:0.4,
        stagger:0.2,
        ease: "power2.out",
        scrub:2
    })
    tl.from(".hero-right ",{
        x:41,
        opacity:0,
        // delay:1,
        duration:0.4,
        // stagger:0.2,
        ease: "power2.out",
        scrub:2
    })

}
// front()

const tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".partners",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 50%",
        scrub:2,
    }
})
tl2.from(".partners > * ",{
        y:41,
        opacity:0,
        // delay:1,
        duration:0.6,
        stagger:0.15,
        ease: "power2.out",
        scrub:2
})
tl2.from(".services-head > * ",{
        y:41,
        opacity:0,
        // delay:1,
        duration:0.5,
        stagger:0.25,
        ease: "power2.out",
        scrub:2
})

gsap.registerPlugin(ScrollTrigger);

const cardEls = document.querySelectorAll(".cards > *");

cardEls.forEach((el, i) => {
  const fromX = (i % 2 === 0) ? -160 : 160;   // left for even, right for odd

  // <-- make them hidden/offscreen right away -->
  gsap.set(el, { x: fromX, autoAlpha: 0 });

  // animate into place when scrolled
  gsap.to(el, {
    x: 0,
    autoAlpha: 1,
    duration: 2,
    stagger:0.5,
    scrub:2,
    ease: "power2.out",
    overwrite: true,
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      end: "top 60%",
      toggleActions: "play none none reverse",
      // markers: true // enable for debugging
    }
  });
});



// tl2.from(".cards > *",{
//      x:80,
//      duration:4,
//      opacity:0, 
//      stagger:1,
//      scrub:2

// })



// tl2.from(".card",{
//     x:80,
//     duration:1,
//     opacity:0
// })
// tl2.from(".card-dark",{
//     x:-80,
//     duration:1,
//     opacity:0
// })
// tl2.from(".card-2",{
//     x:80,
//     duration:1,
//     opacity:0
// })
// tl2.from(".card-dark-2",{
//     x:80,
//     duration:1,
//     opacity:0
// })







// gsap.registerPlugin(ScrollTrigger);
// /* SERVICE CARDS — animate left/right pairs when .cards enters view */
// gsap.from(".card", {
//   x: -60,              // smaller translate, less likely to overflow
//   autoAlpha: 0,
//   duration: 1,
//   ease: "power2.out",
//   stagger: 0.12,
//   scrub:2,
//   scrollTrigger: {
//     trigger: ".cards",
//     start: "top 50%",
//     end: "top 0%",
//     toggleActions: "play none none reverse",
//     markers: true
//   },
//   immediateRender: false
// });

// gsap.from(".card-dark", {
//   x: 60,
//   autoAlpha: 0,
//   duration: 0.8,
//   ease: "power2.out",
//   stagger: 0.12,
//   scrub:2,
//   scrollTrigger: {
//     trigger: ".cards",
//     start: "top 50%",
//     end: "top 0%",
//     toggleActions: "play none none reverse",
//     markers: true
//   },
//   immediateRender: false
// });

// /* other card variants */
// gsap.from(".card-dark-2", {
//   x: -40,
//   autoAlpha: 0,
//   duration: 0.8,
//   scrub:2,
//   ease: "power2.out",
//   scrollTrigger: { trigger: ".cards", start: "top 50%", end: "top 0%", toggleActions: "play none none reverse" },
  
// });
// gsap.from(".card-2", {
//   x: 40,
//   duration: 1,
//   scrub:2,
//   ease: "power2.out",
//   scrollTrigger: { trigger: ".cards", start: "top 50%", end: "top 0%", toggleActions: "play none none reverse" },
  
// });




