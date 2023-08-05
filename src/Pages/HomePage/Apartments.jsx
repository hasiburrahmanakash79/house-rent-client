import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const Apartments = () => {

    const [apartments, setApertments] = useState([])

    useEffect(() => {
        fetch('../../../public/fake.js')
            .then(res => res.json())
            .then(data => setApertments(data))
    }, [])



    return (
        <div>
            <h1>Rooms & Apartments</h1>

            {
                apartments.map(apartment => <div
                    key={apartment.id}
                >
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={apartment?.image} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {apartment?.appartment_type}

                            </h2>
                            <p><FaLocationDot></FaLocationDot>{location}</p>
                            <div className="card-actions justify-between">
                                <h2>{apartment?.price}</h2>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Apartments;