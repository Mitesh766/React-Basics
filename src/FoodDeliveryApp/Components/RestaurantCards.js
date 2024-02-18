import {CDN_URL} from "../utils/constants"
const ResCard = (props) => {
    //first taking out resData from from so everywhere we don't have to write resData.item , directly we can write item
    const { resData } = props;
    //destructuring name , costForTwo,.... from resData.info
    // putting question mark called optional chaining
    const { name, costForTwo, cuisines, cloudinaryImageId } = resData?.info;
    return (
      <div className="res-card">
        <img
          className="card-img"
          src={
            CDN_URL
            +
            cloudinaryImageId
          }
        ></img>
        <h3>{name}</h3>
        <h4>{costForTwo}</h4>
        <h4>{cuisines.join(", ")}</h4>
      </div>
    );
  };
  export default ResCard