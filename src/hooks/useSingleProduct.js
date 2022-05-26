import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useSingleProduct = (id) => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        axios.get(`https://shoelace13.herokuapp.com/inventory/${id}`)
            .then(data => setInventories(data.data));
    }, [id])
    return inventories;
};

export default useSingleProduct;