import React from 'react';

const Loading = () => {

    const url = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    return (
        <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '400px' }} >
            <div className="spinner-border text-primary" role="status" style={{ height: '100px', width: '100px' }} />
            {
                url === 'myItem' ?
                    <h2 className='mt-3 fw-bolder'>Add Item</h2>
                    :
                    <></>
            }

        </div >

    );
};

export default Loading;