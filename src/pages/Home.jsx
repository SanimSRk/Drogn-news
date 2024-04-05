import BarakingNews from '../compment/BarakingNews';
import Header from '../compment/Header';
import LeftSideNav from '../compment/HomeSection/LeftSideNav';
import MainNews from '../compment/HomeSection/MainNews';
import RightSideNav from '../compment/HomeSection/RightSideNav';
import Naver from '../compment/Naver';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BarakingNews></BarakingNews>
      <Naver></Naver>
      <div className="grid grid-cols-1 lg:grid-cols-4 w-full gap-6">
        <div className="">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="grid col-span-2">
          <MainNews></MainNews>
        </div>
        <div className="">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
