import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'


const Services = () => {

const [services, setServices] = useState([])
    
    // useEffect(()=>{
    //     fetch('services.json')
    //     .then(res=> res.json())
    //     .then(data=>setServices(data))
    // },[])

    useEffect(()=>{
        fetch('https://genius-car-service-server.up.railway.app/services')
        .then(res => res.json())
        .then(data=> setServices(data))
    },[])

    return (
        <div className='container' id="services">
            <h1 className='services-title mt-5'>Our Services</h1>
        <div  className='services-container'>
            {
                services.map(service => <Service service={service} key={service._id}></Service>)
            }
        </div>
        </div>
    );
};

export default Services;