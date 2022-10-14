import React from "react";

const Button = (props) => {
   return (
      <button className="col rounded-circle p-0 fw-bold border-0" style={{ height: "40px", width: "40px" }}>
         {props.time}
      </button>
   );
};

export default Button;
