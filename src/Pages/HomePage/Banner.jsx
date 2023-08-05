const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=867&q=80"
          className="w-full max-h-screen"
        />
        <div className="absolute flex flex-col  justify-center items-center  bg-gradient-to-r from-black to-black opacity-60 h-full w-full">
            <h4 className="text-3xl text-white mb-6">Good Service is our passion</h4>
              <h1 className="text-7xl font-semibold text-white  mb-10">
              Awesome apartment Villa
              </h1>
              <p className="text-2xl text-white text-center max-w-3xl">No matter what the weather, no matter what the situation we are in, if we have the right perspective in life, life will always be beautiful!</p>
              <button className="btn btn-warning rounded-full text-lg font-bold mt-8 ">Special Offer</button>
            </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
        
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1565402170291-8491f14678db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=817&q=80"
          className="w-full max-h-screen"
        />
        <div className="absolute flex flex-col  justify-center items-center  bg-gradient-to-r from-black to-black opacity-60 h-full w-full">
            <h4 className="text-3xl text-white mb-6">Good Service is our passion</h4>
              <h1 className="text-7xl font-semibold text-white  mb-10">
              Awesome apartment Villa
              </h1>
              <p className="text-2xl text-white text-center max-w-3xl">No matter what the weather, no matter what the situation we are in, if we have the right perspective in life, life will always be beautiful!</p>
              <button className="btn btn-warning rounded-full text-lg font-bold mt-8 ">Special Offer</button>
            </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          className="w-full max-h-screen"
        />
        <div className="absolute flex flex-col  justify-center items-center  bg-gradient-to-r from-black to-black opacity-60 h-full w-full">
            <h4 className="text-3xl text-white mb-6">Good Service is our passion</h4>
              <h1 className="text-7xl font-semibold text-white  mb-10">
              Awesome apartment Villa
              </h1>
              <p className="text-2xl text-white text-center max-w-3xl">No matter what the weather, no matter what the situation we are in, if we have the right perspective in life, life will always be beautiful!</p>
              <button className="btn btn-warning rounded-full text-lg font-bold mt-8 ">Special Offer</button>
            </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          className="w-full max-h-screen"
        />
        <div className="absolute flex flex-col  justify-center items-center  bg-gradient-to-r from-black to-black opacity-60 h-full w-full">
            <h4 className="text-3xl text-white mb-6">Good Service is our passion</h4>
              <h1 className="text-7xl font-semibold text-white  mb-10">
              Awesome apartment Villa
              </h1>
              <p className="text-2xl text-white text-center max-w-3xl">No matter what the weather, no matter what the situation we are in, if we have the right perspective in life, life will always be beautiful!</p>
              <button className="btn btn-warning rounded-full text-lg font-bold mt-8 ">Special Offer</button>
            </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
