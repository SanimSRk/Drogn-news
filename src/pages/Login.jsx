import { useContext } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthProvider';
import Naver from '../compment/Naver';

const Login = () => {
  const { loginAuthProvide } = useContext(AuthContext);
  const location = useLocation();
  const Naviget = useNavigate();
  const handileLogin = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);
    loginAuthProvide(email, password)
      .then(res => {
        console.log(res.user);
        Naviget(location?.state ? location.state : '/');
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div className="grid  items-center">
      <Naver></Naver>
      <form
        onSubmit={handileLogin}
        className="shadow-lg card-body md:w-2/3  lg:w-1/2 mx-auto"
      >
        <div className="border-b-2 pb-12">
          <h2 className="text-4xl font-semibold text-center">
            Login your account
          </h2>
        </div>

        <div className="form-control mt-12">
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
            name="password"
            placeholder="password"
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
          <input className="btn btn-primary" type="submit" value="Login" />
        </div>

        <h2 className="font-semibold text-center">
          Dont’t Have An Account ?{' '}
          <Link to={'/singup'}>
            <span className="text-[#F75B5F]">Register</span>
          </Link>
        </h2>
      </form>
    </div>
  );
};

export default Login;
