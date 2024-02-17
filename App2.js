import React from "react";
import ReactDOM from "react-dom/client";


// if we use curly brackets in function we need to do return 
//  for one line code ,use no brackets
// if we use round brackets for multiline code , no need to return 


// both fn1 and fn2 are same
// const fn1=()=>true
// const fn2=()=>{
//   return true
// }


// ?    Method1 => Functional component
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

//React element like a normal variable
const head5=(
  <div>
  <h1>Hello Yaaro</h1>
  <h2>Why </h2>
  </div>
)


//  Method2=>React element
const head1=<h1>Hello DOsto</h1>
const head4=<div>
  <h2>What's up bro</h2>
  <h3>How are you going </h3>
</div>

//Method3 => Functional  component
const Head2=()=>(
  <div>
    <h3>How are you</h3>
    <h4>What'sup</h4>
  </div>
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
        {head4}
        {head5}
      <h1>Hello ! This is a functional component </h1>
      <h2>This is heading 2 </h2>
    </div>
  );


const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<HeaderComp2/>);
