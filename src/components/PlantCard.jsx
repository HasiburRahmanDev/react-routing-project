import React from "react";
import { Link } from "react-router";

const PlantCard = ({ plant }) => {
  const { category, description, id, image, name, price } = plant;

  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure className="h-48 overflow-hidden">
          <img className="w-full h-full object-cover" src={image} />
        </figure>
        <div className="card-body">
          <p> category: {category}</p>
          <p>Price: {price}</p>
          <div className="card-actions justify-end">
            <Link to={`plant-details/${id}`} className="btn btn-primary">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
