import { Link } from "react-router-dom";
import useHouseData from "../../Hooks/useHouseData";
import Banner from "../../components/Banner";

const House = () => {
  const [apartments] = useHouseData();
  return (
    <div>
      {/* <div className="bg-green-800 text-center py-16">
        <h1 className="text-6xl font-bold text-white">House</h1>
        <p className="text-xl font-bold">All Apartment List</p>
      </div> */}
      <Banner
        title='House'
        subTitle='All Apartment List' />
      <div className="my-10 grid lg:grid-cols-4 md:grid-cols-2 gap-5">
        {
          apartments.map((apartment) => <div className=" bg-base-100 border rounded-md p-3 shadow-xl">
            <figure>
              <img
                className="rounded h-60 w-full"
                src={apartment?.image}
                alt="house"
              />
            </figure>
            <div className="mt-4">
              <Link to="#" className="card-title">{apartment?.apartment_type}</Link>
              <p className="text-gray-500">{apartment?.location}</p>

              <div className="divider divider-vertical "></div>
              <div className="card-actions text-gray-500">
                <div className="">{apartment?.bedrooms} Bedroom</div>
                <div className="">{apartment?.bathrooms} Bathroom</div>
              </div>
              <div className="flex justify-between items-end my-4">
                <h1 className="text-2xl font-bold">{apartment?.price}</h1>
                <div className="card-actions">
                  <p>Shared</p>
                  <p>Like</p>
                </div>
              </div>
            </div>
          </div>)
        }

      </div>
    </div>
  );
};

export default House;
