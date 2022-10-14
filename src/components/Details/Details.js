import React from 'react';

const Details = () => {
   return (
      <div className="me-5 mt-4">
         <h4 className="px-3">Exercise Details</h4>
         <div className="d-flex mx-3 px-2 py-3 rounded justify-content-between" style={{ backgroundColor: "#282c34" }}>
            <h6 className='m-0'>Exercise time</h6>
            <p className='fw-semibold m-0'>{}200 minute</p>
         </div>
         <div className="d-flex mt-2 mx-3 px-2 py-3 rounded justify-content-between" style={{ backgroundColor: "#282c34" }}>
            <h6 className='m-0'>Break time</h6>
            <p className='fw-semibold m-0'>{}15 minute</p>
         </div>
         <div className="d-flex mt-4 mx-3 rounded justify-content-between" style={{ backgroundColor: "#282c34" }}>
            <button className='w-100 btn btn-danger fs-5 fw-lighter'>Activity Completed</button>
         </div>
      </div>
   );
};

export default Details;