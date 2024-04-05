import moment from 'moment';

const Header = () => {
  return (
    <div className="text-center  mt-12">
      <div className="grid justify-center">
        <img src="/logo.png" alt="" />
      </div>

      <h2 className="font-normal my-3">Journalism Without Fear or Favour</h2>
      <h1 className="text-xl font-medium">
        {moment().format('dddd, MMMM D YYYY')}
      </h1>
      <div></div>
    </div>
  );
};

export default Header;
