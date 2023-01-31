export const ClientService = {
    fetchClientById: async (id, access_token) => {
        return new Promise(async (resolve, reject) => {
            fetch(`/users/${id}`, {
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
    fetchClientRolesById: async (id, access_token) => {
        return new Promise(async (resolve, reject) => {
            fetch(`/roles/${id}`, {
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
}