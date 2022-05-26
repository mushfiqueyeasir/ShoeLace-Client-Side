import React from 'react';
import './MiniInventoryCard.css';

const MiniInventoryCard = ({ item, handleDelete }) => {
    const { _id, name, img, price, quantity } = item;
    if (quantity == 0) {
        console.log(name)
    }
    return (
        <div className='col'>
            <div className="card flex-row ">
                <div className="round d-flex justify-content-center align-items-center p-1">
                    <img src={img} className="" alt="..." style={{ height: '120px', width: '120px' }} />
                </div>
                <div className="card-body d-flex flex-column justify-content-between">

                    <h5 className="card-title fs-6 text-dark fw-bolder">{name}</h5>
                    <div className='d-flex justify-content-between'>
                        <h2 className='price fs-5'>${price}</h2>
                        {
                            quantity !== '0' ?
                                <h2 className='price fs-5'><i className="fas fa-sort-amount-up text-dark "></i>{quantity}</h2>
                                :
                                <h2 className='price fs-6 text-danger'><i className="fas fa-sort-amount-up text-danger"></i>Sold Out</h2>
                        }

                    </div>

                </div>
                <div className='d-flex align-items-center justify-content-center'>
                    <button id={_id} onClick={handleDelete} className='bttn fs-2'> <i className="fa-solid fa-trash-can text-danger"></i></button>
                </div>

            </div>

        </div >
    );
};

export default MiniInventoryCard;