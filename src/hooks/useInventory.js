import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useInventory = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        axios.get('https://shoelace13.herokuapp.com/inventory')
            .then(data => setInventories(data.data));
    }, [])
    return inventories;
};

export default useInventory;