import React from "react";
import { Link } from "react-router-dom";
import PostReview from "./PostReview";

const ServicesCard = ({ service }) => {
  const { img, price, placeName, details, _id } = service;

  return (
    <section className="">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="place" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{placeName}</h2>
          <p>
            {details.length > 60 ? (
              <span>{details.slice(0, 60) + "..."} </span>
            ) : (
              details
            )}
          </p>
          <p className="text-blue-900">
            Package Starts From
            <span className="font-bold text-2xl">BDT {price}</span>
          </p>

          <div className="card-actions justify-end">
            <Link to={`/details/${_id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default ServicesCard;
