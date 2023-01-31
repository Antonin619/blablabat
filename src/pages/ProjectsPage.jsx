import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';
import { ProjectsService } from '../services/projects.service';

const ProjectsPage = () => {
    const [projects, setProjects] = React.useState([]);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [error, setError] = React.useState(null);

    const { token } = useContext(AuthContext);

    React.useEffect(() => {
        ProjectsService.fetchProjects(token.accessToken)
            .then((response) => {
                console.log('response :>> ', response);
                setProjects(response.data);
                setIsLoaded(true);
            })
            .catch((error) => {
                console.log('error :>> ', error);
                setError(error);
                setIsLoaded(true);
            });
    }, []);

    return (
        <div>
            <h1>Projects</h1>
        </div>
    );
}

export default ProjectsPage;