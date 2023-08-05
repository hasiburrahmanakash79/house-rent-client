import React from 'react';
import loginLogo from '../../assets/login.png'

const Login = () => {
    const dark= localStorage.getItem('darkMode');
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content  lg:gap-20 flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
  <div className='flex flex-col items-center gap-1'> 
  <img className='max-w-[300px]' src={loginLogo} alt="" />
  <h1 className='text-5xl font-bold'>Login Now</h1>
  </div>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;