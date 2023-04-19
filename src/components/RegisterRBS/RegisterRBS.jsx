import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCoffee, faEyeSlash, faEye, faArrowRight} from '@fortawesome/free-solid-svg-icons'

const RegisterRBS = () => {

    const [type, setType] = useState(true)

    return (
        <div className='md:w-3/4 lg:w-1/2 xl:w-7/12 m-auto rounded-lg shadow-2xl shadow-sky-300'>
            <h1 className='m-auto text-center border-2 border-sky-100 border-b-0 py-2 font-bold text-lg rounded-t-lg'>Sigh Up Form</h1>
            <form action="" className='m-auto border-2 rounded-b-lg border-sky-100 p-6'>
                <div className='sm:grid sm:grid-cols-5 sm:items-center'>
                    <label className='col-span-1' for='email' >Email Address: </label>
                    <input className='col-span-4 pl-3  py-2 border-2 border-sky-200 focus:outline-2 focus:outline-sky-500 bg-sky-50 rounded-lg' name='email' id='email' type="email" placeholder='Your email @' required />
                </div>
                <br />
                <div className='grid grid-cols-5 items-center'>
                    <label className='col-span-1' for='password'>Password: </label>
                    <div className='flex items-center col-span-4'>
                        <input className='w-full pl-3 py-2 border-2 border-sky-200 focus:outline-2 focus:outline-sky-500 bg-sky-50 rounded-lg' name='password' id='password' type={type ? 'password' : 'text'} placeholder='Type a password' required />
                        <div className='ml-1 cursor-pointer w-12 h-11 rounded-full flex justify-center items-center border-2 bg-sky-50 border-sky-200 text-sky-500 active:border-sky-500' onPointerLeave={() => setType(true)} onPointerDown={() => setType(false)} onPointerUp={() => setType(true)} >{type ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}</div>
                    </div>
                </div>
                <br />
                <div className='w-full flex'>
                    <input className='py-2 w-1/2 active:w-5/12 m-auto text-white font-bold bg-gradient-to-r from-sky-400 to-purple-500 hover:from-pink-500 hover:to-yellow-500 cursor-pointer border-t-8 border-b-8 border-transparent active:border-white' type="submit" />
                </div>
            </form>
        </div>
    );
};

export default RegisterRBS;