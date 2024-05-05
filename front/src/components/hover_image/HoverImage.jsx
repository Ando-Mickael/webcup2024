import dataImg from "../image/DataImg";
function ImageHover() {
  return (
    <div className="container-image">
      <svg
        width="400"
        height="400"
        viewBox="0 0 220 220"
        xmlns="https://www.w3.org/TR/2018/CR-SVG2-20181004/"
      >
        <filter id="heat">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.05"
            numOctaves="2"
            result="turbulence"
          />
          <feDisplacementMap
            in2="turbulence"
            in="SourceGraphic"
            scale="50"
            xChannelSelector="R"
            yChannelSelector="G"
            
          />
            {dataImg.map((img1) => (
                <img key={img1.id} src={img1.img1} id="image"/>
            ))}
        </filter>
      </svg>
    </div>
  );
};

export default ImageHover;
