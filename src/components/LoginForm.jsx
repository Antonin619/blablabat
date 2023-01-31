import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../contexts/auth.context';
import { Link, Navigate, redirect } from 'react-router-dom'
import '../style/login.scss'


const LoginForm = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const {
        disabled,
        onSubmit
    } = props

    const [formState, setFormState] = useState({
        username: '',
        password: ''    
    })

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
  
    const { login, isReady, isLoading, isAuthenticated } = useContext(AuthContext);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      if (name === 'email') {
        setEmail(value);
      } else if (name === 'password') {
        setPassword(value);
      }
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('email :>> ', email);
      console.log('password :>> ', password);
      login(email, password);
    }

    useEffect(() => {
        console.log('isReady :>> ', isReady);
    }, [isReady])


         
    return(<> <div>
        <div className='login'>
        <Link to="/"> <button className='back-button' type="button"><i className='fa-solid fa-arrow-left'></i>Retour</button></Link>

            <h1>Connexion</h1>
            <div className="sign-in-content">
            <form onSubmit={handleSubmit} onChange={handleChange}>
                
                    <label
                        htmlFor="email"
                    >
                        Email :
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        name="email"
                    />
                    <label
                        htmlFor="password"
                    >
                        Mot de passe :
                    </label>
                    <input
                        type="password"
                        placeholder="Mot de passe"
                        name="password"
                        id="password"
                    />
                
                    <button type="submit"
                    className='submit-button'
                    >Se connecter</button>
            </form>
            </div>
        </div>
    </div></>)

}
export default LoginForm;