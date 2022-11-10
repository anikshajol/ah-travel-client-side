import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Review = () => {
  const [currentValue, setCurrentValue] = useState("");
  const { title, details, img, _id } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    const form = e.target;
    const message = form.message.value;
    const email = form.email.value;
    console.log(message);

    const review = {
      service: _id,
      service_name: title,
      customer: email,
      message,
    };

    fetch(`http://localhost:5000/review`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  return (
    <div style={styles.container}>
      <h2> React Ratings </h2>
      <form onSubmit={handleClick}>
        <textarea
          placeholder="What's your experience?"
          name="message"
          style={styles.textarea}
        />

        <input type="email" name="email" defaultValue={user?.email} id="" />

        <button className="btn btn-ghost">Submit</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300,
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  },
};

export default Review;
