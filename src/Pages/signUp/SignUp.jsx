import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/slider/slider5.png'
import { AuthContext } from '../Provider/AuthProvider';
import { useForm } from 'react-hook-form';



const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    }


    const navigate = useNavigate()


    // const { createUser } = useContext(AuthContext);

    // const handleSignUp = event => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     console.log(name, email, password)

    //     createUser(email, password)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user)
    //             navigate('/')
    //         })
    //         .catch(error => console.log(error))

    // }


    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="hero-content flex-col  lg:flex-row">
                <div className="w-1/2 mr-12 rounded-full">
                    <img className='rounded-full' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body bg-green-300 rounded">
                        <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name'
                                {...register("name",{ required: true })} placeholder="name" className="input input-bordered" />
                                {errors.name && <span className='text-white bg-orange-600 text-center'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' {...register("photo",{ required: true })}placeholder="Photo URL" className="input input-bordered" />
                                {errors.photo && <span className='text-white bg-orange-600 text-center'>Photo is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' {...register("email",{ required: true })} placeholder="email" className="input input-bordered" />
                                
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' {...register("password",{ required: true })} placeholder="password" className="input input-bordered" />
                                {errors.password && <span className='text-white bg-orange-600 text-center'>Password is required</span>}
                               
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="text" name='password' {...register("password",{ required: true },{ required: true, maxLength: 20 })} placeholder="password" className="input input-bordered" />
                                {errors.password && <span className='text-white bg-orange-600 text-center'>Password is required</span>}
                               
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>Already Have an Account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;