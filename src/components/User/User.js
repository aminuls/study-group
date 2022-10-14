import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const User = () => {
   return (
      <div className='d-flex gap-2'>
         <img className="rounded-circle" src="images/user.jpg" alt="User" style={{width:"60px", height:"60px", objectFit:"cover", objectPosition:"100% 0%"}} />
         <div className='my-auto'>
            <h4 className='m-0 font-mono'>Aminul Islam</h4>
            <p className='text-muted fw-semibold m-0'><FontAwesomeIcon icon={faLocationDot} /> Habiganj, Bangladesh</p>
         </div>
      </div>
   );
};

export default User;