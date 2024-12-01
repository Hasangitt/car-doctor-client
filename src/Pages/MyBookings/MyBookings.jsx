import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Providers/AuthContext";
import BookingTable from "./BookingTable";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/checkout?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);

  const handleDeleteOrder = id => {
    const procced = confirm('are you sure for delete')
    if(procced){
      fetch(`http://localhost:5000/checkout/${id}`, {
        method: "DELETE"
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.deletedCount > 0){
          alert('delete successfully')
          const remaining = bookings.filter(booking => booking._id !==id)
          setBookings(remaining)
        }
      })
    }
  };


  const handleBookingconfirm = id => {
    fetch(`http://localhost:5000/checkout/${id}`, {
      method: "PATCH",
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify({status: 'confirm' })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.modifiedCount > 0){
        const remaining = bookings.filter(booking => booking._id !== id);
        const updated = bookings.find(booking => booking._id === id);
        updated.status = 'confirm'
        const confirmBookings = [updated, ...remaining];
        setBookings(confirmBookings)  
      }
    })
  }

  return (
    <div className="overflow-auto">
      <table className="table">
        {/* head */}
        <thead className="bg-gray-200">
          <tr>
          <th className="text-blue-500 font-semibold text-base">Delete</th>
            <th className="text-blue-500 font-semibold text-base">Image</th>
            <th className="text-blue-500 font-semibold text-base">Service Name</th>
            <th className="text-blue-500 font-semibold text-base">Price</th>
            <th className="text-blue-500 font-semibold text-base">Order Date</th>
            <th className="text-blue-500 font-semibold text-base">Status</th>
          </tr>
        </thead>
        <tbody>
         {
          bookings.map(booking => <BookingTable key={booking._id} booking={booking} handleDeleteOrder={handleDeleteOrder} handleBookingconfirm={handleBookingconfirm}></BookingTable>)
         }
        </tbody>
      </table>
    </div>
  );
};

export default MyBookings;
