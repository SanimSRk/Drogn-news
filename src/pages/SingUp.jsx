import { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthProvider';
import Naver from '../compment/Naver';
import { Navigate } from 'react-router-dom';

const SingUp = () => {
  const { user, singUpAuth } = useContext(AuthContext);
  const handileSingUp = e => {
    if (user) {
      return <Navigate to={'/'}></Navigate>;
    }
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('names');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');
    console.log(name, photo, email, password);
    singUpAuth(email, password)
      .then(res => {
        console.log(res.user);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div>
      <Naver></Naver>
      <form
        onSubmit={handileSingUp}
        className="shadow-lg card-body md:w-2/3  lg:w-1/2 mx-auto"
      >
        <div className="border-b-2 pb-12">
          <h2 className="text-4xl font-semibold text-center">
            Register your account
          </h2>
        </div>

        <div className="form-control mt-12">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            name="names"
            placeholder="Enter your name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control ">
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
          <input className="btn btn-primary" type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
};

export default SingUp;
