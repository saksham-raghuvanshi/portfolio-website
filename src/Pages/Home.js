import React from "react";
import photo from "../asset/my_photo.jpg";

const Home = () => {
  return (
    <section>
      <div className="container">
        <div className="section__pic_container">
          <img className="rounded-full" src={photo} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
