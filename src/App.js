// import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CardContainer from "./components/CardContainer/CardContainer";
import UserDetails from "./components/UserDetails/UserDetails";


function App() {
   return (
      <div className="App col d-flex gap-5 overflow-hidden justify-content-center justify-content-md-start">
         <CardContainer></CardContainer>
         <UserDetails></UserDetails>
      </div>
   );
}

export default App;
