import { useEffect, useState } from 'react'

export const useFetchCraftsmen = () => {
    const [craftsmen, setCraftsmen] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(undefined)

    useEffect(() => {
        const fetchCraftsmen = async () => {
            try {
                fetch('/items/craftsmen', {
                    credentials: 'same-origin',
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                    },
              
                })
                .then(response => response.json())
                .then(data => {
                    setCraftsmen(data)
                    setLoading(false)
                })
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        fetchCraftsmen()
    }, [])

    return { craftsmen, loading, error } 
}
