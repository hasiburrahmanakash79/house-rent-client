import Apartments from "./Apartments";
import Banner from "./Banner";
import PhotoGallery from "./PhotoGallery";
import SearchHouse from "./SearchHouse";

const HomeSection = () => {
    return (
        <div className="my-5">
            <Banner/>
            <SearchHouse/>
            <Apartments/>
            <PhotoGallery/>
        </div>
    );
};

export default HomeSection;