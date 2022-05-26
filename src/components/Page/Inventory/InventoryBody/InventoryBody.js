import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useInventory from '../../../../hooks/useInventory';
import Loading from '../../../Auth/Loading/Loading';
import InventoryCard from '../InventoryCard/InventoryCard';
import Footer from '../../../Shared/Footer/Footer'
import './InventoryBody.css';

const InventoryBody = () => {
    const inventories = useInventory();
    const [id, setID] = useState([]);

    if (inventories.length === 0) {
        return <Loading />
    }


    const url = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    let length = inventories.length;
    if (url === 'home' || !url) {
        length = 6;
    }

    const popupProduct = inventories.find(item => item._id === id);
    let name, description, price, quantity, supplyerName;
    if (popupProduct) {
        name = popupProduct.name
        description = popupProduct.description;
        price = popupProduct.price;
        quantity = popupProduct.quantity;
        supplyerName = popupProduct.supplyerName;

    }


    const handleModal = async (event) => {
        await setID(event.target.id);
    }
    return (
        <div>
            <div className='container mb-5'>
                {/* Modal */}
                <div className="modal  fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog  modal-dialog-centered">

                        <div className="modal-content">
                            <div className="col">
                                <div className="card shadow p-3 round zoom">

                                    <div className="card-body">
                                        <h5 className="card-title">{name}</h5>
                                        <h5 className="card-title">{supplyerName}</h5>
                                        <p className="card-text">{description}</p>
                                    </div>
                                    <div
                                        className="d-flex justify-content-lg-between justify-content-md-between justify-content-between product-price mx-lg-2 mx-md-2 mx-sm-2 mx-2">

                                        <h2 className='price'>${price}</h2>
                                        <h2 className='price'><i className="fas fa-sort-amount-up"></i>{quantity}</h2>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>



                {/* inventory */}
                <div className='mt-5'>

                    {
                        url === 'inventory' ?
                            <></>
                            :
                            <>
                                <div className='d-flex align-items-center ps-5'>
                                    <div className="line me-2"></div>
                                    <h2 className='fw-bolder '>INVENTORY</h2>
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <Link to='/inventory' className='seeMore p-3'>See All <i className="fa-solid fa-circle-chevron-down"></i></Link>
                                </div>
                            </>

                    }

                </div>
                {
                    url === 'inventory' ?
                        <div className='d-flex justify-content-end'>
                            <Link to='/manageItems' className='seeMore p-3'>Manage Inventories <i class="fa-solid fa-circle-right"></i></Link>
                        </div>
                        :
                        <></>
                }

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" >
                    {
                        inventories.slice(0, length).map(item => <InventoryCard key={item._id} handleModal={handleModal} item={item} />)
                    }
                </div>


            </div>

            {
                url === 'inventory' ?
                    <Footer />
                    :
                    <></>
            }

        </div>
    );
};

export default InventoryBody;