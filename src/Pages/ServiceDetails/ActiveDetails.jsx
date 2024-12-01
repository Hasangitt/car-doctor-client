import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const ActiveDetails = ({ service }) => {
  const { title, _id } = service;

  return (
    <div>
      <NavLink
      className={({isActive})=>
      isActive ? "flex items-center justify-between text-white bg-orange-500 p-4 rounded-md"
      : "flex items-center justify-between text-black bg-gray-300 p-4 rounded-md"
      
      }
        to={`/serviceDetails/${_id}`}>
        <p>{title}</p>
        <FaArrowRight></FaArrowRight>
      </NavLink>
    </div>
  );
};

export default ActiveDetails;

ActiveDetails.propTypes = {
  service: PropTypes.node,
};
