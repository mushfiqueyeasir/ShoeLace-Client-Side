import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2'
import Loading from '../../Auth/Loading/Loading';
import MiniInventoryCard from '../Inventory/MiniInventoryCard/MiniInventoryCard';
import './ManageInventory.css';
import useInventory from '../../../hooks/useInventory';
import { Link } from 'react-router-dom';
import './ManageInventory.css';


const ManageInventory = () => {
    const inventories = useInventory();

    if (inventories.length === 0) {
        return <Loading />
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
                event.target.parentNode.parentNode.parentNode.classList.add('d-none');
            }
        })


    }

    return (
        <div>
            <div className='container my-5 manage'>

                <div className='d-flex justify-content-end'>
                    <Link to='/addItem' className='seeMore p-3'>Add Item <i class="fa-solid fa-circle-right"></i></Link>
                </div>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4  ">
                    {
                        inventories.map(item => <MiniInventoryCard key={item._id} item={item} handleDelete={handleDelete} />)
                    }
                </div>
            </div>




        </div>
    );
};

export default ManageInventory;