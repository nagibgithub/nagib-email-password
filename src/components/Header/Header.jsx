import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css'

const Header = () => {
    const navBars = [
        {
            id: 1,
            path: '/',
            title: 'Home'
        },
        {
            id: 2,
            path: '/about',
            title: 'About Us'
        },
        {
            id: 3,
            path: '/login',
            title: 'Log In'
        },
        {
            id: 4,
            path: '/register_rbs',
            title: 'Register RBS'
        },
        {
            id: 5,
            path: '/profile',
            title: 'Profile Information'
        },
    ]
    return (
        <nav className='flex flex-wrap container m-auto justify-center'>
            {
                navBars.map(nav => <div className='px-5 py-2'><NavLink
                    key={nav.id}
                    to={nav.path}
                    className={({isActive, isPending}) => isActive ? "bg-sky-200 py-2 px-5" : isPending ? "bg-gray-300 py-2 px-5" : "py-2 px-5"}
                >{nav.title}</NavLink></div>)
            }
        </nav>

    );
};

export default Header;