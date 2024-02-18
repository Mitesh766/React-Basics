import resList from "../utils/mockData";
import ResCard from "./RestaurantCards";
const Body = () => {
    return (
      <div className="body-container">
        <div className="search">Search</div>
        <div className="res-card-container">
          {/* {resList.map((e) => {
            return <ResCard resData={e} />;
          })} */}
   {/* Method2 */}
  
          {resList.map(restaurant => <ResCard key={restaurant.info.id} resData={restaurant}/>)}
        </div>
      </div>
    );
  };
  export default Body