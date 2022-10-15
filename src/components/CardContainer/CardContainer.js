import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import './CardConatainer.css'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";

const CardContainer = (props) => {
   const {addedList} = props;
   const [cards, setCards] = useState([]);
   useEffect(() => {
      fetch("FakeData.json")
         .then((res) => res.json())
         .then((data) => setCards(data));
   }, []);
   const menuToggle=()=>{
      const menuIcon = document.getElementById("menuIcon");
      const userDetails = document.getElementById("userDetails");
      const ic1 = document.getElementById("ic1");
      const ic2 = document.getElementById("ic2");
      userDetails.classList.toggle("d-block");
      menuIcon.classList.toggle("position-fixed");
      ic1.classList.toggle("d-none");
      ic2.classList.toggle("d-block")
   }
   
   return (


      <div className="col-11 col-md-7 ms-md-3 col-lg-8 col-xl-9 mt-4 mb-5">
         <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
               <img src="images/logo.png" alt="" style={{ width: "100px" }} />
               <h2 className="m-0 d-none d-md-block" style={{ fontFamily: "cursive" }}>
                  STUDY GROUP
               </h2>
            </div>
            <div className="d-md-none" id="menuIcon" onClick={menuToggle} style={{zIndex:"1", right:"17px"}}>
            <FontAwesomeIcon icon={faBarsStaggered} className="display-4" id="ic1" style={{transform:"rotate(180deg)"}}/>
            <FontAwesomeIcon icon={faXmark} className="display-4" id="ic2"/>
            </div>
         </div>
         <h5 className="pt-3 pb-1">Select today's subject</h5>
         <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {cards.map((card) => (
               <Card card={card} addedList={addedList}></Card>
            ))}
         </div>
      </div>
   );
};

export default CardContainer;
