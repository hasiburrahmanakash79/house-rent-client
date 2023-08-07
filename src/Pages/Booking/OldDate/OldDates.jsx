import { bookingHouse } from "../../../api/bookings";
import OldDate from "./OldDate";

const OldDates = () => {
    const [bookings] = bookingHouse();
    const bookingDate = bookings.filter(dates => dates?.date === "old house")
    console.log(bookingDate);
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
           {
                bookingDate.map(booking => <OldDate
                    key={booking._id}
                    booking={booking} />)
            }
        </div>
    );
};

export default OldDates;