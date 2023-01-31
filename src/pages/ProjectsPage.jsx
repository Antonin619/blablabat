import React from 'react';

const ProjectsPage = () => {
    const [projects, setProjects] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    


    return (
        <div>
            <h1>Projects</h1>
        </div>
    );
}

export default ProjectsPage;