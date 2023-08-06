import React from 'react';
import loginLogo from '../../assets/login.png'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
const Signup = () => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
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
            <div className='grid gap-1'>
             <img className='max-w-[250px]' src={loginLogo} alt="" />
              <h1  className='w-[300px] text-3xl lg:text-5xl font-bold'>Signup Now</h1>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name:</span>
                  </label>
                  <input {...register("name", { required: true })} type="text" placeholder="Name" className="input input-bordered" />
                  {errors.name && <span>Name field is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                  {errors.email && <span>Email field is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input {...register("address", { required: true })} type="text" placeholder="Address" className="input input-bordered" />
                  {errors.email && <span>Address field is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input {...register("password", { required: true, pattern: {value: passwordRegex,message:'Password must contain at least 6 characters, one letter, one number, and one special character',}, })} type="text" placeholder="password" className="input input-bordered" />
                  {errors.password && <span>Password field is required</span>}
                  {errors.password && <p>{errors.password.message}</p>}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Signup Now</button>
                </div>
                <label className="label">
                  <p className="label-text-alt ">Already Have Any Account? <Link className='link link-hoverF' to='/signup'>Click Here</Link></p>
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;