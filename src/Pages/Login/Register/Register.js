import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {



const navigate = useNavigate()
const navigateRegister=()=>{
    navigate('/login');
}

const handleSubmit=(e)=>{
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value;

    console.log(name,email,password)
}

    return (
        <div className='container mx-auto w-50 mt-2'>
            <h2 className='text-primary text-center'>Please Register</h2>
            <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" name='name' required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email'  required />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
    <p>Already have an account ?<Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}> Please Login</Link></p>

        </div>
    );
};

export default Register;