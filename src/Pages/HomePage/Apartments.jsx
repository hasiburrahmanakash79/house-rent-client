import { useEffect, useState } from "react";

const Apartments = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetch("../../../public/fake.json")
      .then((res) => res.json())
      .then((data) => setApartments(data));
  }, []);

  return (
    <div>
      <h1>Rooms & Apartments</h1>

      <div className="grid lg:grid-cols-3 ">
      {apartments.map((apartment) => 
        <div key={apartment.id}  >
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={apartment?.image} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{apartment?.apartment_type}</h2>
              <p>{apartment?.location}</p>
              <div className="card-actions justify-between">
                <h2>{apartment?.price}</h2>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Apartments;
