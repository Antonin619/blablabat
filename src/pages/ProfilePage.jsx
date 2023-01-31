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
        <div className="container">
            <div className="profile-infos">
                <h3>{ user.first_name}{ user.last_name }</h3>
                <h4>Maçon</h4>
            </div>
            <div className="profile-pic">
                <img src={illu3} alt="profile-pic"/>
            </div>
        </div>
        <h3>Entreprise</h3>
        <h4 className="company">Roberto & Co</h4>
        <p className='company-loc'>17000, La Rochelle</p>
      </div>
    </div>
  );
}}

export default ProfilePage;