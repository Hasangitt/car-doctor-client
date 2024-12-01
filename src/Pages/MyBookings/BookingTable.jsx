import PropTypes from "prop-types";

const BookingTable = ({ booking, handleDeleteOrder, handleBookingconfirm }) => {
  const {_id, img, date, price, service, status } = booking;

  return (
    <tr>
      <th>
       {
        status === 'confirm' ? '' :  <button onClick={() =>  handleDeleteOrder (_id)} className="btn btn-sm btn-circle btn-outline">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
       }
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-24 rounded">
              <img src={img} />
            </div>
          </div>
        </div>
      </td>
      <td className="text-black font-semibold">{service}</td>
      <td className="text-black font-semibold">{price}</td>
      <td className="text-black font-semibold">{date}</td>
      <th>
        {status === 'confirm' ? <h5 className="text-green-500">Booking Confirm</h5> : <button  onClick={() =>  handleBookingconfirm (_id)} className="btn text-orange-500 btn-ghost p-2 bg-gray-100">Please Confirm</button> }
      </th>
    </tr>
  );
};

export default BookingTable;

BookingTable.propTypes = {
  booking: PropTypes.node,
  handleDeleteOrder: PropTypes.node,
  handleBookingconfirm: PropTypes.node
};
