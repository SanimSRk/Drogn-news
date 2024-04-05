import Header from '../compment/Header';
import RightSideNav from '../compment/HomeSection/RightSideNav';
import Naver from '../compment/Naver';

const NewsDetails = () => {
  return (
    <div>
      <Header></Header>
      <Naver></Naver>
      <div className="grid lg:grid-cols-4 ">
        <div className="col-span-3"></div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
