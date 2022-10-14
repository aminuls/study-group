import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const User = () => {
   return (
      <div className="me-5">
         <div className="d-flex gap-2 px-3">
            <img className="rounded-circle" src="images/user.jpg" alt="User" style={{ width: "60px", height: "60px", objectFit: "cover", objectPosition: "100% 0%" }} />
            <div className="my-auto">
               <h4 className="m-0 font-mono" style={{color:"#61dafb"}}>Aminul Islam</h4>
               <p className="text-muted fw-semibold m-0">
                  <FontAwesomeIcon icon={faLocationDot} /> Habiganj, Bangladesh
               </p>
            </div>
         </div>
         <div className="row row-cols-1 row-cols-md-3 mt-4 mx-3 p-3 rounded justify-content-center" style={{backgroundColor:"#282c34"}}>
            <div className="col">
               <h4>75<small className="text-muted fs-6">kg</small></h4>
               <p className="fw-semibold text-muted mb-1">Weight</p>
            </div>
            <div className="col">
               <h4>6.5</h4>
               <p className="fw-semibold text-muted mb-1">Height</p>
            </div>
            <div className="col">
               <h4>25<small className="text-muted fs-6">yrs</small></h4>
               <p className="fw-semibold text-muted mb-1">Age</p>
            </div>
         </div>
      </div>
   );
};

export default User;
