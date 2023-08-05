import Banner from "../../components/Banner";
import Button from "../../components/Button";
import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";

const Booking = () => {
    return (
        <div className="">
            <Banner title='Booking' subTitle='Booking now your house' />
            <Container>
                <h1>Booking page</h1>
                <SectionTitle
                    title='Booking Section'
                    description='WELCOME TO OUR HOUSE RENT COMPANY' />
                <Button adders='/blogs' label='All Apartments' />
            </Container>
        </div>
    );
};

export default Booking;