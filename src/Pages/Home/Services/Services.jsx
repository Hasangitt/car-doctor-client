import { useContext} from "react";
import ServiceCard from "./ServiceCard";
import serviceContext from "../../../Providers/ServiceContext";

const Services = () => {
  //   const [services, setServices] = useState([]);

  //   useEffect(() => {
  //     fetch("http://localhost:5000/services")
  //       .then((res) => res.json())
  //       .then((data) => setServices(data));
  //   }, []);

  const services = useContext(serviceContext);
  return (
    <div className="mb-20">
      <div className="text-center space-y-4 mt-10 mb-10">
        <h3 className="text-3xl text-orange-600 font-semibold">Service</h3>
        <h2 className="text-5xl text-black font-bold">Our Service Area</h2>
        <p className="text-xl text-gray-600">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {services.map((service) => (
          <ServiceCard
            key={service._id}
            service={service}
            state={service}
          ></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
