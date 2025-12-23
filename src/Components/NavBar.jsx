import React from 'react';
import { Link } from 'react-router';
import Logo from './Logo';
import useAuth from '../Hooks/useAuth';
import { toast } from 'react-toastify';

const NavBar = () => {
  const { user, logOutUser } = useAuth()
  const list = <>
    <li><Link to={"/"} className='font-semibold'>Home</Link></li>
    <li><Link to={"servicesPage"} className='font-semibold'>Services Page</Link></li>
    <li><Link to={"mapPage"} className='font-semibold'>About Us</Link></li>
    {
      user && <li><Link to={"dashboard"} className='font-semibold'>DashBoard</Link></li>
    }
  </>

  const handleLogOutUser = () => {
    logOutUser().then(() => toast.success('Successfully LogOut')).catch(error => console.log(error))
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {list}
          </ul>
        </div>
        <Logo></Logo>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {list}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? <button onClick={handleLogOutUser} className="px-8 text-white font-bold py-2 rounded bg-[#FF6B6B] hover:bg-linear-to-r from-[#FF6B6B] to-[#FFD93D] transition-all duration-500 ease-in-out hover:scale-105">Log Out</button> : <Link to={"/loginPage"} className="px-8 text-white font-bold py-2 rounded bg-[#FF6B6B] hover:bg-linear-to-r from-[#FF6B6B] to-[#FFD93D] transition-all duration-500 ease-in-out hover:scale-105">Login</Link>}
      </div>
    </div>
  );
};

export default NavBar;