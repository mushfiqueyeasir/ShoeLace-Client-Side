import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
import banner1 from '../../../../resources/1.jpg';
import banner2 from '../../../../resources/2.jpg';
import banner3 from '../../../../resources/3.jpg';
const Banner = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide carousel-fade top" data-bs-ride="carousel">
            <div className="carousel-indicators mb-5">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>

            <div className="carousel-inner">

                <div className="carousel-item active" data-bs-interval="5000" >
                    <img src={banner1} className="img-fluid d-block w-100 cover" alt='Banner 1' />
                    <div
                        className="carousel-caption container w-100  d-flex flex-column align-items-center align-items-md-start justify-content-end  justify-content-md-center mb-5 mb-md-0">

                        <p className=" slogan ps-5 ps-md-0">Ultimate sneaker warehouse</p>
                        <h5 className="text-center text-md-start title1">Manage your sneaker's in the world's most highly advanced storehouse.</h5>

                        <Link to='/inventory' className=' my-5 startHere' >INVENTORY</Link>
                    </div>
                </div>

                <div className="carousel-item" data-bs-interval="5000">
                    <img src={banner2} className="img-fluid d-block w-100 cover" alt='Banner2' />
                    <div
                        className="carousel-caption container w-100  d-flex flex-column align-items-center align-items-md-start justify-content-end  justify-content-md-center mb-5 mb-md-0">

                        <p className="slogan ps-5 ps-md-0">Ultimate sneaker warehouse</p>
                        <h5 className="text-center text-md-start title1">Manage your sneaker's in the world's most highly advanced storehouse.</h5>

                        <Link to='/inventory' className=' my-5 startHere' >INVENTORY</Link>
                    </div>
                </div>

                <div className="carousel-item" data-bs-interval="5000">
                    <img src={banner3} className="img-fluid d-block w-100 cover" alt='Banner3' />
                    <div
                        className="carousel-caption container w-100  d-flex flex-column align-items-center align-items-md-start justify-content-end  justify-content-md-center mb-5 mb-md-0  ">

                        <p className=" slogan ps-5 ps-md-0">Ultimate sneaker warehouse</p>
                        <h5 className="text-center text-md-start title1">Manage your sneaker's in the world's most highly advanced storehouse.</h5>

                        <Link to='/inventory' className='my-5 startHere' >INVENTORY</Link>
                    </div>
                </div>

            </div>


            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Banner;