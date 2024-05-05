import { gsap, Flip } from "gsap/all";
import { useEffect } from "react";
function FitFlip() {
  useEffect(() => {
    gsap.registerPlugin(Flip);
  }, []);
  const handleClick = () => {
    Flip.fit(".container-other", ".container-target", {
      scale: true,
      duration: 2,
      ease: "power.inOut"
    });
  };
  return (
    <div className="container-flip">
      <div onClick={handleClick} className="container-target">
        <h1>Target</h1>
      </div>
      <div className="container-other">
        <p>Item1</p>
        <p>Item2</p>
      </div>
    </div>
  );
}
export default FitFlip;
