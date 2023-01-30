import '../App.scss';
import '../style/sign-in.scss'

function InscriptionClient() {
  return (
    <div className="sign-in">
        <h1>Inscription</h1>
        <div className="sign-in-content">
        <input type="text" name="firstname" id="firstname" placeholder='Prénom'/>
        <input type="text" name="lastname" id="lastname" placeholder='Nom'/>
        <input type="text" name="email" id="email" placeholder='Email'/>
        <input type="text" name="password" id="password" placeholder='Mot de passe'/>
        <input type="text" name="confirmpwd" id="confirmpwd" placeholder='Confirmer le mot de passe'/>
        </div>
    </div>
  );
}

export default InscriptionClient;