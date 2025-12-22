import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import useAuth from '../../Hooks/useAuth';
import Logo from '../../Components/Logo';

const DashBoardLayouts = () => {
    const { user, logOutUser } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logOutUser()
            .then(() => {
                toast.success('Logged out successfully');
                navigate('/');
            })
            .catch(() => toast.error('Logout failed'));
    };

    // Role-based menu configuration
    const menuConfig = {
        user: [
            { name: 'Home', path: '/' },
            { name: 'My Bookings', path: '/dashboard/bookings' },
            { name: 'Payment History', path: '/dashboard/payments' },
        ],
        admin: [
            { name: 'Home', path: '/' },
            { name: 'Manage Bookings', path: '/dashboard/admin/bookings' },
            { name: 'Manage Services', path: '/dashboard/admin/services' },
            { name: 'Manage Users', path: '/dashboard/admin/users' },
        ],
        decorator: [
            { name: 'Home', path: '/' },
            { name: 'My Projects', path: '/dashboard/decorator/projects' },
            { name: 'Update Status', path: '/dashboard/decorator/status' },
        ]
    };

    const role = user?.role || 'user';
    const menuItems = menuConfig[role];

    return (
        <div className="drawer lg:drawer-open min-h-screen bg-base-200">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

            {/* ================= MAIN CONTENT ================= */}
            <div className="drawer-content flex flex-col">
                {/* Top Navbar */}
                <div className="navbar bg-base-100 shadow-lg px-4">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="dashboard-drawer" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="w-6 h-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7"
                                />
                            </svg>
                        </label>
                    </div>

                    <div className="flex-1 text-2xl font-bold">
                        <Logo />
                    </div>

                    <button
                        onClick={handleLogout}
                        className="px-8 py-2 font-bold text-white rounded
                        bg-[#FF6B6B]
                        hover:bg-linear-to-r hover:from-[#FF6B6B] hover:to-[#FFD93D]
                        transition-all duration-500 ease-in-out hover:scale-105"
                    >
                        Logout
                    </button>
                </div>

                {/* Page Content */}
                <div className="flex-1 p-6 lg:p-10">
                    <Outlet />
                </div>
            </div>

            {/* ================= SIDEBAR ================= */}
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

                <aside className="menu p-6 w-80 h-full bg-base-100 text-base-content">
                    {/* User Profile */}
                    <div className="flex flex-col items-center mb-10">
                        <div className="avatar">
                            <div className="w-28 rounded-full ring ring-[#FF6B6B] ring-offset-base-100 ring-offset-4">
                                <img
                                    src={
                                        user?.photoURL ||
                                        'https://i.ibb.co.com/3f8wtPZ/author-img5.png'
                                    }
                                    alt="User"
                                />
                            </div>
                        </div>

                        <h2 className="mt-4 text-xl font-bold">
                            {user?.displayName || 'Guest'}
                        </h2>

                        <p className="text-sm text-gray-600">
                            {user?.email}
                        </p>

                        <span className="badge badge-outline mt-2">
                            {role.toUpperCase()}
                        </span>
                    </div>

                    {/* Menu Items */}
                    <ul className="space-y-3">
                        {menuItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className="block text-center px-8 py-2 font-bold text-white rounded
                                    bg-[#FF6B6B]
                                    hover:bg-gradient-to-r hover:from-[#FF6B6B] hover:to-[#FFD93D]
                                    transition-all duration-500 ease-in-out hover:scale-105"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>
        </div>
    );
};

export default DashBoardLayouts;
