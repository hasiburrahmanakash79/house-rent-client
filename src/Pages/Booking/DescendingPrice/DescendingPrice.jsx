import { descendingPrice } from "../../../api/bookings";
import HighToLow from "./HighToLow";

const DescendingPrice = () => {
    const [dscPrice] = descendingPrice();
    console.log(dscPrice);
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
            {
                dscPrice.map(booking => <HighToLow
                    key={booking._id}
                    booking={booking} />)
            }
        </div>
    );
};

export default DescendingPrice;