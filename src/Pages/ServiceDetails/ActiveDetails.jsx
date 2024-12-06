import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ActiveDetails = ({ service }) => {
  const { title, _id } = service;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="text-center">
          {" "}
          <span className="loading text-red-200 loading-bars loading-lg"></span>
          </div>
      ) : (
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "flex items-center justify-between text-white bg-orange-500 p-4 rounded-md"
                : "flex items-center justify-between text-black bg-gray-300 p-4 rounded-md"
            }
            to={`/serviceDetails/${_id}`}
          >
            <p>{title}</p>
            <FaArrowRight></FaArrowRight>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default ActiveDetails;

ActiveDetails.propTypes = {
  service: PropTypes.node,
};
