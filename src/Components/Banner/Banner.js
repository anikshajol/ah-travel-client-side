import React from "react";
import banner from "../../assets/banner/banner.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <section className="md:banner-section mx-8 md:mx-0 ">
        <img src={banner} alt="" className=" w-full rounded-md" />
      </section>
    </div>
  );
};

export default Banner;
