import React from "react";
import { useLoaderData } from "react-router";

const PlantDetails = () => {
  const { data } = useLoaderData();

  const { name, description, image, price, category } = data.plants;

  return (
    <div>
      <div className="card bg-base-100 max-w-5xl mx-auto shadow-sm">
        <figure className="h-60 overflow-hidden">
          <img className="w-full h-500px object-cover" src={image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>category: {category}</p>
          <p>description: {description} </p>
          <p>Price: {price} </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
