import React from "react";

function IconUI(props) {
  return (
    <div className="icon-ui">
      <i
        className={props.iconNom}
        style={{
          backgroundColor: props.backgroundColor,
          border: props.border,
          color: props.color,
          width: props.width,
          height: props.height,
          fontSize: props.fontSize,
          transform: props.angle,
          borderRadius: props.borderRadius
        }}
      />
    </div>
  );
}

function Trait() {
  return <div className="trait" />;
}

function Circle() {
  return <div className="circle-gradient" />;
}

export { IconUI, Trait, Circle };
