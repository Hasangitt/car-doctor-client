import Services from "../Pages/Home/Services/Services";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import ServiceProvider from "./ServiceProvider"


const ServicesDate = () => {
    return (
       <ServiceProvider>
        <Services></Services>,
        <ServiceDetails></ServiceDetails>
       </ServiceProvider>
    )
};

export default ServicesDate;