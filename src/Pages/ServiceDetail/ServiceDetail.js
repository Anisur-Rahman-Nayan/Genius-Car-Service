import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams()
    const [service, setService] = useState({})
    useEffect(()=>{
        const url = `https://genius-car-service-server.up.railway.app/service/${serviceId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=> setService(data))
    },[])
    return (
        <div>
            <h4 className='text-center'>Welcome! You are about to book: {service.name}</h4>
            <img  src={service.img} alt="" />
            <div className='text-center'>
            <Link to={`/checkout/${serviceId}`}> <button className='btn btn-primary'>Proceed Checkout</button> </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;