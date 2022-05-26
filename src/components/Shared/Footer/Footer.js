import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='bg-dark'>
            <div className='container mb-5 py-3 bg-dark'>
                <div className="row text-white">
                    <div className="col-12 col-lg-4 order-1 px-lg-0 pt-0 pt-lg-5">
                        <h4>About</h4>
                        <p>We  will keep you product in your care with most secure and protective way so that you can stay tension free and manage your products from home.</p>

                    </div>

                    <div className="col-12 col-lg-4 order-2 mb-5 pt-0 pt-lg-5 mb-lg-0 d-flex flex-column align-items-start align-items-lg-center">
                        <h4>Useful Links</h4>
                        <ul className='links' >
                            <li><Link to='/inventory'>Inventory</Link></li>
                            <li> <Link to='/manageItems'>Manage Items</Link></li>
                            <li><Link to='/myItem'>My Items</Link></li>
                        </ul>
                    </div>

                    <div className="col-12 col-lg-4 order-3 mb-5 pt-0 pt-lg-5 mb-lg-0 d-flex flex-column align-items-start align-items-lg-center">
                        <h4 className='text-center'>Contact</h4>
                        <ul >
                            <li>Phone: +88 01624821466</li>
                            <li>Address: Jahurul Islam City Gate, A/2 Jahurul Islam Ave, Dhaka 1212 </li>
                        </ul>
                    </div>

                </div>
                <div >
                    <hr />
                </div>


                <p className='text-center text-white copyright mt-3'>Copyright ©2022 All rights reserved | This template is made with 💙  by <a target='__blank' href="https://github.com/mushfiqueyeasir"><strong className='text-info'>Mushfique Yeasir</strong></a> </p>

            </div>

        </footer>

    );
};

export default Footer;