import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const { title, details } = useLoaderData();
  console.log(title);
  return (
    <div>
      <p>{title}</p>
      <p>Details{details}</p>
    </div>
  );
};

export default Details;
