import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';


const Register = () => {


  const [agree, setAgree] = useState(false)

    const navigate = useNavigate()
    let location = useLocation();

    const from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth , {sendEmailVerification: true});

      const [updateProfile, updating, updateError] = useUpdateProfile(auth);


const navigateRegister=()=>{
    navigate('/login');
}

const handleSubmit= async (e)=>{
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value;
    // const agree = e.target.terms.checked;

    
      await createUserWithEmailAndPassword(email, password)
      await updateProfile({ displayName: name});
            alert('Updated profile');
  // console.log(name,email,password)
}

if(user){
    navigate(from, { replace: true });
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
        <Form.Check className={agree ? 'text-success':'text-danger'} type="checkbox" onClick={()=>setAgree(!agree)} name='terms' id='terms'  label="Accept Genius Car Terms and Conditions" />
      </Form.Group>
      <Button disabled={!agree} variant="primary w-50 mx-auto d-block mb-2" type="submit">
        Register
      </Button>
    </Form>
    <p>Already have an account ?<Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}> Please Login</Link></p>

      <SocialLogin></SocialLogin>

        </div>
    );
};

export default Register;