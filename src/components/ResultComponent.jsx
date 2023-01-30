import '../style/header.scss'
function ResultComponent() {

    const { results } = props;

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
            <h1>Resultats</h1>
            <div className="result-component-container">
                {
                    results.map((result) => {
                        return (
                            <div className="result-component-card">
                                <div className="result-component-card-header">
                                    <h2>{result.name}</h2>
                                    <p>{result.email}</p>
                                </div>
                                <div className="result-component-card-content">
                                    <p>{getJob(result.jobs[0])}</p>
                                </div>
                                <div className="result-component-card-footer">
                                    <p>{result.phone_number}</p>
                                    <p>{result.location}</p>
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