import React from "react";
import ReactDOM from "react-dom/client";

// const HeaderComp = () => {
//   return (
//     <div>
//       <h1>Hello ! This is a functional component </h1>
//       <h2>This is heading 2 </h2>
//     </div>
//   );
// };

// same as above for arrow functions 

// a variable
const head1=<h1>Hello DOsto</h1>

const Head2=()=>(
    <h3>How are you</h3>
)
const Head3=()=>(
    <h3>You might be fine </h3>
)
const HeaderComp2 = () =>  (
    <div>
        {head1}
        <Head2/>
        {Head3()}
        {"Mera naam hai "}
      <h1>Hello ! This is a functional component </h1>
      <h2>This is heading 2 </h2>
    </div>
  );


const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<HeaderComp2/>);
