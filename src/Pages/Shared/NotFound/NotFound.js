import React from 'react';
import error from '../../../images/download.png'

const NotFound = () => {
    return (
        <div style={{textAlign:'center',marginTop:'50px'}}>
            <img src={error} alt="" />
        </div>
    );
};

export default NotFound;