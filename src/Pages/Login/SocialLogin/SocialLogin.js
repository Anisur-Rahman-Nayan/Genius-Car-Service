import React from 'react';
import google from '../../../images/logo-removebg-preview.png' 
import facebook from '../../../images/facebook-removebg-preview.png'
import github from '../../../images/github-removebg-preview.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let location = useLocation();

    const from = location.state?.from?.pathname || "/";

    console.log(user)    

    let errorElement;

    if (error || error1) {
         errorElement = <div><p>Error: {error?.message} {error1?.message}</p></div>
        }

      if(user || user1){
        navigate(from,{replace: true})
      }


    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height:'1px'}} className='bg-primary w-50'></div>
                <p className='mt-3 px-2'>OR</p>
                <div style={{height:'1px'}} className='bg-primary w-50'></div>
            </div>

                {errorElement}
            
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary w-50 d-block mx-auto my-2'> 
                 <img style={{width:'30px'}} src={google} alt="" />
                 <span>Google Sign In</span>
                 </button>
                <button className='btn btn-primary w-50 d-block mx-auto my-2'> 
                 <img style={{width:'30px'}} src={facebook} alt="" />
                 <span>Facebook Sign In</span>
                 </button>
                <button onClick={() => signInWithGithub()} className='btn btn-primary w-50 d-block mx-auto my-2'> 
                 <img style={{width:'30px'}} src={github} alt="" />
                 <span>Github Sign In</span>
                 </button>
            </div>
        </div>
    );
};

export default SocialLogin;