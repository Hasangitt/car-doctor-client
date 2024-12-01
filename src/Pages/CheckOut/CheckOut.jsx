import { useLoaderData, useNavigate } from "react-router-dom";
import image from "../../assets/images/checkout/checkout.png";
import { useContext } from "react";
import AuthContext from "../../Providers/AuthContext";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, price, _id, img } = service;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCheckOut = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const order = {
      custormerName: name,
      service: title,
      email,
      img,
      date,
      price,
      service_id: _id,
    };
    console.log(order);

    fetch("http://localhost:5000/checkout", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("service book successfully");
          form.reset();
          navigate('/mybookings')
        }
      });
  };

  return (
    <div>
      <div className="carousel-item relative ">
        <img src={image} className="w-full rounded-lg" />
        <div className="absolute rounded-lg md:w-2/3 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] pl-2 md:pl-14">
        </div>
      </div>
      <h1 className="text-2xl text-center font-bold text-orange-500 mt-10 mb-10">
        Service name: <span className="text-blue-500">{title}</span>
      </h1>
      <div>
        <form onSubmit={handleCheckOut} className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                defaultValue={user?.email}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="price"
                name="price"
                defaultValue={"$" + price}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                placeholder="date"
                name="date"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Order Confirm"
              className=" btn-success btn btn-block font-bold"
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
