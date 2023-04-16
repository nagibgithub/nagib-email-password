import React, {useState} from 'react';
import './Login.css';
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import app from '../../firebase/firebase.config';

const Login = () => {

    const auth = getAuth(app);


    const [email, setEmail] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const formSubmit = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.pass.value
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                // Signed in 
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errMessage = error.message;
                setErrorMessage(errMessage)
                console.log(errorCode + ' ' + errorMessage);
            });
    }

    const emailChange = (event) => {
        setEmail(event.target.value)
        // console.log(event.target.value);
    }

    const onBlurPass = (event) => {
        // console.log(event.target.value);
    }

    return (
        <form onSubmit={formSubmit} action="" className='login'>
            <h5 name='title'>Please Log in by your email and pass</h5>
            <input onChange={emailChange} type="email" name='email' id="email-field" placeholder='Enter Your Email' required/>
            <br />
            <input onBlur={onBlurPass} type="password" name="pass" id="password-field" placeholder='Enter Your Password' required/>
            <h3><small>{errorMessage}</small></h3>
            <br />
            <input className='input-button' type="submit" value="Submit" />
        </form>
    );
};

export default Login;