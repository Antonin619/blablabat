import '../App.scss';
import '../style/main.scss'
import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/auth.context';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const { login } = useContext(AuthContext);

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
  }


  return (
    <div className="login-page">
      <header className="login-page-header">
        <h1>Connectez vous sur BlaBlaBat</h1>
        </header>
        <section className="login-page-form">
            <form onSubmit={handleSubmit} onChange={handleChange}>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" required/>
                <label for="password">Mot de passe</label>
                <input type="password" id="password" name="password" placeholder="Mot de passe" required/>
                <button type="submit">Se connecter</button>
            </form>
        </section>
        <p>Pas encore inscrit ? <strong><a href="#">Inscrivez vous maintenant</a></strong></p>
    </div>
  );
}

export default LoginPage;