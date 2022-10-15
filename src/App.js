// import logo from './logo.svg';
import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CardContainer from "./components/CardContainer/CardContainer";
import UserDetails from "./components/UserDetails/UserDetails";


function App() {
   const [totalTime, setTotalTime] = useState(0);
   const addedList = (time)=>{
      setTotalTime(totalTime + time)
   }
   return (
      <div className="App col d-flex gap-5 overflow-hidden justify-content-center justify-content-md-start">
         <CardContainer addedList={addedList}></CardContainer>
         <UserDetails grandTotal={totalTime}></UserDetails>
      </div>
   );
}

export default App;
