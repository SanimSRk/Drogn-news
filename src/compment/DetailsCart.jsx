const DetailsCart = () => {
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl  rounded-lg">
        <div className="p-5">
          <figure className="mt-5 ">
            <img
              className="w-full h-[60vh] bg-cover bg-center object-cover object-center "
              src={thumbnail_url}
              alt="Shoes"
            />
          </figure>
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default DetailsCart;
