import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
const RightSideNav = () => {
  return (
    <div>
      <div>
        <h2 className="text-xl font-semibold">Login With</h2>
        <button className="btn btn-outline w-full my-4  text-xl font-semibold">
          <FcGoogle className="text-3xl" />
          Login with google
        </button>
        <button className="btn w-full text-xl  font-semibold btn-outline">
          <FaGithub className="text-3xl" />
          Login with GitHub
        </button>
      </div>
      <div className="mt-7">
        <h2 className="text-xl font-semibold">Find Us On</h2>
        <div className="grid gap-0 mt-3">
          <a
            className="btn w-full  flex justify-start gap-3 text-xl font-semibold rounded-b-none btn-outline"
            href=""
          >
            <FaFacebook className="text-3xl"></FaFacebook> Facebook{' '}
          </a>
          <a
            className="btn rounded-none  border-x-1 border-y-0 gap-3 flex justify-start text-xl font-semibold  w-full  btn-outline"
            href=""
          >
            <FaTwitter className="text-3xl"></FaTwitter> Twitter{' '}
          </a>
          <a
            className="btn w-full gap-3  text-xl flex justify-start  font-semibold   rounded-t-none btn-outline"
            href=""
          >
            <FaInstagram className="text-3xl"></FaInstagram> Instagram
          </a>
        </div>
      </div>
      <div className="bg-[#F3F3F3] grid justify-center mt-5 py-4">
        <h2 className="text-xl font-semibold ">Q-Zone</h2>
        <img className="mt-5" src="/qZone1.png" alt="" />
        <img className="my-5" src="/qZone2.png" alt="" />
        <img src="/qZone3.png" alt="" />
      </div>
      <div className="py-14 bg-[#05001DCC] mt-5 px-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-5">Create an Amazing Newspaper</h2>
        <p>
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <button className="btn mt-7 border-none bg-[#D72050] text-white">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default RightSideNav;
