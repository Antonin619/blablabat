import '../App.scss';
import '../style/main.scss'

function RegisterPage() {
  return (
    <div className="register-page">
      <header className="register-page-header">
        <h1>Connectez vous sur BlaBlaBat</h1>
        </header>
        <section className="register-page-form">
            <form>
            <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" required/>
                <label for="password">Mot de passe</label>
                <input type="password" id="password" name="password" placeholder="Mot de passe" required/>
                <label for="password">Confirmez votre mot de passe</label>
                <input type="password" id="password" name="password" placeholder="Mot de passe" required/>
                <label for="password">Nom</label>
                <input type="text" id="name" name="name" placeholder="Nom" required/>
                <label for="password">Prénom</label>
                <input type="text" id="firstname" name="firstname" placeholder="Prénom" required/>
                <label for="password">Adresse</label>
                <input type="text" id="address" name="address" placeholder="Adresse" required/>
                <label for="password">Code postal</label>
                <input type="text" id="zip" name="zip" placeholder="Code postal" required/>
                <label for="password">Ville</label>
                <input type="text" id="city" name="city" placeholder="Ville" required/>
                <label for="password">Téléphone</label>
                <input type="text" id="phone" name="phone" placeholder="Téléphone" required/>
                <label for="password">Je suis un utilisateur</label>
                <input type="radio" id="user" name="user" placeholder="Utilisateur" required/>
                <label for="password">Je suis un artisan</label>
                <input type="radio" id="artisan" name="artisan" placeholder="Artisan" required/>
                <button type="submit">Se connecter</button>
            </form>      
        </section>
        <p>Déjà un compte ? <strong><a href="#">Connectez vous maintenant</a></strong></p>
    </div>
  );
}

export default RegisterPage;