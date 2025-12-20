import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        {/* Error Number */}
                        <h1 className="text-9xl font-bold text-error">404</h1>

                        {/* Error Message using the daisyUI alert component */}
                        <div role="alert" className="alert alert-warning mt-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <span>Error! Page not found.</span>
                        </div>

                        {/*Explanation */}
                        <p className="py-6">Sorry, we couldn't find the page you're looking for. It might have been removed or moved to a new location.</p>

                        {/* Call to Action Button */}
                        <Link to={"/"} className="btn btn-primary">Go Home</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ErrorPage;