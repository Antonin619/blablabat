export const ServicesService = {
    fetchServices: async (access_token) => {
        return new Promise(async (resolve, reject) => {
            fetch('/items/services', {
                credentials: 'same-origin',
                method: 'GET',
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