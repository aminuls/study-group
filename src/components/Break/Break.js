import React from "react";
import Button from "./Button";

const Break = (props) => {
   const {addBreakHandler} = props;
   return (
      <div className="me-5 mt-4">
         <h4 className="px-3">Add a Break</h4>
         <div className="row row-cols-1 row-cols-md-5 gap-2 mx-3 py-3 rounded justify-content-center" style={{ backgroundColor: "#282c34" }}>
            <Button time="5" addBreakHandler={addBreakHandler}></Button>
            <Button time="10" addBreakHandler={addBreakHandler}></Button>
            <Button time="15" addBreakHandler={addBreakHandler}></Button>
            <Button time="20" addBreakHandler={addBreakHandler}></Button>
            <Button time="25" addBreakHandler={addBreakHandler}></Button>
         </div>
      </div>
   );
};

export default Break;
