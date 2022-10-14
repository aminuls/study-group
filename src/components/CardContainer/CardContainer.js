import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const CardContainer = () => {
   const [cards, setCards] = useState([]);
   useEffect(() => {
      fetch("FakeData.json")
         .then((res) => res.json())
         .then((data) => setCards(data));
   }, []);
   console.log(cards);
   return (
      <div>
         <div className="d-flex align-items-center gap-2">
            <img src="images/logo.png" alt="" style={{ width: "100px" }} />
            <h2 className="m-0" style={{fontFamily:"cursive"}}>STUDY GROUP</h2>
         </div>
         <h5 className="pt-3 pb-1">Select today's subject</h5>
         <div className="row row-cols-1 row-cols-md-3 g-4 col-9">
            {cards.map((card) => (
               <Card card={card}></Card>
            ))}
         </div>
      </div>
   );
};

export default CardContainer;
