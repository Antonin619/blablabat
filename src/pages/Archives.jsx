import '../App.scss';
import '../style/archives.scss'
import logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';


function Archives() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  let history = useNavigate();

  return (
    <div className="archives">
        <Link to="/"> <button onClick={() => history(-1)} className='back-button' type="button"><i className='fa-solid fa-arrow-left'></i>Retour</button></Link>

        <h1>Archives</h1>

        <div className="archives-cards">
            <div className="archives-card">
                                <div className="archives-card-header">
                                    <h3>Richard Dubois</h3>
                                    <p className="subject">Isolation</p>
                                    <p className="date">18/07/2022</p>
                                    <p className="location">17000, La Rochelle</p>
                                </div>
                                <div className="archives-card-footer success">
                                    Terminé
                                </div>
            </div>

            <div className="archives-card">
                                <div className="archives-card-header">
                                    <h3>Isabelle Yohan</h3>
                                    <p className="subject">Toiture</p>
                                    <p className="date">28/10/2022</p>
                                    <p className="location">17000, La Rochelle</p>
                                </div>
                                <div className="archives-card-footer cancel">
                                    Annulé
                                </div>
            </div>

            <div className="archives-card">
                                <div className="archives-card-header">
                                    <h3>François Hollande</h3>
                                    <p className="subject">Isolation</p>
                                    <p className="date">10/12/2022</p>
                                    <p className="location">17000, La Rochelle</p>
                                </div>
                                <div className="archives-card-footer success">
                                    Terminé
                                </div>
            </div>
            <div className="archives-card">
                                <div className="archives-card-header">
                                    <h3>Thierry Deveaud</h3>
                                    <p className="subject">Peinture</p>
                                    <p className="date">08/06/2022</p>
                                    <p className="location">17000, La Rochelle</p>
                                </div>
                                <div className="archives-card-footer cancel">
                                    Annulé
                                </div>
            </div>
            <div className="archives-card">
                                <div className="archives-card-header">
                                    <h3>Richard Dubois</h3>
                                    <p className="subject">Isolation</p>
                                    <p className="date">18/07/2022</p>
                                    <p className="location">17000, La Rochelle</p>
                                </div>
                                <div className="archives-card-footer fail">
                                    Echec
                                </div>
            </div>
        </div>
    </div>
  );
}

export default Archives;