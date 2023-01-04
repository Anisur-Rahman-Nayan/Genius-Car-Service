import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ManageServices = () => {
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
    
    const handleDelete=(id)=>{
        const proceed = window.confirm("Are You Sure ?");
        if(proceed){
            // console.log(id) 
            const url= `https://genius-car-service-server.up.railway.app/service/${id}`
            fetch(url,{
                method: 'DELETE'
            })
            .then(res=> res.json())
            .then(data=> {
                // console.log(data)
                const remaining = services.filter(service => service._id !== id)
                setServices(remaining)
            })
        }
    }

    return (
        <div className='w-50 mx-auto'>
            <h2 >Manage Your Services:</h2>
                {
                    services.map(service => <div key={service._id}>
                        <h5>{service.name} <button onClick={()=> handleDelete(service._id)}>X</button></h5>
                        
                    </div> )
                }
        </div>
    );
};

export default ManageServices;