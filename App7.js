import React from "react";
import ReactDOM from "react-dom/client";


const RestaurantCard=()=>{
    return(
        <div className="res-card-1">
        <img  className="card-1-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x4uyxvihmg8qa3pddkgf"></img>
        <h3>Meghana Foods</h3>
        <h4>⭐4.5 . 35-40min</h4>
        <h5>Tibetal, Healthy food, Shantinagar</h5>
        </div>
    )
}

const Body=()=>{
    return(
        <div className="body-container">
            <div className="search">Search</div>
            <div className="res-card-container">
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            </div>

        </div>
    )
}







const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://png.pngtree.com/png-vector/20221231/ourmid/pngtree-food-delivery-logo-template-design-sign-menu-vector-png-image_43664212.jpg"></img>
      </div>
      <div className="nav-container">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Cart</li>
        </ul>

      </div>
    </div>
  );
};

const AppLayout = () => {
  return <div class="app">
    <Header/>
    <Body/>
  </div>;
};

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<AppLayout/>);
