import { useEffect } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
function BoxAnimate() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to("#wrapper",{
          scrollTrigger: {
            trigger: "#wrapper",
            // toggleActions: "restart pause reverse none ",
            marker: true,
            start: "top 100%", // top = le top de wrapper, 80% c a d que la position du scroller-start est top = 80%
            end: "top",
            scrub: true // #Effet fluide, vitesse par rapport au vitesse du scroll# epingle l'animation c a d  Si scroll vers le bas, l'animation avance ; si scroll vers le haut, l'animation recule
          },
          x: 601,
          rotation: 360,
          ease: "none",
          duration: 2,
        });
    
        // gsap.to("#wrapper2",{
        //   scrollTrigger: {
        //     trigger: "#wrapper2",
        //     // toggleActions: "restart pause reverse none ",
        //     markers: true,
        //     start: "top 80%", // top = le top de wrapper, 80% c a d que la position du scroller-start est top = 80%
        //     end: "top 100px",
        //     scrub: 2 // #Effet fluide, vitesse par rapport au vitesse du scroll# epingle l'animation c a d  Si scroll vers le bas, l'animation avance ; si scroll vers le haut, l'animation recule
        //   },
        //   x: 500,
        //   rotation: 360,
        //   ease: "none",
        //   duration: 2,
        // });
    }, []);
    return (
      <>          
      <div id="wrapper" />
      </>
    );
};
export default BoxAnimate;