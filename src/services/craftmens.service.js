export const CraftmensService = {
    fetchCraftsmen: async () => {
        try {
            const response = await fetch('/items/craftsmen', {
                credentials: 'same-origin',
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            })
            return await response.json()
        } catch (error) {
            throw error
        }
    },
}