import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../contexts/AuthProvider";

const Review = () => {
  const { title, _id } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    const form = e.target;
    const message = form.message.value;
    const title = form.title.value;
    const email = user?.email || "Unregistered";
    const name = form.name.value;
    console.log(message, email);

    const review = {
      review: _id,
      title,
      message,
      email,
      name,
    };

    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          swal("Thanks For Your Review!");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div style={styles.container}>
      <h2 className="text-2xl font-bold"> {title} </h2>
      <form onSubmit={handleClick}>
        <div>
          <textarea
            placeholder="What's your experience?"
            name="message"
            className="input input-primary bg-slate-200"
            style={styles.textarea}
          />
        </div>
        <div>
          <input
            type="text"
            className="input input-primary my-4"
            name="title"
            id=""
          />
        </div>
        <div>
          <input
            type="text"
            name="name"
            className="input input-primary"
            defaultValue={user?.displayName}
            id=""
          />
        </div>
        <div>
          <input
            type="email"
            className="input input-primary my-4"
            name="email"
            defaultValue={user?.email}
            id=""
          />
        </div>

        <button className="btn btn-primary">Add Review</button>
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
