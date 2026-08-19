import data from "../data";
import { useState } from "react";

function Card({ id, image, description, price, city, removeTourHandler }) {
  let newdescription = `${description.substring(0, 200)}....`;
  const [readMore, setReadMore] = useState(false);

  function readMoreHandler() {
    setReadMore(!readMore);
  }
  return (
    <div className="card">
      <img src={image} alt="" srcSet="" className="image" />

      <div className="tour-info">

        <div className="tour-details">
          <h4 className="tour-price">{price}</h4>
          <h4 className="tour-name">{city}</h4>
        </div>

        <div className="desctiption">
          {readMore ? description : newdescription}
          <span className="read-more" onClick={readMoreHandler}>
            {readMore ? "show less" : "read more"}
          </span>
        </div>

      </div>
      <button className="btn-red" onClick={() => removeTourHandler(id)}>
        Not Interested
      </button>
    </div>
  );
}
export default Card;
