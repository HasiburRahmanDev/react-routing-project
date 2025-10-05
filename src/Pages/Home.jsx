import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet, useLoaderData } from "react-router";
import PlantCard from "../components/PlantCard";

const Home = () => {
  const { plants } = useLoaderData();

  console.log(plants);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-8 px-5">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant}></PlantCard>
      ))}
    </div>
  );
};

export default Home;
