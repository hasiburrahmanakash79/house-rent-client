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
      <h1 className="text-center text-4xl font-semibold my-4">Rooms & Apartments</h1>

      <div className="flex justify-center">
      <div className="grid lg:grid-cols-3 gap-10 ">
        {apartments.map((apartment) =>
          <div key={apartment.id}  >
            {/* className="card w-96 bg-base-100  shadow-xl"  */}
            <div className="card min-h-[450px]  bg-base-100 shadow-xl"> 
              <figure className="h-[250px]">
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
    </div>
  );
};

export default Apartments;
