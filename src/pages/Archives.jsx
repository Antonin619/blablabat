import '../App.scss';
import '../style/archives.scss'
import logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Archives() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
    <div className="archives">
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
                                    <h3>Richard Dubois</h3>
                                    <p className="subject">Isolation</p>
                                    <p className="date">18/07/2022</p>
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
                                <div className="archives-card-footer success">
                                    Terminé
                                </div>
            </div>
            <div className="archives-card">
                                <div className="archives-card-header">
                                    <h3>Richard Dubois</h3>
                                    <p className="subject">Isolation</p>
                                    <p className="date">18/07/2022</p>
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