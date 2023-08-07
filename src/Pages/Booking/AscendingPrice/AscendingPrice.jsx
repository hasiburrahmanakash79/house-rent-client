import { ascendingPrice } from "../../../api/bookings";
import LowToHigh from "./LowToHigh";

const AscendingPrice = () => {
    const [ascPrice] = ascendingPrice();
    console.log(ascPrice);
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
            {
                ascPrice.map(booking => <LowToHigh
                    key={booking._id}
                    booking={booking} />)
            }
        </div>
    );
};

export default AscendingPrice;