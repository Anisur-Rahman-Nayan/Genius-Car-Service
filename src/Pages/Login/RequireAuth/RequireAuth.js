import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';

const RequireAuth = ({ children }) => {
    let location = useLocation();
    const [user, loading, error] = useAuthState(auth);
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);

    if(loading){
        return <Loading></Loading>
    }

    if(!user.emailVerified){
        return <div><h3 className='text-danger'>Your Email is not verified! </h3> <h5 className='text-success'> Please Verify your email address! </h5> 
            <button className='bt btn-primary'
        onClick={async () => {
          const success = await sendEmailVerification();
          if (success) {
            toast('Sent email');
          }
        }}
      >
       Send Verify email again
      </button>
      <ToastContainer></ToastContainer>

         </div>
    }

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
   
    return children;
};

export default RequireAuth;