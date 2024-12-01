import { Link } from "react-router-dom";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[300px] md:h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-lg" />
        <div className="absolute rounded-lg md:w-1/2 h-full flex flex-col justify-center space-y-2 md:space-y-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] pl-2 md:pl-14">
          <div>
            <h1 className="text-xl md:text-5xl text-white font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-gray-300 md:text-2xl">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
          </div>
          <div className="flex gap-1 md:gap-4">
            <Link>
              <button className="btn text-white bg-[#FF3811]">
                Discover More
              </button>
            </Link>
            <Link>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-1 md:gap-4">
          <a href="#slide4" className="btn btn-circle bg-transparent text-white">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-orange-500 text-white">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-lg" />
        <div className="absolute rounded-lg md:w-1/2 h-full flex flex-col justify-center space-y-2 md:space-y-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] pl-2 md:pl-14">
          <div>
            <h1 className="text-xl md:text-5xl text-white font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-gray-300 md:text-2xl">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
          </div>
          <div className="flex gap-1 md:gap-4">
            <Link>
              <button className="btn text-white bg-[#FF3811]">
                Discover More
              </button>
            </Link>
            <Link>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-1 md:gap-4">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-lg" />
        <div className="absolute rounded-lg md:w-1/2 h-full flex flex-col justify-center space-y-2 md:space-y-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] pl-2 md:pl-14">
        <div>
            <h1 className="text-xl md:text-5xl text-white font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-gray-300 md:text-2xl">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
          </div>
          <div className="flex gap-1 md:gap-4">
            <Link>
              <button className="btn text-white bg-[#FF3811]">
                Discover More
              </button>
            </Link>
            <Link>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-1 md:gap-4">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-lg" />
        <div className="absolute rounded-lg md:w-1/2 h-full flex flex-col justify-center space-y-2 md:space-y-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] pl-2 md:pl-14">
        <div>
            <h1 className="text-xl md:text-5xl text-white font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-gray-300 md:text-2xl">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
          </div>
          <div className="flex gap-1 md:gap-4">
            <Link>
              <button className="btn text-white bg-[#FF3811]">
                Discover More
              </button>
            </Link>
            <Link>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-1 md:gap-4">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
