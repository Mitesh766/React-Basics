// taking api data of swiggy and building a swiggy app, hard import 
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";


// we have total 9 restaurants




const App = () => {
  return (
    <div className="main-app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<App />);
