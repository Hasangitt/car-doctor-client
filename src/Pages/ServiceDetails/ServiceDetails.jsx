import { Link, useLoaderData } from "react-router-dom";
import image from "../../assets/images/checkout/checkout.png";
import FacilityCard from "./FacilityCard";
import { useContext } from "react";
import serviceContext from "../../Providers/ServiceContext";
import ActiveDetails from "./ActiveDetails";
import { FaArrowRight, FaRegFileAlt } from "react-icons/fa";
import logo from "../../assets/logo.svg";

const ServiceDetails = () => {
  const bookings = useLoaderData();
  console.log(bookings);
  const { img, description, facility, title, price, _id } = bookings;
  const services = useContext(serviceContext);

  return (
    <div>
      {/* <div className="mb-20">
        <img className="w-full h-auto" src={image} alt="" />
      </div> */}
       <div className="carousel-item relative mb-20 ">
        <img src={image} className="w-full rounded-lg" />
        <div className="absolute rounded-lg md:w-2/3 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] pl-2 md:pl-14">
        </div>
      </div>
      <div className="mb-20 text-center text-3xl font-bold text-orange-600">
        <h1>--Service Details--</h1>
      </div>
      <div className="md:flex gap-4">
        <div className="md:w-2/3">
          <div>
            <img className="w-full rounded-lg" src={img} alt="" />
          </div>
          <div className="space-y-5 mt-5 mb-5">
            <h1 className="text-black text-3xl font-bold">{title}</h1>
            <p className="text-gray-600">{description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {facility.map((fac) => (
              <FacilityCard key={fac._id} fac={fac}></FacilityCard>
            ))}
          </div>
          <div className="space-y-2 mt-5 mb-5">
            <h1 className="text-3xl text-black font-bold">
              3 Simple Steps to Process
            </h1>
            <p className="text-black">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which do not look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there is not anything embarrassing
              hidden in the middle of text
            </p>
          </div>
        </div>
        <div className="md:w-1/3">
          <div className="bg-gray-100 border rounded-lg p-10">
            <h1 className="text-black text-2xl font-bold">Services</h1>
            <div className="space-y-5 mt-5">
              {services.map((service) => (
                <ActiveDetails
                  key={service._id}
                  service={service}
                ></ActiveDetails>
              ))}
            </div>
          </div>
          <div className="bg-black p-10 mt-10 rounded-lg">
            <h1 className="text-white text-2xl font-bold">Download</h1>
            <div className="flex items-center justify-between mt-5">
              <div className="flex items-center gap-2">
                <span>
                  <FaRegFileAlt />
                </span>
                <div>
                  <h1 className="text-white text-xl font-bold">Our Brochure</h1>
                  <p className="text-gray-100">Download</p>
                </div>
              </div>
              <div className="bg-orange-500 p-3 text-white rounded-md">
                <span>
                  <FaArrowRight></FaArrowRight>
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-5">
              <div className="flex items-center gap-2">
                <span>
                  <FaRegFileAlt />
                </span>
                <div>
                  <h1 className="text-white text-xl font-bold">
                    Company Details
                  </h1>
                  <p className="text-gray-100">Download</p>
                </div>
              </div>
              <div className="bg-orange-500 p-3 text-white rounded-md">
                <span>
                  <FaArrowRight></FaArrowRight>
                </span>
              </div>
            </div>
          </div>
          <div className="bg-black p-10 mt-10 rounded-lg space-y-5">
            <img className="mx-auto" src={logo} alt="" />
            <h1 className="text-xl text-white font-semibold text-center">
              Need Help? We Are Here To Help You
            </h1>
            <div className="bg-white rounded-lg text-center px-6 py-8 relative">
              <p className="font-semibold text-xl text-black">
                <span className="text-orange-500">Car Doctor</span> Special
              </p>
              <p className="font-semibold text-black">
                Save up to<span className="text-orange-500"> 60% off</span>
              </p>
              <div className="bg-orange-500 p-3 rounded-lg absolute right-14 top-24">
                <p className="text-white font-semibold">Get A Quote</p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <p className="text-black text-3xl font-bold">{'$'+ price}</p>
          </div>
          <div className=" mt-10 mb-10 bg-orange-500 text-center p-3 text-white rounded-lg hover:bg-orange-700">
            <Link to={`/checkout/${_id}`}><button>Proceed Checkout</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
