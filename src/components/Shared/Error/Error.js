import React from 'react';
import './Error.css';
import nike from '../../../resources/nike.png'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='container d-flex flex-column justify-content-center align-items-center view'>
            <h1 className='text-center error mb-4'>404</h1>
            <img src={nike} alt="" className='' />
            <h1 className='text-center doit'>Just didn't do it</h1>

            <Link to='/home' className='doItButton py-2 px-5  mt-5'>Do IT.</Link>



        </div>
    );
};

export default Error;