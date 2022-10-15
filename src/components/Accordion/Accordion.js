import Accordion from "react-bootstrap/Accordion";

function Accord() {
   return (
      <div className="col-11 col-md-7 ms-md-3 col-lg-8 col-xl-9 mt-4 mb-5">
         <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
               <Accordion.Header>How does React works?</Accordion.Header>
               <Accordion.Body>
                  React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and
                  render just the right component when your data changes.
               </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
               <Accordion.Header>Tell the differences between props and state?</Accordion.Header>
               <Accordion.Body>
                  Props are known as properties it can be used to pass data from one component to another. Props are passed via component properties, they're not reactive. Props cannot be modified, read-only, and Immutable.<br/> The state represents parts of an Application that can change. Each component can have its State. State are variables that react will react , updating the UI when values changes. The state is Mutable and It is local to the component only.
               </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
               <Accordion.Header>When we use useEffect except data loading?</Accordion.Header>
               <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               </Accordion.Body>
            </Accordion.Item>
         </Accordion>
      </div>
   );
}

export default Accord;
