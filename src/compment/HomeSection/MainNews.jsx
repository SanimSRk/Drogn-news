import { useLoaderData } from 'react-router-dom';
import Cards from '../Cards';

const MainNews = () => {
  const newData = useLoaderData();

  return (
    <div className="">
      <h2 className="text-xl font-semibold">Dragon News Home </h2>
      <div>
        {newData.map(news => (
          <Cards key={news.id} news={news}></Cards>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
