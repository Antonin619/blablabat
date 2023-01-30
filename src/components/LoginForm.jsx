import React, { useState } from 'react'
import { redirect } from 'react-router-dom'

const LoginForm = props => {

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
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label
                        htmlFor="username"
                    >
                        Email
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
                </div>

                <div >
                    <label
                        htmlFor="password"
                    >
                        Mot de passe
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
                </div>
                <div>
                    <input type="submit"
                        disabled={disabled}
                        value="Connexion"
                        onSubmit={handleSubmit}
                    />
                </div>
            </form>
        </div>
    </div></>)
}

export default LoginForm

