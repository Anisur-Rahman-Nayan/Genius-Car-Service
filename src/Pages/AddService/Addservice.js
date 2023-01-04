import React from 'react';
import { useForm } from "react-hook-form";

const Addservice = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
        console.log(data)
        const url = `https://genius-car-service-server.up.railway.app/service`
        fetch(url,{
            method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((result) => {
    console.log('Success:', result);
  })
  .catch((error) => {
    console.error('Error:', error);
        })
    };
    return (
        
        <div className='w-50 mx-auto'>
            <h2>Please Add A Service</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input className='mb-2' placeholder="Name" {...register("name")} />
      
      {/* register your input into the hook by invoking the "register" function */}
      <textarea className='mb-2' placeholder="Description" {...register("description")} />
     
      {/* register your input into the hook by invoking the "register" function */}
      <input className='mb-2' placeholder="Price" {...register("price")} />
      
      {/* register your input into the hook by invoking the "register" function */}
      <input className='mb-2' placeholder="IMG URL" {...register("img")} />
      
      
      <input type="submit" value='Add Service' />
    </form>
            
        </div>
    );
};

export default Addservice;