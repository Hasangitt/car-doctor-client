import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const {_id, title, img, price } = service;
  return (
    <div className="card bg-white border w-96 shadow-xl mx-auto">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl h-[220px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl text-black">{title}</h2>
        <div className="flex justify-between items-center">
          <p className="text-xl text-orange-600 font-semibold">
            Price: ${price}
          </p>

          {/* <Link to={`/checkout/${_id}`}>
          <button className="text-orange-600 hover:text-black">
              <FaArrowRight></FaArrowRight>
            </button>
          </Link> */}
           <Link to={`/serviceDetails/${_id}`}>
          <button className="text-orange-600 hover:text-black">
              <FaArrowRight></FaArrowRight>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

ServiceCard.propTypes = {
  service: PropTypes.node,
};
