import ResCard from "./RestaurantCards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  //this is array destructuring
  console.log("rendered");
  // same as let arr= useState(resList)

  //[ListofRes,setListOfRes]=arr

  // same as const ListofRes=arr[0]
  // same as const setListOfRes=arr[1]

  let [ListofRes, setListOfRes] = useState([]);
  const [filteredListOfRes, setFilteredListOfRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    // ? =>optional chaining
    setFilteredListOfRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  //while the data from api listOfRes will be empty  loads display this ,
  //conditional rendering

  // if length==0 return shimmer else return body-container
  return ListofRes.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="searchArea"
            // value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          {/* filtering data based on the search text */}
          <button
            onClick={() => {
              SearchList = ListofRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredListOfRes(SearchList);
            }}
          >
            Search
          </button>
        </div>
        {/* filtering data based on the average rating */}
        <button
          className="filter-btn"
          onClick={() => {
            filteredList = ListofRes.filter((res) => {
              return res.info.avgRating > 4.5;
            });
            setListOfRes(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-card-container">
        {filteredListOfRes.map((restaurant) => (
          <ResCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
