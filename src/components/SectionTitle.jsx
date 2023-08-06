
const SectionTitle = ({title, description}) => {
    return (
        <div className=" text-center">
            <h2 className="font-extrabold text-transparent md:text-5xl text-4xl bg-clip-text bg-gradient-to-r from-[#047B61] to-[#0A5B8A] pb-3">{title}</h2>
            <p className="py-3 text-2xl font-bold text-text_subTitle">{description}</p>
        </div>
    );
};

export default SectionTitle;