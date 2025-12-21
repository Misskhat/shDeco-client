import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import useAuth from '../Hooks/useAuth';


const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { user, googleLogIn, logInUser } = useAuth()
    const location = useLocation()
    console.log(location);
    const navigate = useNavigate()
    const handleLoginSubmit = (data) => {
        // console.log(data)
        logInUser(data.email, data.password).then(res => {
            console.log(res)
            toast.success("Thank you for login  ")
            navigate(location?.state?.pathname || "/")

        }).catch(error => console.log(error))
    }

    const handleGoogleLogin = () => {
        googleLogIn().then((res) => {
            console.log(res)
            toast.success('Your are successfully login with your google account')
            navigate(location?.state?.pathname || "/")
        })
            .catch(error => console.log(error))
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

                {/* Brand */}
                <h1 className="text-3xl font-bold text-center mb-2">
                    <span className="text-[#FF6B6B]">sh</span>
                    <span className="text-[#FFD93D]">Deco</span>
                </h1>
                <p className="text-center text-gray-500 mb-6">
                    Login to manage your bookings
                </p>

                {/* Form */}
                <form className="space-y-4" onSubmit={handleSubmit(handleLoginSubmit)}>
                    <div>
                        <label className="label">
                            <span className="label-text font-medium">Email</span>
                        </label>
                        <input
                            {...register('email', { required: true })}
                            type="email"
                            placeholder="example@email.com"
                            className="input input-bordered w-full"

                        />
                        {errors.email?.type === "required" && <span className='text-red-500 text-sm mt-1'>Email ID required</span>}
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text font-medium">Password</span>
                        </label>
                        <input
                            {...register('password', { required: true, minLength: 6 })}
                            type="password"
                            placeholder="••••••••"
                            className="input input-bordered w-full"

                        />
                        {errors.password?.type === "required" && <span className='text-red-500 text-sm mt-1'>Password required</span>}
                        {errors.password?.type === "minLength" && <span className='text-red-500 text-sm mt-1'>Password must be 6 characters</span>}
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full px-8 py-2 font-bold text-white rounded bg-[#FF6B6B]
            hover:bg-gradient-to-r hover:from-[#FF6B6B] hover:to-[#FFD93D]
            transition-all duration-500 ease-in-out hover:scale-105"
                    >
                        Login
                    </button>

                </form>

                {/* Divider */}
                <div className="divider my-6">OR</div>

                {/* Social Login */}
                <button onClick={handleGoogleLogin} className="btn btn-outline w-full mb-3">
                    Continue with Google
                </button>

                {/* Register */}
                <p className="text-center text-sm mt-4">
                    Don’t have an account?{" "}
                    <Link to="/registerPage" className="text-[#FF6B6B] font-semibold">
                        Register
                    </Link>
                </p>
            </div>
        </div >
    );
};

export default LoginPage;