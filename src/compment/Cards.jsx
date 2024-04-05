import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Cards = ({ news }) => {
  const { author, title, thumbnail_url, details, rating, total_view, _id } =
    news;
  return (
    <div className="mb-8 mt-5">
      <div className="card w-full bg-base-100 shadow-xl  rounded-lg">
        <div className="card-body py-4 bg-[#F3F3F3]">
          <div className="flex gap-4">
            <div>
              <img
                className="w-[55px] h-[55px] rounded-full"
                src={author.img}
                alt=""
              />
            </div>
            <div>
              <h2 className=" font-semibold">{author.name}</h2>
              <p>{author.published_date}</p>
            </div>
          </div>
        </div>

        <div className="p-5">
          <h2 className="text-xl font-bold">{title}</h2>
          <figure className="mt-5 ">
            <img
              className="w-full h-[60vh] bg-cover bg-center object-cover object-center "
              src={thumbnail_url}
              alt="Shoes"
            />
          </figure>
          {details.length > 300 ? (
            <>
              <p className="mt-8">{details.slice(0, 300)}</p>
              <Link to={`/news/${_id}`}>
                <p className="text-[#FF8C47]">Read More...</p>
              </Link>
            </>
          ) : (
            <p>{details}</p>
          )}

          <div className="flex justify-between  mt-5 py-5 border-t-2">
            <div className="flex gap-2">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <p>{rating.number}</p>
            </div>
            <div className="flex gap-2 items-center">
              <FaEye />
              <p>{total_view}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
