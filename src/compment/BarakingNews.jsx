import Marquee from 'react-fast-marquee';
const BarakingNews = () => {
  return (
    <div>
      <div className="bg-[#F3F3F3] mt-7 p-4 rounded-md items-center lg:flex gap-4">
        <button className="btn text-white bg-[#D72050] border-none">
          Latest
        </button>
        <p className="font-semibold">
          <Marquee pauseOnHover={true}>
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </Marquee>
        </p>
      </div>
    </div>
  );
};

export default BarakingNews;
