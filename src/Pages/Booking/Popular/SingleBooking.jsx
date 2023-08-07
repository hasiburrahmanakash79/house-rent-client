import { FaBath, FaMapMarkerAlt } from "react-icons/fa";
import { RiHotelBedFill } from "react-icons/ri";
import { AiOutlineStar } from "react-icons/ai";
import { BsFillShareFill } from "react-icons/bs";

const SingleBooking = ({ booking }) => {
    console.log(booking);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={booking?.img} className="w-full h-[256px]" alt="house image" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    <span className="text-2xl font-semibold">{booking?.house_name}</span>
                </h2>
                <div className="flex items-center pb-3">
                    <FaMapMarkerAlt className="w-6 h-6 text-text_desc" />
                    <p className="pl-2 text-lg text-text_desc">{booking?.location}</p>
                </div>
                <hr />
                <div className=" mt-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <RiHotelBedFill className="w-5 h-5 text-text_desc" />
                            <p className="pl-2 text-lg text-text_desc">{booking?.bedrooms}</p>
                        </div>
                        <div className="flex items-center">
                            <FaBath className="w-5 h-5 text-text_desc" />
                            <p className="pl-2 text-lg text-text_desc">{booking?.bathroom}</p>
                        </div>
                    </div>
                    <div className="flex justify-between mt-4">
                        <div>
                            <p className="text-2xl font-bold">${booking?.amount}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <BsFillShareFill className="w-5 h-5 text-text_desc" />
                            <AiOutlineStar className="w-6 h-6 text-text_desc" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBooking;