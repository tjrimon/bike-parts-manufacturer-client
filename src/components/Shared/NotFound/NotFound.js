import React from 'react';
import notFoundImage from "../../../images/notfound.png"

const NotFound = () => {
    return (
        <div className='flex justify-center py-32 border-t-2 border-gray-100'>
            <img src={notFoundImage} alt="" />
        </div>
    );
};

export default NotFound;