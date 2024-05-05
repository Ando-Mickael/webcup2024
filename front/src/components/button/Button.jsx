import React from "react";
function ButtonUI(props) {
  return (
    <div className="btn-ui">
      <button
        style={{
          background: props.backgroundColor,
          border: props.border,
          color: props.color,
          fontSize: props.fontSize,
          fontWeight: props.fontWeight,
          borderRadius: props.borderRadius,
          padding: props.padding
        
        }}
      >
        {props.btnNom}
      </button>
    </div>
  );
}

export default ButtonUI;
