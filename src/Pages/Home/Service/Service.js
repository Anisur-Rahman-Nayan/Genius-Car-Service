import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
    const {_id,name,img,description,price} = props.service
    const navigate = useNavigate()

    const navigateToServiceDetail=(id)=>{
        navigate(`/service/${id}`)
    }

    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p><small>{description}</small></p>
            <button onClick={()=>navigateToServiceDetail(_id)} className='btn btn-primary'>BOOK : {name}</button>

            
        </div>
    );
};

export default Service;