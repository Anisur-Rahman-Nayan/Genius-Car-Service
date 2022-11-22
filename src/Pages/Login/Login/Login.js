import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {

    const navigate = useNavigate()
    let location = useLocation();

    const from = location.state?.from?.pathname || "/";
    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const emailRef = useRef('')
    const passwordRef = useRef('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log(email,password)
        signInWithEmailAndPassword(email, password)
    }
  

    if(user){
        navigate(from, { replace: true });
    }

    
    const navigateRegister=()=>{
        navigate('/register')
    }

    let errorElement;
    if (error) {
      errorElement = <div><p>Error: {error?.message} </p></div>
     }

     const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
      auth);

     const resetPassword=async()=>{
      const email = emailRef.current.value;
      const success = await sendPasswordResetEmail(email);
      if (success) {
        alert('Sent email');
      }

     }
    

    return (
        <div className='container mx-auto w-50 mt-2'>
           <h2 className='text-primary text-center'>Please Login</h2> 
           <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={emailRef} required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={passwordRef} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" name='terms' id='terms' label="Accept Genius Car Terms and Conditions" />
      </Form.Group>
      <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
        Login
      </Button>
    </Form>
    
    {errorElement}

    <p>New to Genius Car ?<Link to='/register' className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}> Please Register</Link></p>
    <p>Forget Password ?<Link to='/register' className='text-primary pe-auto text-decoration-none' onClick={resetPassword}> Reset Password</Link></p>
       
      <SocialLogin></SocialLogin>
       
        </div>
    );
};

export default Login;