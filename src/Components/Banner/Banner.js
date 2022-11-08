import React from "react";
import banner from "../../assets/banner/banner.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <section className="banner-section">
        <img src={banner} alt="" />
      </section>
    </div>
  );
};

export default Banner;
