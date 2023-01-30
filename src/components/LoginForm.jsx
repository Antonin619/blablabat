import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../style/login.scss'


const LoginForm = props => {

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

    const handleFormChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const payload = {
        "email" : formState.username,
        "password" : formState.password
    }
    const handleSubmit = evt => {
        evt.preventDefault()
        //Appel à l'api de login
        fetch('/auth/login',{
            credentials: 'same-origin',
            method : 'POST',
            redirect : 'follow',
            headers : {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(payload)
        })
        .then((response) =>response.json())
        .then((data)=>{
            //On sauvegarde les token
            sessionStorage.setItem('bearer', data.data.access_token)
            sessionStorage.setItem('refreshToken', data.data.refresh_token)
        })
        //On sauvegarde des données utiles pour plus tard
        sessionStorage.setItem('isAuthenticated', true)
        sessionStorage.setItem('email', formState.username)

        //utile pour récup les données de l'utilisateur connecté
       /* if(sessionStorage.getItem('isAuthenticated')==true){
            console.log('test')
           //Appel à l'api pour avoir les infos de l'utilisateur connecté
            fetch('/users/me',{
            credentials: 'same-origin',
            method : 'GET',
            headers : {
                Accept: 'application/json',
            },
        }).then(function(data){
           sessionStorage.setItem()
        }) 
    }*/}
         
    return(<> <div>
        <div className='login'>
        <Link to="/"> <button className='back-button' type="button"><i className='fa-solid fa-arrow-left'></i>Retour</button></Link>

            <h1>Connexion</h1>
            <div className="sign-in-content">
            <form onSubmit={handleSubmit}>
                
                    <label
                        htmlFor="username"
                    >
                        Email :
                    </label>
                    <input
                        type="email"
                        id="username"
                        placeholder="Email"
                        name="username"
                        value={formState.username}
                        onChange={handleFormChange}
                        disabled={disabled}
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
                        value={formState.password}
                        onChange={handleFormChange}
                        disabled={disabled}
                    />
                
                    <button type="submit"
                    className='submit-button'
                        disabled={disabled}
    
                        onSubmit={handleSubmit}
                    >Se connecter</button>
            </form>
            </div>
        </div>
    </div></>)
}

export default LoginForm

