import React, { useEffect, useState } from "react";
import PostReview from "./PostReview";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="my-12 container mx-auto">
      <h2 className="text-4xl text-center my-12 font-bold">
        Packages in Popular Destinations
      </h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
      <div className="w-full carousel rounded-box">
        <div className="carousel-item w-full">
          <PostReview></PostReview>
        </div>
      </div>
    </div>
  );
};

export default Services;
