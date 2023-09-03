import { gsap } from "gsap";

//THIS IS THE PRELOAD ANIMATION THAT EXPANDS THE NAV BAR. DYNAMIC ISLAND CONCEPT
export const dynamicAnimation = () => {
    const btn = document.querySelector('.btn');

    const tl = gsap.timeline({paused:true, reversed:true});
    let screenSize = gsap.matchMedia();

    //for desktop screens
    screenSize.add("(min-width:1000px)", () => {
        tl.to('.mask', {clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration:1.2, ease:'power3.inOut'})
        tl.to(btn, {top:'10%', left:'37%', borderRadius:'35px', duration:1, ease:'power3.in'})
        tl.to('.overlay', {display:"none", duration:1, ease:'power3.in'}, '<')
        tl.to('.nav-bar', {width:'650px', duration:.65, ease:'power3.inOut'}, '<.74')
        tl.to('.menu-btn', {scale:1, duration:.5, ease:'power3.inOut'}, '<')
        tl.to('.dot', {width:'30px', height:'10px', duration:.7, ease:'power3.inOut'}, '<')
        tl.to('.nav-bar', {width:'500px', duration:.65, ease:'power3.inOut'}, '<.74')
        tl.to('.dot', {width:'10px', height:'10px', duration:.7, ease:'power3.inOut'}, '<')
    })

    //fot smaller screens
    screenSize.add("(max-width:999px)", () => {
        tl.to('.mask', {clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration:1.2, ease:'power3.inOut'})
        tl.to(btn, {top:'10%', left:'22%', borderRadius:'35px', duration:1, ease:'power3.in'})
        tl.to('.overlay', {display:"none", duration:1, ease:'power3.in'}, '<')
        tl.to('.nav-bar', {width:'90%', duration:.65, ease:'power3.inOut'}, '<.74')
        tl.to('.menu-btn', {scale:1, duration:.5, ease:'power3.inOut'}, '<')
        tl.to('.dot', {width:'30px', height:'10px', duration:.7, ease:'power3.inOut'}, '<')
        tl.to('.nav-bar', {width:'80%', duration:.65, ease:'power3.inOut'}, '<.74')
        tl.to('.dot', {width:'10px', height:'10px', duration:.7, ease:'power3.inOut'}, '<')
    })

    btn.addEventListener('click', () => {
        tl.reversed() ? tl.play() : tl.reverse();
    })
}

//FOR MENU ANIMATION
export const menuAnimation = () => {
    const menuBtn = document.querySelector('.menu-btn');
    const closeBtn = document.querySelector('.close-btn');

    const tl = gsap.timeline({paused:true, reversed:true});
    let screenSize = gsap.matchMedia();

    //ANIMATIONS FOR DESKTOP SCREENS
    screenSize.add("(min-width:1000px)", () => {
        tl.to('.nav-bar', {width:'400px', duration:.7, ease:'power3.inOut'},'-=.185')
        tl.to('.btn', {x:25, duration:.5, ease:'power3.inOut'}, '<')
        tl.to('.dot', {width:'5px', height:'5px', duration:.7, ease:'power3.inOut'}, '<')
        tl.to('.nav-bar', {width:'500px', duration:.7, ease:'power3.inOut'})
        tl.to('.dot', {width:'30px', height:'10px', duration:.7, ease:'power3.inOut'}, '<')
        tl.to('.about', {left:'23%', scale:1, duration:.8, ease:'power3.inOut'}, '<')
        tl.to('.works', {right:'23%', scale:1, duration:.8, ease:'power3.inOut'}, '<')
    })

    //for smaller screens
    screenSize.add("(max-width:999px)", () => {
        tl.to('.nav-bar', {width:'60%', duration:.7, ease:'power3.inOut'},'<')
        tl.to('.btn', {x:25, duration:.5, ease:'power3.inOut'}, '<')
        tl.to('.dot', {width:'5px', height:'5px', duration:.7, ease:'power3.inOut'}, '<')
        tl.to('.nav-bar', {width:'80%', duration:.7, ease:'power3.inOut'})
        tl.to('.dot', {width:'10px', height:'10px', duration:.7, ease:'power3.inOut'}, '<')
        tl.to('.clip-circle-menu', {clipPath:"circle(100% at 50% 10%)", duration:.7, ease:'power3.inOut'}, '<.2')
        tl.to('.clip-circle-menu', {clipPath:"circle(100%)", duration:.7, ease:'power3.inOut'},'<.4')
        tl.from(".menu-links", {y:100, duration:.65, ease:"power2.out", stagger: {
            amount:.2
        }}, '<')
    })

    menuBtn.addEventListener('click', () => {
        if(tl.reversed()) {
            menuBtn.textContent = 'close';
            tl.play();
        }else {
            menuBtn.textContent = 'menu';
            tl.reverse();
        }
    })

    closeBtn.addEventListener('click', () => {
        if(tl.reversed()) {
            tl.play();
        }else {
            menuBtn.textContent = 'menu';
            tl.reverse();
        }
    })
}

