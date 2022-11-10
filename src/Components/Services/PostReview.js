import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../contexts/AuthProvider";

const PostReview = () => {
  const { user } = useContext(AuthContext);
  const [review, setReview] = useState([]);
  console.log(review);

  useEffect(() => {
    fetch(`http://localhost:5000/review?_id=${user._id}`)
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div className=" shadow-lg mt-10 mb-4 py-2">
      <div className="card card-side bg-base-100 shadow-xl">
        <img
          src={user?.photoURL}
          className="mr-4 rounded-full"
          alt="providePhoto"
        />

        <div className="flex">
          {review.map((rev) => (
            <div key={rev._id} className="border p-2 mr-4">
              <p>{rev.title}</p>
              <p className="my-4">{rev.message}</p>
              <p>{rev.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostReview;
