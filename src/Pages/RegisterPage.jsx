import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';

const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const handleRegisterSubmit = (data) => {
        console.log(data);
        // Later:
        // 1. Upload image
        // 2. Firebase create user
        // 3. Save user to database
    };
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
                        className="w-full px-8 py-2 font-bold text-white rounded bg-[#FF6B6B]
            hover:bg-gradient-to-r hover:from-[#FF6B6B] hover:to-[#FFD93D]
            transition-all duration-500 ease-in-out hover:scale-105"
                    >
                        Register
                    </button>
                </form>

                {/* Divider */}
                <div className="divider my-6">OR</div>

                {/* Google Signup */}
                <button className="btn btn-outline w-full mb-3">
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