import React, { useState } from 'react';
import Break from '../Break/Break';
import Details from '../Details/Details';
import User from '../User/User';
import './UserDetails.css'

const UserDetails = (props) => {
   const {grandTotal} = props;
   const getItem = localStorage.getItem("Break");
   const gotTime = getItem ? JSON.parse(getItem) : 0;
   const [addBreak, setAddBreak] = useState(gotTime);
   const addBreakHandler = (time)=>{
      setAddBreak(time);
      localStorage.setItem("Break", time);
      
   }
   return (
      <div className="col-12 col-md-5 col-lg-4 col-xl-3 pt-4 userDetails d-md-block" id='userDetails' style={{backgroundColor: "#34353b"}}>
         <User></User>
         <Break addBreakHandler={addBreakHandler}></Break>
         <Details grandTotal={grandTotal} addBreak={addBreak}></Details>
      </div>
   );
};

export default UserDetails;