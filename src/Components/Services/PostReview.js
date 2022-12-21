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
    <div className=" mt-10 mb-4 py-2">
      <h2 className="text-3xl font-bold text-orange-400 text-center">Review</h2>
      <div className="mt-10">
        <div className="flex flex-wrap justify-center gap-4">
          {review.map((rev) => (
            <div key={rev._id} className="border w-52 rounded-md p-2 mr-4">
              {user?.photoURL ? (
                <img
                  src={user?.photoURL}
                  className="mr-4 rounded-full"
                  alt="providePhoto"
                />
              ) : (
                <UserIcon className="w-24"></UserIcon>
              )}
              <p>{rev.name}</p>
              <p>{rev.title}</p>
              <p className="my-4 flex-wrap">{rev.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostReview;
