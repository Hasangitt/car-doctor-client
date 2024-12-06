import { useContext } from "react";
import img from "../../assets/images/login/login.svg";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../Providers/AuthContext";

const SignUp = () => {

const {createUser} = useContext(AuthContext);
const location = useLocation();
const navigate = useNavigate();

const handleSignUp = e => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password)
    createUser(email, password)
    .then(result => {
        console.log(result.user)
        if(result.user){
          alert('sign up successfully')
          form.reset();
          navigate(location?.state ? location?.state : '/')
          form.reset('')
        }
    })
    .catch(error => {
        console.log(error)
    })
}

    return (
        <div className="hero min-h-screen">
        <div className="hero-content gap-4 lg:gap-20 flex-col lg:flex-row">
          <div className="w-1/2 ">
            <img src={img} alt="" />
          </div>
          <div className="card bg-base-100 border w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignUp} className="card-body">
              <h1 className="text-3xl font-bold text-red-500 text-center">
                Sign Up!
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
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
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign Up"
                  className="input input-bordered font-bold border-white"
                  required
                />
              </div>
              <div className="form-control mt-6">
               <h4 className="text-base text-center">Or Sign In with</h4>
               <div className="text-center space-x-5 mt-5">
                  <button className="text-blue-500 bg-white rounded-full p-2"><FaFacebook></FaFacebook></button>
                  <button className="p-2 bg-white rounded-full"><FcGoogle></FcGoogle></button>
               </div>
               <p className="text-center mt-5">Already have an account? <Link to="/login" className="hover:underline text-green-500">Log In</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;