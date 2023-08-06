import { Link } from "react-router-dom";

const Button = ({ adders, label }) => {
    return (
        <Link to={adders}
            className="text-xl text-white font-semibold bg-btn_color_two hover:bg-btn_color_one md:py-3 py-2 md:px-10 px-6 text-center rounded-2xl tracking-wide transition duration-200">
           {label}
        </Link>
    );
};

export default Button;