//THIS IS FOR THE TORCH LIGHT SHADOW EFFECT ON HERO SECTION
export const shadow = () => {
    const circle = document.querySelector('.circle');
    const container = document.querySelector('.container');

    container.addEventListener('pointermove', (event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - bounds.left;
        const y = event.clientY - bounds.top;
      
        circle.animate({
          left: `${x}px`,
          top: `${y}px`
        }, {
          duration: 3,
          fill: 'forwards'
        })
    }) 
}

//CREDITS POP UP ANIMATION
export const creditsAnimation = () => {
    const creditsBtn = document.querySelector('.credits-btn');
    const creditsBtnMobile = document.querySelector('.credits-btn-mobile');
    const closeCredits = document.querySelector('.close-credits');

    const tl = gsap.timeline({paused:true, reversed:true});
    let screenSize = gsap.matchMedia();

    //animation for Desktop screens
    screenSize.add("(min-width:1000px)", () => {
        tl.to('.nav-bar', {width:'400px', duration:.7, ease:'power3.inOut'},'<')
        tl.to('.btn', {x:25, duration:.5, ease:'power3.inOut'}, '<')
        tl.to('.dot', {width:'5px', height:'5px', duration:.7, ease:'power3.inOut'}, '<')
        tl.to('.nav-bar', {width:'500px', duration:.7, ease:'power3.inOut'})
        tl.to('.dot', {width:'10px', height:'10px', duration:.7, ease:'power3.inOut'}, '<')
        tl.to('.clip-circle-credits', {clipPath:"circle(100% at 50% 10%)", duration:.7, ease:'power3.inOut'}, '<.2')
        tl.to('.clip-circle-credits', {clipPath:"circle(100%)", duration:.7, ease:'power3.inOut'},'<.4')
        tl.from('.credits-container', {opacity:0, y:100, duration:.85, ease:'power2.out'}, "<.2")

    });

    //animation for smaller screens
    screenSize.add("(max-width:999px)", () => {
        tl.to('.nav-bar', {width:'60%', duration:.7, ease:'power3.inOut'},'<')
        tl.to('.btn', {x:25, duration:.5, ease:'power3.inOut'}, '<')
        tl.to('.dot', {width:'5px', height:'5px', duration:.7, ease:'power3.inOut'}, '<')
        tl.to('.nav-bar', {width:'80%', duration:.7, ease:'power3.inOut'})
        tl.to('.dot', {width:'10px', height:'10px', duration:.7, ease:'power3.inOut'}, '<')
        tl.to('.clip-circle-credits', {clipPath:"circle(100% at 50% 10%)", duration:.7, ease:'power3.inOut'}, '<.2')
        tl.to('.clip-circle-credits', {clipPath:"circle(100%)", duration:.7, ease:'power3.inOut'},'<.4')
        tl.from('.credits-container', {opacity:0, y:100, duration:.85, ease:'power2.out'}, "<.2")

    });

    creditsBtn.addEventListener('click', () => {
        tl.reversed() ? tl.play() : tl.reverse();
    });

    creditsBtnMobile.addEventListener('click', () => {
        tl.reversed() ? tl.play() : tl.reverse();
    });

    closeCredits.addEventListener('click', () => {
        tl.reversed() ? tl.play() : tl.reverse();
    });
};

