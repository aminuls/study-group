import React from 'react';
import Break from '../Break/Break';
import Details from '../Details/Details';
import User from '../User/User';
import './UserDetails.css'

const UserDetails = () => {
   return (
      <div className="col-12 col-md-5 col-lg-4 col-xl-3 pt-4 userDetails d-md-block" id='userDetails' style={{backgroundColor: "#34353b"}}>
         <User></User>
         <Break></Break>
         <Details></Details>
      </div>
   );
};

export default UserDetails;