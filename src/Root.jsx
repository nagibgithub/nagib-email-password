import React from 'react';
import Header from './components/Header/Header';
import {Outlet} from 'react-router-dom';

const Root = () => {
    return (
        <div className=''>
            <Header></Header>  
            <Outlet></Outlet>
        </div>
    );
};

export default Root;