import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
const CheckOut = () => {
    const [user] = useAuthState(auth);
    const {serviceId} = useParams()
    const [service, setService] = useState({})
    useEffect(()=>{
        const url = `https://genius-car-service-server.up.railway.app/service/${serviceId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=> setService(data))
    },[serviceId])

    const handlePlaceOrder =(e)=>{
        e.preventDefault();
        const order={
            name: user.displayName,
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: e.target.address.value,
            phone: e.target.phone.value,
        }
        // console.log(order)
        axios.post('https://genius-car-service-server.up.railway.app/order',order)
        .then(res=> {
            const {data} = res;
            if(data.insertedId){
                toast("Your Order Is Booked!!")
                e.target.reset();
            }
        })
        
    }

    return (
        <div className='w-50 mx-auto'>
            <ToastContainer></ToastContainer>
           <h2> please Order: {service.name}</h2>
            <form action="" onSubmit={handlePlaceOrder}>
                <br />
                <input className='w-100 mb-2' type="text" value={user?.displayName} readOnly disabled name="name" id="" placeholder='Name' required/>
                <br />
                <input className='w-100 mb-2' type="text" value={user?.email} readOnly disabled name="email" id="" placeholder='Email' required/>
                <br />
                <input className='w-100 mb-2' type="text" name="service" value={service.name} id="" placeholder='Service' required/>
                <br />
                <input className='w-100 mb-2' type="text" name="address" id="" placeholder='Address' autoComplete='off' required/>
                <br />
                <input className='w-100 mb-2' type="text" name="phone" id="" placeholder='Phone Number' required/>
                <br />
                <input type="submit" className='btn btn-primary' value="Place Order" />
            </form>
        </div>
    );
};

export default CheckOut;