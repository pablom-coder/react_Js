import { useState, useEffect } from 'react'

export const useAsync = (asyncFunction, dependencies = []) => {
    const [error, setError] = useState()
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState()

    useEffect (() =>{
        setLoading(true)

        asyncFunction().then(response => {
            setData(response)
        }).catch(error => {
            setError(error)
        }).finally(()=> {
            setLoading(false)
        })

    }, dependencies)
    
    return {isLoading, data, error}
}