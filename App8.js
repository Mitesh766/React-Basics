// building swiggy app => learning stage
import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/png-vector/20221231/ourmid/pngtree-food-delivery-logo-template-design-sign-menu-vector-png-image_43664212.jpg"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact us</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResCard = (props) => {
  return (
    <div className="res-card-1">
      <img
        className="card1-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x4uyxvihmg8qa3pddkgf"
      ></img>
      <h3>{props.resName}</h3>
      <h4>{props.starTime}</h4>
      <h4>{props.cuisine}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-container">
      <div className="search">Search</div>
      <div className="res-card-container">
        <ResCard
          resName="Meghana Foods"
          starTime="  4.4⭐  35-40 min  "
          cuisine="Tibetan, Healthy Food, Shanti Nagar"
        />
        <ResCard
          resName="MG Foods"
          starTime="5⭐ 30 min"
          cuisine="Healthy Food"
        />
        
      </div>
    </div>
  );
};

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
