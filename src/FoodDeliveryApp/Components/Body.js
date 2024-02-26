import resList from "../utils/mockData";
import ResCard from "./RestaurantCards";
import { useState} from "react";
const Body = () => {

//this is array destructuring

// same as let arr= useState(resList)

//[ListofRes,setListOfRes]=arr  

// same as const ListofRes=arr[0]
// same as const setListOfRes=arr[1]
let [ListofRes,setListOfRes]=useState(resList)


    return (
      <div className="body-container">
        <div className="filter">
          <button className="filter-btn" onClick={()=>{filteredList=ListofRes.filter((res)=>{
            return res.info.avgRating>4   })
            setListOfRes(filteredList)
            console.log(filteredList)}} >Top Rated Restaurants</button>
        
        </div>
        <div className="res-card-container">
         
          {ListofRes.map(restaurant => <ResCard key={restaurant.info.id} resData={restaurant}/>)}
        </div>
      </div>
    );
  };
  export default Body