export const ProjectsService = {
    fetchProjects: async (access_token) => {
        return new Promise(async (resolve, reject) => {
            fetch('/items/projects', {
                credentials: 'same-origin',
                method: 'GET',
                redirect: 'follow',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${access_token}`,
                },
            }).then(async (response) => {
                resolve(await response.json())
            }).catch((error) => {
                reject(error)
            })
        })
    },
    fetchProjectById: async (id, access_token) => {
        return new Promise(async (resolve, reject) => {
            fetch(`/items/projects/${id}`, {
                credentials: 'same-origin',
                method: 'GET',
                redirect: 'follow',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${access_token}`,
                },
            }).then(async (response) => {
                resolve(await response.json())
            }).catch((error) => {
                reject(error)
            })
        })
    }
}