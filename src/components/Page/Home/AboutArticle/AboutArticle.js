import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../../firebase.init';
import './AboutArticle.css';

const AboutArticle = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='container my-5 d-flex '>

            <div className="row">
                <div className="col-12 col-lg-6 p-3 p-lg-5  order-1 ">
                    <img src="https://templatekit.jegtheme.com/shoelace/wp-content/uploads/sites/191/2021/10/handsome-young-man-in-yellow-hoodie-with-white-PNM2AEH.jpg" alt="" className='img-fluid rounded-3' />
                </div>
                <div className="col-12 col-lg-6 pt-4 order-2 p-4">
                    <p className='text-info mb-2 fw-bold'>About Us</p>
                    <h1 className='fw-bold'>Stay at Home, We Make it Done for you.</h1>
                    <p>We take care your Shoe,Sneakers and Boot in our well organized warehouse. We maintain the proper temperature which  is suitable for  your  shoes for long term storage. And we also supply shoe horns for your shoes so  that you don't have to go for hassle to arrange this. And we also provide security and storage management of  your product so you can manage your stuff from home.</p>

                    <ul className='list mb-5'>
                        <li>Have Proper Delivery Team</li>
                        <li>Well Controlled Temperature</li>
                        <li>Online  Product Management</li>
                        <li>Advance Security</li>
                    </ul>

                    {
                        user ?
                            <></>
                            :
                            <Link to='/join' className='joinButton '>Join Us</Link>
                    }

                </div>

            </div>



        </div>
    );
};

export default AboutArticle;

