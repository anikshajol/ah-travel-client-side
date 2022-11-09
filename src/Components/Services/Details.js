import React, { useEffect, useState } from "react";

const Details = () => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  return (
    <div>
      <h2>{details.length}</h2>
    </div>
  );
};

export default Details;
