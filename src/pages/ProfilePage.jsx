import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.scss';
import '../style/profile-page.scss'
import illu3 from '../assets/images/illu-3.jpg'
import { AuthContext } from '../contexts/auth.context';

function ProfilePage() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  let history = useNavigate();

  const {user,isAuthenticated} = useContext(AuthContext);

  console.log("uuuserrrr", user)
  if (!isAuthenticated) {
    <div className="profile-page">

        Loading...
    </div>
  }
  else { return (
    <div className="profile-page">
        
      <div className="profile-page-content">
        <Link to="/"> <button onClick={() => history(-1)} className='back-button' type="button"><i className='fa-solid fa-arrow-left'></i>Retour</button></Link>
        <h1>Profil</h1>
        <hr />
        <div className="container">
            <div className="profile-infos">
                <h3>{ user.first_name} { user.last_name }</h3>
                <h4>{ user.title }</h4>
            </div>

            <div className="profile-pic">
                <img src={illu3} alt="profile-pic"/>
            </div>
        </div>
        { user.description && <div>
            <h4 className='desc'>Description :</h4>
            <p>{ user.description }</p>
        </div>}
        { user.role.name === "craftsman" && <div className="company-section">
            <h3>Entreprise</h3>
            <h4 className="company">Barack & Co</h4>
            <p className='company-loc'>{ user.location }</p>
        </div> }
        <button className='logout-button' type="button">Déconnexion<i class="fa-solid fa-right-from-bracket"></i></button>
      </div>
    </div>
  );
}}

export default ProfilePage;