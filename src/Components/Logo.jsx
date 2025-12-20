import React from 'react';
import { Link } from 'react-router';

const Logo = () => {
    return (
        <div>
            <Link to={"/"} className="bg-linear-to-r from-[#FF6B6B] to-[#FFD93D] text-xl py-3 px-5  text-white font-bold rounded">shDeco</Link>
        </div>
    );
};

export default Logo;