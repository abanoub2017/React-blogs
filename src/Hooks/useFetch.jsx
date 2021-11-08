
import {useState , useEffect} from 'react'

export const useFetch = (url) => {
    const [data , setData] = useState(null)
    const [pending , setPending] = useState(true)
    const [error , setError] = useState(null)
    const [reFetch , setReFetch] =  useState(false)

    const get = () => {
        setReFetch(!reFetch)
    }

    useEffect(() => {
        const abortCont = new AbortController()

        fetch(url , {signal:  abortCont.signal})
        .then(res => {
            if (!res.ok) {
                throw Error('could not fetch the data  for that resource ')
            }
            return res.json()
        })
        .then(data => {
             setPending(false)
             setData(data)
             setError(null)
        }).catch(err => {
            if (err.name === 'AbortError') {
                console.log('fetched aborted');
            } else {
                setPending(false)
                setError(err.message)
            }
        })

        return () => abortCont.abort()
     },[url , reFetch])

  return {data , pending , error , get}
     
}

// export default useFetch;