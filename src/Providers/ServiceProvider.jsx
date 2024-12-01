import { useEffect, useState } from "react";
import serviceContext from "./ServiceContext";
import PropTypes from "prop-types";


const ServiceProvider = ({ children }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <serviceContext.Provider value={services}>
      {children}
    </serviceContext.Provider>
  );
};

export default ServiceProvider;

ServiceProvider.propTypes = {
    children: PropTypes.node
}