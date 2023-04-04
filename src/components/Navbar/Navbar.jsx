import React, { useState } from 'react';
import './Navbar.css'
import Link from '../Link/Link';
import {  Bars3Icon , XMarkIcon } from '@heroicons/react/24/solid'


const Navbar = () => {
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Contact', path: '/contact' },
        { id: 4, name: 'Products', path: '/products' },
        { id: 5, name: 'Services', path: '/services' }
      ];
      
      const [open , setOpen] = useState(false);

    return (
        <div className='lg:container mx-auto  p-2 font-semibold   bg-gray-600 lg:text-white'>
            <div className='flex flex-row-reverse items-center justify-between'>
                <button onClick={() => setOpen(!open)} className='lg:hidden'>
                    <span>{open === true ? 
                        <XMarkIcon className="h-10 w-10 text-white" /> : 
                        <Bars3Icon className="h-10 w-10 text-white" />}
                    </span>
                </button>
                <img className='h-16 w-16 rounded-full lg:hidden' src='https://images.unsplash.com/photo-1677856217095-65c6e0e4bd70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' />                
            </div>
            <nav className='flex items-center justify-between'>
                <img className='h-16 w-16 rounded-full hidden lg:block' src='https://images.unsplash.com/photo-1677856217095-65c6e0e4bd70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' />
                <ul className={`lg:flex text-xl absolute lg:static duration-500 ${open ? `top-20 right-0` : `-top-48 right-0`}`}>
                    {
                        routes.map(route => <Link
                        key={route.id}
                        route = {route}
                        ></Link>)
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;