import React from "react";
import Button from "./Button";

const Break = () => {
   return (
      <div className="me-5 mt-4">
         <h4 className="px-3">Add a Break</h4>
         <div className="row row-cols-1 row-cols-md-5 gap-2 mx-3 py-3 rounded justify-content-center" style={{ backgroundColor: "#282c34" }}>
            <Button time="5m"></Button>
            <Button time="10m"></Button>
            <Button time="15m"></Button>
            <Button time="20m"></Button>
            <Button time="25m"></Button>
         </div>
      </div>
   );
};

export default Break;
