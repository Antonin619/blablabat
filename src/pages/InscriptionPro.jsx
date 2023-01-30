import { useEffect } from 'react';
import '../App.scss';
import '../style/sign-in.scss'

function InscriptionPro() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="sign-in">
        <h1>Inscription</h1>
    </div>
  );
}

export default InscriptionPro;