//CONTACT POP UP ANIMATION
export const contactAnimation = () => {
    const contactBtn = document.querySelector('.contact-btn');
    const closeContactBtn = document.querySelector('.close-contact-btn');

    const tl = gsap.timeline({paused:true, reversed:true});
    let screenSize = gsap.matchMedia();

    //for Desktop screens
    screenSize.add("(min-width:1000px)", () => {
        tl.to('.nav-bar', {width:'400px', duration:.7, ease:'power3.inOut'},'<')
        tl.to('.btn', {x:25, duration:.5, ease:'power3.inOut'}, '<')
        tl.to('.dot', {width:'5px', height:'5px', duration:.7, ease:'power3.inOut'}, '<')
        tl.to('.nav-bar', {width:'500px', duration:.7, ease:'power3.inOut'})
        tl.to('.dot', {width:'10px', height:'10px', duration:.7, ease:'power3.inOut'}, '<')
        tl.to('.contact-pop-up', {clipPath:"circle(100% at 50% 10%)", duration:.7, ease:'power3.inOut'}, '<.2')
        tl.to('.contact-pop-up', {clipPath:"circle(100%)", duration:.7, ease:'power3.inOut'},'<.4')
        tl.from('.slide-up', {opacity:0, y:100, duration:.65, ease:'power2.out', stagger: {
            amount:0.3
        }}, "<.2")
        tl.from('.slide-up-2', {opacity:0, y:100, duration:.65, ease:'power2.out', stagger: {
            amount:0.6
        }}, "<.2")

    });

    //for smaller screens
    screenSize.add("(max-width:999px)", () => {
        tl.to('.nav-bar', {width:'60%', duration:.7, ease:'power3.inOut'},'<')
        tl.to('.btn', {x:25, duration:.5, ease:'power3.inOut'}, '<')
        tl.to('.dot', {width:'5px', height:'5px', duration:.7, ease:'power3.inOut'}, '<')
        tl.to('.nav-bar', {width:'80%', duration:.7, ease:'power3.inOut'})
        tl.to('.dot', {width:'10px', height:'10px', duration:.7, ease:'power3.inOut'}, '<')
        tl.to('.contact-pop-up', {clipPath:"circle(100% at 50% 10%)", duration:.7, ease:'power3.inOut'}, '<.2')
        tl.to('.contact-pop-up', {clipPath:"circle(100%)", duration:.7, ease:'power3.inOut'},'<.4')
        tl.from('.slide-up', {opacity:0, y:100, duration:.65, ease:'power2.out', stagger: {
            amount:0.3
        }}, "<.2")
        tl.from('.slide-up-2', {opacity:0, y:100, duration:.65, ease:'power2.out', stagger: {
            amount:0.6
        }}, "<.2")

    });


    contactBtn.addEventListener('click', () => {
        tl.reversed() ? tl.play() : tl.reverse();
    });

    closeContactBtn.addEventListener('click', () => {
        tl.reversed() ? tl.play() : tl.reverse();
    });
}

//PAGE TRANSITION ANIMATION
export const pageTransitionAnimation = () => {
    const tl = gsap.timeline();

    tl.from('.blocks', {y:'100%', duration:.7, ease:'power3.easeinOut', stagger: {
        amount:0.3
    }})
      .to('.blocks', {y:'-100%', duration:.7, ease:'power3.easeinOut', stagger: {
        amount:-0.3
    }}, '+=.5')
    .to('.transition-container', {display:'none'}, '<.5')
}