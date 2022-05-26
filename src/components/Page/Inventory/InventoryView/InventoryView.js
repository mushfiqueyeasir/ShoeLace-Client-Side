import axios from 'axios';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useSingleProduct from '../../../../hooks/useSingleProduct';
import InventoryCard from '../InventoryCard/InventoryCard';
import './InventoryView.css';

const InventoryView = () => {
    const { id } = useParams();
    const item = useSingleProduct(id);
    const temp = item[0];



    const handleDeliver = (event) => {
        const quantity = event.target.parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[0].children[2].children[1].children[1];



        if (quantity.innerText > 0) {
            quantity.innerText = quantity.innerText - 1;
            temp.quantity = quantity.innerText;
            delete temp._id;
            axios.put(`https://shoelace13.herokuapp.com/inventory/${id}`, temp);
        } if (quantity.innerText == 0) {
            quantity.innerText = 'Sold Out'
            try {
                quantity.parentNode.classList.add('text-danger');
                quantity.parentNode.children[0].children[0].classList.add('text-danger')

            } catch (error) {

            }
        }
    }

    const handleAddButton = (event) => {
        const quantityText = event.target.parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[0].children[2].children[1].children[1];

        const addValue = parseInt(event.target.parentNode.children[0].value);
        let quantityy;

        if (quantityText.innerText != 'Sold Out') {
            quantityy = parseInt(quantityText.innerText);
        } else {
            if (addValue > 0) {
                quantityy = parseInt(0);
                try {
                    quantityText.parentNode.classList.remove('text-danger');
                    quantityText.parentNode.children[0].children[0].classList.remove('text-danger');

                } catch (error) {

                }
            }
        }
        if (addValue > 0) {
            quantityText.innerText = quantityy + addValue;
            temp.quantity = quantityText.innerText;
            delete temp._id;
            axios.put(`https://shoelace13.herokuapp.com/inventory/${id}`, temp);

        }



    }

    return (
        <div className='container my-5'>

            <div className='d-flex justify-content-end'>
                <Link to='/manageItems' className='seeMore p-3'>Manage Inventories <i class="fa-solid fa-circle-right"></i></Link>
            </div>

            <div className="row">
                <div className="col-12 col-lg-6 order-2 order-lg-1">
                    {
                        item.map(product => <InventoryCard key={product._id} item={product} />)
                    }
                </div>

                <div className="col-12 col-lg-6 order-1 order-lg-2  d-flex flex-column justify-content-center align-items-center  mb-5 mb-lg-0">

                    <h2 className='text-center mb-5 fw-bold '>Update Item Quantity</h2>

                    <div className="d-flex  justify-content-center align-items-center ms-5">
                        <div className="">

                            <button onClick={handleDeliver} type="button" className="btn btn-danger">Deliver</button>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <input type="number" className='addInput' />
                            <button onClick={handleAddButton} className='addButton p-2 px-3'>Add Stock</button>
                        </div>

                    </div>

                </div>
            </div>


        </div>
    );
};

export default InventoryView;