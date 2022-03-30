import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import {auth} from "./firebase.js"

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(auth=>{
            history.push('/')
        })
        .catch(error => alert (error.message))

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) =>{

            if (auth) {
                history.push('/')
            }
            
        })

        auth

        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
    }
    
  return (
    <div className='login'>

        <Link to='/'>
        <img className='login_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png" alt="" />
        </Link>

        <div className='login_container'>
            <h1>Sign-In</h1>

            <form action="">
                <h5>Email</h5>
                <input type="text" value={email} onChange= 
                {e =>setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type="password" value={password} onChange=
                 {e => setPassword(e.target.value)} />

                <button type='submit' onClick={signIn} className='login_signInButton'>sign in</button>
            </form>

            <p>
                By signing in you agree that
                 Ifeanyi Osi-Okeke is the best 
                 Software Developer of all time
            </p>

            <button onClick={register} className='login_registerButton'>Create Account</button>
            
        </div>


    </div>
  )
}

export default Login