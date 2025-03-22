var heroIcon = document.querySelector("#hero-icon")

 gsap.to(heroIcon, {
    scrollTrigger:
    {
        trigger: heroIcon,
        start: ' 30% top', 
        end: '20% top', 
        scrub: 4, 
        pin:true,
      
    },
    opacity:0,
});

// gsap.fromTo('#action-button',{ x : -300},{
//     scrollTrigger:
//     {
//         trigger: '#action-button',
//         start: ' 30% top', 
//         end: '20% top', 
//         scrub: 4, 
//         pin:true,
//         markers: true,
//     },
//     x:0,
// });