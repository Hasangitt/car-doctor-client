import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div id="about-section" className="hero lg:h-[560px]">
      <div className="hero-content flex-col lg:flex-row space-y-10 lg:space-y-0">
        {/* for sm & md device */}
        <div className="lg:hidden text-center space-y-4 mt-10">
          <p className="text-4xl font-bold text-[#FF3811]">About Us</p>
          <h1 className="text-5xl font-bold text-black">
            We are qualified & of experience in this field!
          </h1>
        </div>
        {/* **************** */}
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-2/4 rounded-lg shadow-2xl absolute right-5 top-1/2 border-8 border-white-500"
          />
        </div>
        <div className="lg:w-1/2 text-black space-y-4">
          <p className="text-2xl hidden lg:block font-semibold text-[#FF3811]">
            About Us
          </p>
          <h1 className="text-5xl font-bold hidden lg:block">
            We are qualified & of experience in this field!
          </h1>
          <div className="space-y-4">
            <p className="mt-0 md:mt-20 lg:mt-0">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which dont look even slightly
              believable.{" "}
            </p>
            <p>
              The majority have suffered alteration in some form, by injected
              humour, or randomised words which do not look even slightly
              believable.
            </p>
          </div>
          <div>
            <Link to="/about">
              <button className="btn text-white bg-[#FF3811]">
                Get More Info
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
