import '../App.scss';
import '../style/main.scss'

function LoginPage() {
  return (
    <div className="login-page">
      <header className="login-page-header">
        <h1>Connectez vous sur BlaBlaBat</h1>
        </header>
        <section className="login-page-form">
            <form>
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