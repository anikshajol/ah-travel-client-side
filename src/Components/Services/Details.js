import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import PostReview from "./PostReview";
import Review from "./Review";

const Details = () => {
  const { title, details, img, tourist_places } = useLoaderData();
  const { user } = useContext(AuthContext);

  return (
    <div className="container mx-auto flex justify-center flex-col md:flex-row gap-12">
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
            <p className="text-2xl font-semibold"></p>
          </ul>
        </div>
      </div>

      <section className="review ">
        {user && user.uid ? (
          <Review></Review>
        ) : (
          <h2 className="text-4xl">Please Login first for review</h2>
        )}
      </section>
    </div>
  );
};

export default Details;
