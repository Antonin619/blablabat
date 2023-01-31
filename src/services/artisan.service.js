export const ArtisansService = {
    fetchArtisans: async () => {
        return new Promise(async (resolve, reject) => {
            fetch('/items/artisans', {
                credentials: 'same-origin',
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            }).then(async (response) => {
                resolve(await response.json())
            }).catch((error) => {
                reject(error)
            })
        })
    },
}