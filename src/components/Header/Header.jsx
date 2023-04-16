import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Header.css'

const Header = () => {
    const navBars = [
        {id: 1, path: '/', title: 'Home'},
        {id: 2, path: '/about', title: 'About Us'},
        {id: 3, path: '/login', title: 'Log In'},
        {id: 4, path: '/register_rbs', title: 'Register RBS'},
    ]
    return (
        <nav className='nav w-75 mx-auto'>
            {
                navBars.map(nav => <NavLink
                    className={
                        ({isActive, isPending}) =>
                            isPending ?
                                "pending"
                                :
                                isActive ? "active" : "inactive"
                    }
                    key={nav.id} to={nav.path}>{nav.title}</NavLink>)
            }
        </nav>
    );
};

export default Header;