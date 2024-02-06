var tl=gsap.timeline();
tl.from("#nav h3",{
    y:-40,
    opacity:0,
    duration:.6,
    delay:0.4,
    stagger:0.4
})
tl.from("#main h1",{
    x:-500,
    opacity:0,
    duration:0.5,
    stagger:1
})

tl.from("img",{
    x:100,
    rotate:45,
    opacity:0,
    duration:0.7,
    stagger:0.3

})