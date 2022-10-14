import React from 'react';
import Break from '../Break/Break';
import Details from '../Details/Details';
import User from '../User/User';
import './UserDetails.css'

const UserDetails = () => {
   return (
      <div className="col-3 pt-4 userDetails" style={{backgroundColor: "#34353b"}}>
         <User></User>
         <Break></Break>
         <Details></Details>
      </div>
   );
};

export default UserDetails;