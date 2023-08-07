import { bookingHouse } from "../../../api/bookings";
import SingleBooking from "./SingleBooking";

const Popular = () => {
    const [bookings] = bookingHouse();
    // console.log(bookings);
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
            {
                bookings.map(booking => <SingleBooking
                    key={booking._id}
                    booking={booking} />)
            }
        </div>
    );
};

export default Popular;