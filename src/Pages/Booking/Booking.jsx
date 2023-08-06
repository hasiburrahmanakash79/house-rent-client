import { bookingHouse } from "../../api/bookings";
import Banner from "../../components/Banner";

const Booking = () => {
    const [bookings] = bookingHouse();
    console.log(bookings);
    return (
        <>
            <Banner
                title='Choose Apartment'
                subTitle='Take A Apartment For Booking' />
            <div className="">

            </div>
        </>
    );
};

export default Booking;