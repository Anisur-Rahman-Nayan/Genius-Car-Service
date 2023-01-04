import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Order = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([])
    useEffect(()=>{
        
        const getOrders = async ()=>{
            const email = user.email;
            const url = `https://genius-car-service-server.up.railway.app/order?email=${email}`;
            const {data} =  await axios.get(url)
            setOrders(data);
        }
        getOrders();
        

    },[])
    return (
        <div>
           <h2> Your Orders:{orders.length}</h2> 
        </div>
    );
};

export default Order;