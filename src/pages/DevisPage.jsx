import { QuotationsService } from "../services/quotations.service"
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';
import '../App.scss';


function Devis(){
    const { user, token } = useContext(AuthContext);
    const [isLoaded, setIsLoaded] = useState(false);
    const [quotations, setQuotations] = useState([]);
    useEffect(() => {
    QuotationsService.fetchQuotations(token.accessToken)
      .then((response) => {
        console.log('response :>> ', response);
        setQuotations(response.data);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.log('error :>> ', error);
        setIsLoaded(true);
      });
    }, []);

  const getCraftsmen=(id)=>{
    switch(id){
        case id < 10:
            return 'Pachet & fils';
        case id > 10:
            return 'Etanchéité moderne Aquitaine';
        case id > 20:
            return 'Entreprise couvreur';
    }
  }

  const getService=(id)=>{
    switch(id){
        case id < 10:
            return 'Rénovation toiture';
        case id > 10:
            return 'Travaux étanchéité';
        case id > 20:
            return 'Pose de carrelage';
    }
  }

    return(
            <div className="devis">
                {
                quotations.map((quotation) => {
                return(<div className="result-component-card">
                    <div className="result-component-card-header">
                        <h3>{getService(quotation.service)}</h3>
                        <h4>Statut : {quotation.status}</h4>
                        <div className="email">
                            <p>Montant {quotation.price} €</p>
                        </div>
                    </div>
                    <div className="result-component-card-content">
                        <p>{getCraftsmen(quotation.craftsmen)}</p>
                    </div>
                    <div className="result-component-card-footer">
                        <p>Date : {quotation.date_created}</p>
                    </div>
                </div> )
            })
            }
            
        </div>);
    
    }

export default Devis