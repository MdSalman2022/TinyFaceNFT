import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Header = () => {
    return (
        <div className="navbar bg-base-100 container mx-auto mb-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>Features</a></li>
                        <li><a>About</a></li>
                        <li><a>Contact</a></li>
                        <li><a className="btn bg-transparent border-none text-secondary mr-2 w-full font-normal">Login</a></li>
                        <li><a className="btn btn-primary text-white w-full font-normal shadow-sm">Sign up</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">
                    <LazyLoadImage className='w-44' src="https://i.ibb.co/44Z94m3/logo.png" alt="logo" border="0" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Features</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
            <div className="navbar-end hidden lg:flex">
                <a className="btn bg-transparent border-none text-secondary mr-2 w-36 font-normal">Login</a>
                <a className="btn btn-primary text-white w-36 font-normal shadow-sm">Sign up</a>
            </div>
        </div>
    );
};

export default Header;