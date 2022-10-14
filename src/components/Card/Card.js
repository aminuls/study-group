import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Card = (props) => {
   const {title, image, body, age, time, button} = props.card
   return (
      <div className="col">
         <div className="card h-100 text-dark border-warning">
            <img src={image} className="card-img-top" alt="images" style={{width: "100%", height: "200px", objectFit: "cover", objectPosition:"80% 10%"}} />
            <div className="card-body">
               <h5 className="card-title">{title}</h5>
               <p className="card-text">{body}</p>
               <h6>For Age: {age}</h6>
               <h6>Time required: {time}</h6>
            </div>
            <div className="d-flex justify-content-center pb-2">
               <button className="btn btn-info fw-semibold fs-5 px-5">{button}</button>
            </div>
         </div>
      </div>
   );
};

export default Card;
