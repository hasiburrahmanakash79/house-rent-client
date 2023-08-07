import Banner from "../../components/Banner";
import Container from "../../components/Container";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './booking.css'
import Popular from "./Popular/Popular";
import NewDates from "./NewDate/NewDates";
import OldDates from "./OldDate/OldDates";
import AscendingPrice from "./AscendingPrice/AscendingPrice";
import DescendingPrice from "./DescendingPrice/DescendingPrice";

const Booking = () => {
    return (
        <>
            <Banner
                title='Choose Apartment'
                subTitle='Take A Apartment For Booking' />
            <Container>
                <h2 className="py-5 text-xl font-bold text-slate-700">Home <span className="text-text_desc"> {`>`} Apartment List For Booking</span></h2>
                <div className="my-20">
                    <Tabs>
                        <TabList className="flex">
                            <Tab><span className="text-2xl hover:text-white font-extrabold py-6 px-7 rounded-md bg-[#E8E8E8] hover:bg-gradient-to-tl from-[#23A961] to-[#303E6D] transition-all duration-200">Popular</span></Tab>
                            <Tab className="category_btn text-center mr-5"> Date <br />
                                <span className="text-sm font-medium">Newest To Older</span>
                            </Tab>
                            <Tab className="category_btn text-center mr-5"> Date <br />
                                <span className="text-sm font-medium">Older To Newest</span>
                            </Tab>
                            <Tab className="category_btn text-center mr-5"> Price <br />
                                <span className="text-sm font-medium">Low To High</span>
                            </Tab>
                            <Tab className="category_btn text-center mr-5"> Price <br />
                                <span className="text-sm font-medium">High To Low</span>
                            </Tab>
                            <Tab> <select className="category_btn">
                                <option value="0">Category </option>
                                <option value="1">Audi</option>
                                <option value="2">BMW</option>
                                <option value="3">Citroen</option>
                                <option value="4">Ford</option>
                            </select>
                            </Tab>
                        </TabList>

                        <div className="mt-16">
                            <TabPanel>
                                <Popular />
                            </TabPanel>
                            <TabPanel>
                                <NewDates />
                            </TabPanel>
                            <TabPanel>
                                <OldDates />
                            </TabPanel>
                            <TabPanel>
                                <AscendingPrice />
                            </TabPanel>
                            <TabPanel>
                                <DescendingPrice />
                            </TabPanel>
                        </div>
                    </Tabs>
                </div>
            </Container>
        </>
    );
};

export default Booking;