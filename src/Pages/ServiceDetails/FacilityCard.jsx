import PropTypes from "prop-types";


const FacilityCard = ({fac}) => {
    const {name, details} = fac;
    return (
        <div className="bg-gray-200 text-black space-y-2 p-6 border-t-4 rounded-lg border-t-orange-500">
            <h1 className="font-bold">{name}</h1>
            <p>{details}</p>
        </div>
    );
};

export default FacilityCard;

FacilityCard.propTypes = {
    fac: PropTypes.node
}