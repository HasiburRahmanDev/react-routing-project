import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const PlantDetails = () => {
  const [plant, setPlant] = useState({});

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
      .then((res) => res.json())
      .then((data) => setPlant(data?.plants));
  }, [id]);

  const { name, description, image, price, category } = plant;

  console.log(name);
  return (
    <div>
      <div className="card bg-base-100 max-w-5xl mx-auto shadow-sm">
        <figure className="h-48 overflow-hidden">
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
