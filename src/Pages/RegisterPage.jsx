import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../Hooks/useAuth';
import { toast } from 'react-toastify';

const RegisterPage = () => {
    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()
    // console.log(navigate)
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const { signUpUser, googleLogIn } = useAuth()

    const handleRegisterSubmit = (data) => {
        console.log(data);
        signUpUser(data.email, data.password).then(res => {
            console.log(res)
            toast.success("Thank you for signup")
            navigate(location?.state?.pathname || "/")

        }).catch(error => console.log(error))
    };

    const handleGoogleLogIn = () => {
        googleLogIn().then(res => {
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
                    <span className="text-[#FF6B6B]">Style</span>
                    <span className="text-[#FFD93D]">Decor</span>
                </h1>
                <p className="text-center text-gray-500 mb-6">
                    Create your account
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit(handleRegisterSubmit)} className="space-y-4">

                    {/* Name */}
                    <div>
                        <label className="label">
                            <span className="label-text font-medium">Full Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="input input-bordered w-full"
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="label">
                            <span className="label-text font-medium">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="example@email.com"
                            className="input input-bordered w-full"
                            {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="label">
                            <span className="label-text font-medium">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="input input-bordered w-full"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters"
                                }
                            })}
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Profile Image */}
                    <div>
                        <label className="label">
                            <span className="label-text font-medium">
                                Profile Image (optional)
                            </span>
                        </label>
                        <input
                            type="file"
                            className="file-input file-input-bordered w-full"
                            {...register("image")}
                        />
                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full px-8 py-2 font-bold text-white rounded bg-[#FF6B6B] hover:bg-linear-to-r hover:from-[#FF6B6B] hover:to-[#FFD93D] transition-all duration-500 ease-in-out hover:scale-105"
                    >
                        Register
                    </button>

                </form>

                {/* Divider */}
                <div className="divider my-6">OR</div>

                {/* Google Signup */}
                <button onClick={handleGoogleLogIn} className="btn btn-outline w-full mb-3">
                    Continue with Google
                </button>

                {/* Login Link */}
                <p className="text-center text-sm mt-4">
                    Already have an account?{" "}
                    <Link to="/loginPage" className="text-[#FF6B6B] font-semibold">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;