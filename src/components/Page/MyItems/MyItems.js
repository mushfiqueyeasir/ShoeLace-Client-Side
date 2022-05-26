import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Auth/Loading/Loading';
import Footer from '../../Shared/Footer/Footer'
import auth from '../../../firebase.init';

import InventoryCard from '../Inventory/InventoryCard/InventoryCard';
import { signOut } from 'firebase/auth';


const MyItems = () => {
    const [inventories, setInventories] = useState([]);
    const [user, loading] = useAuthState(auth);
    const [id, setID] = useState([]);
    const navigate = useNavigate();



    useEffect(() => {

        const getProducts = async () => {
            const url = `https://shoelace13.herokuapp.com/myInventory?email=${user.email}`;

            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem(user.email)}`
                    }
                });
                setInventories(data);

            } catch (error) {
                if (error.response.status === 401) {
                    Swal.fire({
                        icon: 'error',
                        title: '401',
                        text: 'Unauthorized Access!',
                    })
                    signOut(auth);
                    navigate('/join');
                } else if (error.response.status === 403) {
                    Swal.fire({
                        icon: 'error',
                        title: '403',
                        text: 'Forbidden Access!',
                    })
                    signOut(auth);
                    navigate('/join');
                }

            }

        }
        getProducts();

    }, [user.email])

    if (inventories.length === 0) {
        return <Loading />
    }


    const url = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
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

    const handleDelete = (event) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                axios.delete(`https://shoelace13.herokuapp.com/inventory/${event.target.parentNode.id}`)
                console.log(event.target.parentNode.parentNode.parentNode.parentNode.classList.add('d-none'));
            }
        })

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


                {/*  My inventory */}

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3  ">
                    {
                        inventories.map(item => <InventoryCard key={item._id} item={item} handleModal={handleModal} handleDelete={handleDelete} />)
                    }
                </div>
            </div>

            {
                url === 'myItem' ?
                    <Footer />
                    :
                    <></>
            }

        </div>
    );
};

export default MyItems;