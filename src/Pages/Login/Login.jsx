import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/slider/slider6.png'
import { getAuth } from 'firebase/auth';
import { app } from '../../Fairbase/Firebase.config';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const auth = getAuth(app)
    

   
   
    const navigate = useNavigate()
    const location = useLocation();

    const { signIn } = useContext(AuthContext);
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from , {replace: true})
            })
            .catch(error => console.log(error));
    }
   
    return (
        <div className="hero  min-h-screen bg-base-200">
             
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img className='rounded-full' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body  bg-blue-400">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <div className='text-center'>
                                <SocialLogin></SocialLogin>
                            
                            </div>
                            
                        </form>
                        <p className='my-4 text-center'>New to Arsenal Sports Club <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;