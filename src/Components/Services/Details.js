import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Review from "./Review";

const Details = () => {
  const { title, details, img, tourist_places, _id } = useLoaderData();

  return (
    <div className="container mx-auto flex gap-12">
      <div className="card w-1/2 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold">{title}</h2>
          <p>{details}</p>

          <ul>
            <p className="text-2xl font-semibold">Tourist Places</p>
            {tourist_places.map((place) => (
              <li key={place} className="text-2xl ">
                {place}
              </li>
            ))}
          </ul>
          <ul className="text-2xl">
            <p className="text-2xl font-semibold">Tour Package</p>
          </ul>
        </div>
      </div>

      <section className="review ">
        <Review></Review>
      </section>
    </div>
  );
};

export default Details;
