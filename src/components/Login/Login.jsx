import React, {useState} from 'react';
import './Login.css'

const Login = () => {

    const [email, setEmail] = useState('')

    const formSubmit = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const pass = event.target.pass.value
        const x = event.target
        // console.log(email);
        // console.log(pass);
        console.log(x);
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
            <h1 name='title'>Please Log in by your email and pass</h1>
            <input onChange={emailChange} type="email" name='email' id="email-field" placeholder='Enter Your Email' />
            <br />
            <input onBlur={onBlurPass} type="password" name="pass" id="password-field" placeholder='Enter Your Password' />
            <br />
            <input className='input-button' type="submit" value="Submit" />
        </form>
    );
};

export default Login;