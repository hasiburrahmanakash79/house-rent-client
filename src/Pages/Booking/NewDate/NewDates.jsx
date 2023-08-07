import { bookingHouse } from "../../../api/bookings";
import NewDate from "./NewDate";

const NewDates = () => {
    const [bookings] = bookingHouse();
    const bookingDate = bookings.filter(dates => dates?.date === "new house")
    console.log(bookingDate);
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
           {
                bookingDate.map(booking => <NewDate
                    key={booking._id}
                    booking={booking} />)
            }
        </div>
    );
};

export default NewDates;