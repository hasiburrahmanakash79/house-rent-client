import React, { useEffect, useState } from 'react';
import loginLogo from '../../assets/login.png'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {
  //code verification
  const [randomNumbers, setRandomNumbers] = useState([])
  const [isButtonEnable, setisButtonEnable] = useState(false)

  useEffect(() => {
    const newRandomNumbers = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10));
    setRandomNumbers(newRandomNumbers);
  }, [])

  const handleInputChange = (event) => {
    console.log(event.target.value)
    setisButtonEnable(event.target.value === randomNumbers.join(''));
  }
  //verification end

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

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
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                  {errors.email && <span>Email field is required</span>}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input {...register("password", { required: true })} type="password" placeholder="password" className="input input-bordered" />
                  {errors.password && <span>Password field is required</span>}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
                <div className="form-control ">
                  <input disabled={!isButtonEnable} className="btn btn-primary " type='submit' value={'Login'} />
                </div>
              </form>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <p className='text-center bg-green-500 text-white w-1/3 md:w-full px-2 py-1 rounded-lg mx-auto'> {randomNumbers.join(' ')}</p>
                {/* varification input field */}
                <input onChange={handleInputChange} type="text" placeholder="Type Number" className="input input-sm w-[117px] md:w-full mx-auto input-bordered" />
              </div>
              <label className="label">
                <p className="label-text-alt ">Don't Have Any Account? <Link className='link link-hoverF' to='/signup'>Click Here</Link></p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;