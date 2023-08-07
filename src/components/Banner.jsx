
const Banner = ({title, subTitle}) => {
    return (
        <div className="w-full md:h-56 h-36 bg-gradient-to-r from-btn_color_one to-btn_color_two text-center">
            <div className="md:pt-16 pt-12">
                <h2 className="md:text-5xl text-3xl font-extrabold text-white font-sans pb-2 tracking-wide">{title}</h2>
                <p className="text-lg font-bold font-sans text-slate-900">{subTitle}</p>
            </div>
        </div>
    );
};

export default Banner;