import React, { useState } from 'react';
import './Join.css';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
import googleLogo from '../../../resources/icons8-google-96.png';
import facebookLogo from '../../../resources/icons8-facebook-96.png';
import gitLogo from '../../../resources/icons8-github-96.png';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { emailValidation, nameValidation, passwordValidation, phoneValidation } from '../../../hooks/validation';
const Join = () => {


    const [name, setSignUpName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [errorMessageSingup, setErrorMessageSignup] = useState('');

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');


    // defineed location


    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';


    // handled input filed
    const handleLoginEmailBlur = event => {
        setLoginEmail(event.target.value)
    }
    const handleLoginPasswordBlur = event => {
        setLoginPassword(event.target.value)
    }

    const handleSignUpNameBlur = event => {
        setSignUpName(event.target.value);
    }

    const handleSignUpEmailBlur = event => {
        setSignUpEmail(event.target.value);
    }
    const handleSignUpPasswordBlur = event => {
        setSignUpPassword(event.target.value);
    }
    const handleSignUpPhonedBlur = event => {
        setPhoneNumber(event.target.value);
    }


    // handled flip cover
    const loginItems = document.getElementsByClassName('left');
    const signupItems = document.getElementsByClassName('right');
    const column = document.getElementsByClassName('col-12');

    const signIn = () => {
        loginItems[0].classList.add('active');
        loginItems[1].classList.remove('active');
        signupItems[0].classList.remove('active');
        signupItems[1].classList.add('active');

        column[0].classList.add('backgound');
        column[1].classList.remove('backgound');
    }

    const logIn = () => {
        loginItems[0].classList.remove('active');
        loginItems[1].classList.add('active');
        signupItems[0].classList.add('active');
        signupItems[1].classList.remove('active');

        column[1].classList.add('backgound');
        column[0].classList.remove('backgound');
    }



    // create user with email

    const [
        createUserWithEmailAndPassword
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });



    const handleCreateuser = async event => {
        event.preventDefault();
        if (document.getElementsByClassName('text-success').length === 4) {
            await createUserWithEmailAndPassword(signUpEmail, signUpPassword)
                .then(() => {
                    Swal.fire({
                        icon: 'info',
                        title: 'Verification Email Sent'
                    })

                    updateProfile(auth.currentUser, {
                        displayName: name
                    }).catch((error) => {
                        setErrorMessageSignup("Email Already Exist!")
                    });

                })
        } else {
            return;
        }
    }


    // sign with other (google,faceook,git)
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithFacebook] = useSignInWithFacebook(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);



    // sign in with email and password 
    const handleEmailSignIn = event => {
        event.preventDefault();
        if (document.getElementsByClassName('text-success').length === 2) {
            signInWithEmailAndPassword(auth, loginEmail, loginPassword)
                .catch((error) => {

                    if (error.message === 'Firebase: Error (auth/user-not-found).')
                        setErrorMessage('Invalid Email!')
                    else if (error.message === 'Firebase: Error (auth/wrong-password).')
                        setErrorMessage('Invalid Password!')
                    else
                        setErrorMessage('');
                });

        } else {
            return;
        }
    }

    // sign in with google 

    const handleGoogleSignIn = () => {
        signInWithGoogle()

    }
    const handleFacebookSignIn = () => {
        signInWithFacebook()

    }
    const handleGithubSignIn = () => {
        signInWithGithub()
            .catch((error) => {

                console.log(error)
            });

    }

    // reset  Password 
    const resetPassword = async () => {

        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(loginEmail) || !loginEmail) {
            setErrorMessage('Enter Valid Email!')
        } else if (loginEmail) {
            await sendPasswordResetEmail(auth, loginEmail).then(() => {
                toast('Email Sent!!');
            }).catch((error) => {

                if (error.message === 'Firebase: Error (auth/user-not-found).')
                    setErrorMessage('Invalid Email!')
                else
                    setErrorMessage('');
            });
        }

    }


    return (

        <div className="d-flex flex-column align-items-center my-0 my-xxl-5 px-2 px-lg-0">
            <div className='container wide row my-5 box p-0 rounded-3'>
                {/* login */}
                <div className=' col-12 col-lg-6 p-0 d-flex justify-content-center align-items-center '>

                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item h-auto flipCover left w3-animate-left">
                                <div className='p-5 d-flex flex-column align-items-center backCover'>
                                    <h1 className='text-center text-white fw-bold'>Welcome Back!</h1>
                                    <p className='text-center text-white fs-6'>To keep connected with Us please login with your personal info</p>
                                    <button onClick={logIn} className='btn btn-cover'>Sign In</button>
                                </div>
                            </div>

                            <div className="carousel-item h-auto left w3-animate-zoom  active">
                                <div className="grid align mt-5 p-0">
                                    <form onSubmit={handleEmailSignIn} className="form login m-0">
                                        {/* error */}
                                        <div className="form__field justify-content-center">
                                            <p className='text-danger fs-6 fw-bold'>{errorMessage}</p>
                                        </div>

                                        {/* email */}
                                        <div className="form__field">
                                            <label><i className="fa-solid fa-envelope"></i><span className="hidden"></span></label>
                                            <input onBlur={handleLoginEmailBlur} onChange={emailValidation} type="email" className="form__input" placeholder="Email" required />
                                        </div>

                                        {/* password */}
                                        <div className="form__field">
                                            <label><i className="fa-solid fa-key"></i></label>
                                            <input onBlur={handleLoginPasswordBlur} onChange={passwordValidation} type="password" className="form__input" placeholder="Password" required />
                                        </div>

                                        <div className="form__field">
                                            <input type="submit" value="Sign In" />
                                        </div>

                                    </form>

                                    <div className="d-flex  mt-1 ">
                                        <h5 className='text-dark fs-6'>
                                            Forget Password?
                                            <span><button onClick={resetPassword} className='reset'>Reset Password</button></span>
                                            <ToastContainer />
                                        </h5>
                                    </div>

                                    <div className="d-flex w-100 align-items-center ">
                                        <hr className='w-100' />
                                        <h4 className='text-dark mx-2'>or</h4>
                                        <hr className='w-100' />
                                    </div>

                                    <div className="form__field justify-content-center mt-3 mb-5">
                                        <button onClick={handleGoogleSignIn} className='btnn'><img className='img-fluid imgWidth' src={googleLogo} alt='' /></button>
                                        <button onClick={handleFacebookSignIn} className='btnn'><img className='img-fluid imgWidth' src={facebookLogo} alt='' /></button>
                                        <button onClick={handleGithubSignIn} className='btnn'><img className='img-fluid imgWidth' src={gitLogo} alt='' /></button>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* signup */}
                <div className='col-12 col-lg-6 p-0 d-flex justify-content-center align-items-center backgound '>

                    <div id="carouselExampleControls" className="carousel slide d-flex justify-centent-center align-items-center" data-ride="carousel">
                        <div className="carousel-inner ">

                            <div className="carousel-item h-auto flipCover right  w3-animate-right active">
                                <div className='p-5 d-flex flex-column align-items-center'>
                                    <h1 className='text-center text-white'>Don't Have an Account?</h1>
                                    <p className='text-center text-white'>Enter your personal details and start journey with us</p>
                                    <button onClick={signIn} className='btn btn-cover'>Sign Up</button>
                                </div>
                            </div>

                            <div className="carousel-item h-auto right pt-5 pb-4 w3-animate-zoom ">
                                <div className="grid align my-2 mb-3">
                                    <form onSubmit={handleCreateuser} className="form login">
                                        <div className="form__field justify-content-center">
                                            <p className='text-danger fs-6 fw-bold'>{errorMessageSingup}</p>

                                        </div>

                                        {/* Name */}
                                        <div className="form__field">
                                            <label><i className="fa-solid fa-user"></i><span className="hidden"></span></label>
                                            <input onBlur={handleSignUpNameBlur} onChange={nameValidation} type="text" className="form__input" placeholder="Name" required />
                                        </div>
                                        {/* Email */}
                                        <div className="form__field">
                                            <label><i className="fa-solid fa-envelope"></i><span className="hidden"></span></label>
                                            <input onBlur={handleSignUpEmailBlur} onChange={emailValidation} type="email" className="form__input" placeholder="Email" required />
                                        </div>

                                        {/* phone number */}
                                        <div className="form__field">
                                            <label><i className="fa-solid fa-phone"></i><span className="hidden"></span></label>
                                            <input onBlur={handleSignUpPhonedBlur} onChange={phoneValidation} type="number" className="form__input" placeholder="Phone Number" required />
                                        </div>

                                        {/* password */}
                                        <div className="form__field">
                                            <label><i className="fa-solid fa-key"></i></label>
                                            <input onBlur={handleSignUpPasswordBlur} onChange={passwordValidation} type="password" className="form__input" placeholder="Password" required />
                                        </div>

                                        <div className="form__field">
                                            <input type="submit" value="Sign Up" />
                                        </div>

                                    </form>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default Join;