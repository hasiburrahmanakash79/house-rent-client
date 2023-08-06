import useHouseData from "../../Hooks/useHouseData";

const Apartments = () => {
  const [apartments] = useHouseData();

  return (
    <div className="py-10">
      <h2 className="mb-5 text-center text-5xl font-bold">
        For rates & Availability
      </h2>

      <div className="grid lg:grid-cols-3 gap-5">
        {apartments.map((apartment) => (
          <div key={apartment.id}>
            <div className="card bg-base-100 border p-5 shadow-xl">
              <figure>
                <img className="w-full rounded" src={apartment?.image} />
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
        ))}
      </div>
    </div>
  );
};

export default Apartments;
