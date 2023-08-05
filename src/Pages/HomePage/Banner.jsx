const Banner = () => {
  return (
    <div className="w-full carousel">
      <div id="slide1" className="relative w-full carousel-item">
        <img
          src="https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=867&q=80"
          className="w-full max-h-screen"
        />
        <div className="absolute flex flex-col items-center justify-center w-full h-full bg-gradient-to-r from-black to-black opacity-60">
            <h4 className="mb-6 text-3xl text-white">Good Service is our passion</h4>
              <h1 className="mb-10 font-semibold text-white text-7xl">
              Awesome apartment Villa
              </h1>
              <p className="max-w-3xl text-2xl text-center text-white">No matter what the weather, no matter what the situation we are in, if we have the right perspective in life, life will always be beautiful!</p>
              <button className="mt-8 text-lg font-bold rounded-full btn btn-warning ">Special Offer</button>
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
      <div id="slide2" className="relative w-full carousel-item">
        <img
          src="https://images.unsplash.com/photo-1565402170291-8491f14678db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=817&q=80"
          className="w-full max-h-screen"
        />
        <div className="absolute flex flex-col items-center justify-center w-full h-full bg-gradient-to-r from-black to-black opacity-60">
            <h4 className="mb-6 text-3xl text-white">Good Service is our passion</h4>
              <h1 className="mb-10 font-semibold text-white text-7xl">
              Awesome apartment Villa
              </h1>
              <p className="max-w-3xl text-2xl text-center text-white">No matter what the weather, no matter what the situation we are in, if we have the right perspective in life, life will always be beautiful!</p>
              <button className="mt-8 text-lg font-bold rounded-full btn btn-warning ">Special Offer</button>
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
      <div id="slide3" className="relative w-full carousel-item">
        <img
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          className="w-full max-h-screen"
        />
        <div className="absolute flex flex-col items-center justify-center w-full h-full bg-gradient-to-r from-black to-black opacity-60">
            <h4 className="mb-6 text-3xl text-white">Good Service is our passion</h4>
              <h1 className="mb-10 font-semibold text-white text-7xl">
              Awesome apartment Villa
              </h1>
              <p className="max-w-3xl text-2xl text-center text-white">No matter what the weather, no matter what the situation we are in, if we have the right perspective in life, life will always be beautiful!</p>
              <button className="mt-8 text-lg font-bold rounded-full btn btn-warning ">Special Offer</button>
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
      <div id="slide4" className="relative w-full carousel-item">
        <img
          src="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          className="w-full max-h-screen"
        />
        <div className="absolute flex flex-col items-center justify-center w-full h-full bg-gradient-to-r from-black to-black opacity-60">
            <h4 className="mb-6 text-3xl text-white">Good Service is our passion</h4>
              <h1 className="mb-10 font-semibold text-white text-7xl">
              Awesome apartment Villa
              </h1>
              <p className="max-w-3xl text-2xl text-center text-white">No matter what the weather, no matter what the situation we are in, if we have the right perspective in life, life will always be beautiful!</p>
              <button className="mt-8 text-lg font-bold rounded-full btn btn-warning ">Special Offer</button>
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
