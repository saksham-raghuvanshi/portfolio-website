import React from "react";
import photo from "../asset/my_photo.jpg";
import linkedin from "../asset/img/linkedin.png";
import github from "../asset/img/github.png";

const Home = () => {
  const handleResume = () => {
    window.open(
      "../asset/resume/Saksham_Raghuvanshi_Final_Resume_with_photo.pdf",
      "_blank"
    );
  };

  const handleLinked = () => {
    window.location.href("https://linkedin.com");
  };

  const handleGithub = () => {
    window.location.href("https://github.com");
  };
  return (
    <section
      id="profile"
      className="pt-[4vh] text-center h-[96vh] mt-6  flex flex-col md:flex-row justify-center gap-[5rem] h-[80vh]"
    >
      <div className="flex h-[400px] w-[400px] m-[auto 0]">
        <img className="rounded-full" src={photo} alt="" />
      </div>

      <div className="self-center text-center">
        <p className="section__text__p1 font-[600] text-center ">Hello, I'm</p>
        <h1 className="title text-center text-2xl">Saksham Raghuvanshi</h1>
        <p className="section__text__p2  ">Frontend Developer</p>
        <div className="flex justify-center gap-[1rem]">
          <button className="btn btn-color-1" onclick={handleResume}>
            Download Cv
          </button>
          <button className="btn btn-color-2" onclick>
            Contact Info
          </button>
        </div>

        <div className="socials-container flex justify-center mt-[1rem] gap-[1rem]">
          <img
            src={linkedin}
            alt="My LinkedIn profile"
            className="h-[2rem] cursor-pointer"
            onclick={handleLinked}
          />

          <img
            src={github}
            alt="My Github profile"
            className="h-[2rem] cursor-pointer"
            onclick={handleGithub}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
