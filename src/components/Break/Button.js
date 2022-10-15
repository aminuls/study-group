import React from "react";
const Button = (props) => {
   const { time, addBreakHandler } = props;

   return (
      <button className="col rounded-circle p-0 fw-bold border-0" style={{ height: "40px", width: "40px" }} onClick={() => addBreakHandler(time)}>
         {time}m
      </button>
   );
};

export default Button;
