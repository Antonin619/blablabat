import React, { useEffect, useState } from 'react';
import '../style/result-component.scss';

const ResultComponent = (props) => {
    // récupérer les props "results", "localisation" et "job"
    const { results, localisation, job } = props;

    // créer un props "filteredResults" qui contient les résultats filtrés
    const [filteredResults, setFilteredResults] = useState([]);


    const getResultsByFilters = (localisation, job) => {
        // créer une variable qui contient les résultats filtrés
        console.log("Filtres: Location: " + localisation + " Job: " + job)
        console.log(results.data)
        let filteredResults = [];
        // créer une boucle qui parcours tout les résultats
        for (let i = 0; i < results.data.length; i++) {
            // créer une variable qui contient le résultat courant
            const result = results.data[i];
            console.log("Objet courant: " + result + " " + result.jobs[0] + "")
            // créer une variable qui contient la localisation du résultat courant
            const resultLocalisation = result.location;
            console.log("Objet : " + resultLocalisation)
            // créer une variable qui contient le métier du résultat courant
            const resultJob = result.jobs[0];
            // créer une condition qui vérifie si la localisation du résultat courant
            // est égale à la localisation passée en paramètre
            // et si le métier du résultat courant est égale au métier passé en paramètre
            if (resultLocalisation == localisation) {
                // si la condition est vérifiée, ajouter le résultat courant à la variable
                // qui contient les résultats filtrés
                filteredResults.push(result);
            }
        }
        // retourner les résultats filtrés
        console.log(filteredResults)
        return filteredResults;
    }


    // créer un useEffect qui s'active qu'une seule fois

    useEffect(() => {
        // créer une fonction qui filtre les résultats en fonction de la localisation et du métier
        // et qui les stocke dans une variable
        setFilteredResults(getResultsByFilters(localisation, job));
        
    }, []);




    const getJob = (id) => {
        switch (id) {
            case 1:
                return 'Couvreur';
            case 2:
                return 'Electricien';
            case 3:
                return 'Plombier';
            case 4:
                return 'Démolisseur';
            case 5:
                return 'Carreleur';
            case 6:
                return 'Metallier';
            case 7:
                return 'Platrier';
            case 8:
                return 'Plaquiste';
            case 9:
                return 'Peintre';
            case 10:
                return 'Charpentier';
            case 11:
                return 'Zingueur';
            case 12:
                return 'Façadier';
            case 13:
                return 'Terrassier';
            case 14:
                return 'Décorateur';
            case 15:
                return 'Cuisiniste';
            case 16:
                return 'Chapiste';
            case 17:
                return 'Menuiser';
            case 18:
                return 'Macon';
            case 19:
                return 'Solier';
            case 20:
                return 'Paysagiste';
            default:
                return "Aucuns"
        }
    }

    return (
        // créer une fonction qui parcoure tout les élements du tableau results
        // et qui les affiche dans une div
        <div className="result-component">
            <h2>Resultats</h2>
            <div className="result-component-container">
                {
                    filteredResults.map((result) => {
                        return (
                            <div className="result-component-card">
                                <div className="result-component-card-header">
                                    <h3>{result.name}</h3>
                                    <div className="email">
                                        <p>{result.email}</p>
                                    </div>
                                </div>
                                <div className="result-component-card-content">
                                    <p><i className="fa-solid fa-hammer"></i> {getJob(result.jobs[0])}</p>
                                </div>
                                <div className="result-component-card-footer">
                                    <p><i className="fa-solid fa-phone"></i> {result.phone_number}</p>
                                    <p><i className="fa-solid fa-location-dot"></i> {result.location}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>


    );
  }

  export default ResultComponent;