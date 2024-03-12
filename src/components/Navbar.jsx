import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import navLinks from '../data/navLinks';
import MenuOverlay from './MenuOverlay';

const Navbar = () => {
    const [ navbarOpen, setNavbarOpen ]= useState(false)

    return(
        <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
            <div className="flex container lg:py-4 items-center justify-between mx-auto px-4 py-2">
            <Link
                href={"/"}
                className="text-2xl md:text-5xl text-white font-semibold"
            >
                LOGO
            </Link>
            <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
                <button
                    onClick={() => setNavbarOpen(true)}
                    className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            ) : (
                <button
                    onClick={() => setNavbarOpen(false)}
                    className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            )}
            </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <HashLink 
                                to={`/${link.path}`}
                                className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
                            >
                                {link.title}
                            </HashLink>
                        </li>
                    ))}
                </ul>                
            </div>
            
            </div>
            {navbarOpen ? <MenuOverlay /> : null}
        </nav>
    )
}

export default Navbar;