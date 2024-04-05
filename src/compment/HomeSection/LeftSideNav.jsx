import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftSideNav = () => {
  const [catogery, setCotogery] = useState([]);
  useEffect(() => {
    fetch('categories.json')
      .then(res => res.json())
      .then(data => setCotogery(data));
  }, []);
  console.log(catogery);
  return (
    <div>
      <h2 className="text-xl font-semibold">All Caterogy</h2>
      <div>
        {catogery.map(cata => (
          <NavLink
            to={`category/${cata.id}`}
            className="block text-xl mt-7 font-semibold"
            key={cata.id}
          >
            {cata.name}
          </NavLink>
        ))}
      </div>
      <div className="grid gap-y-7 mt-7">
        <div>
          <img src="/1.png" alt="" />
          <h2 className="text-xl font-semibold my-5">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h2>

          <div className="flex gap-5">
            <p>Sports</p>
            <p>Jan 4, 2022</p>
          </div>
        </div>
        <div>
          <img src="/2.png" alt="" />

          <h2 className="text-xl font-semibold my-5">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h2>

          <div className="flex gap-5">
            <p>Sports</p>
            <p>Jan 4, 2022</p>
          </div>
        </div>
        <div>
          <img src="/3.png" alt="" />

          <h2 className="text-xl font-semibold my-5">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h2>

          <div className="flex gap-5">
            <p>Sports</p>
            <p>Jan 4, 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
