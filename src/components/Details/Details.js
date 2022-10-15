import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = (props) => {
   const {grandTotal, addBreak} = props;
   const notify = () => toast("Congratulations! You have completed your task 💕",{position: "top-center"});
   return (
      <div className="me-5 mt-4">
         <h4 className="px-3">Study Details</h4>
         <div className="d-flex mx-3 px-2 py-3 rounded justify-content-between" style={{ backgroundColor: "#282c34" }}>
            <h6 className='m-0'>Study time</h6>
            <p className='fw-semibold m-0'>{grandTotal} minute</p>
         </div>
         <div className="d-flex mt-2 mx-3 px-2 py-3 rounded justify-content-between" style={{ backgroundColor: "#282c34" }}>
            <h6 className='m-0'>Break time</h6>
            <p className='fw-semibold m-0'>{addBreak} minute</p>
         </div>
         <div className="d-flex mt-4 mx-3 rounded justify-content-between" style={{ backgroundColor: "#282c34" }}>
            <button className='w-100 btn btn-danger fs-5 fw-lighter' onClick={notify}>Activity Completed</button>
            <ToastContainer position="top-center"/>
         </div>
      </div>
   );
};

export default Details;