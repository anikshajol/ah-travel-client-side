import React, { useContext, useEffect, useState } from "react";
import { UserIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../../contexts/AuthProvider";

const PostReview = () => {
  const { user } = useContext(AuthContext);
  const [review, setReview] = useState([]);
  console.log(review);

  useEffect(() => {
    fetch(`https://ah-travels-server-site.vercel.app/review?_id=${user?._id}`)
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, [user?._id]);
  return (
    <div className=" shadow-lg mt-10 mb-4 py-2">
      <div className="card card-side bg-base-100 shadow-xl">
        {user?.photoURL ? (
          <img
            src={user?.photoURL}
            className="mr-4 rounded-full"
            alt="providePhoto"
          />
        ) : (
          <UserIcon className="w-24"></UserIcon>
        )}

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
