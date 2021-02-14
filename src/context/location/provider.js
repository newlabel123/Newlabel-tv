import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const LocationContext = createContext()

const LocationContextProvider = ({ children }) => {
  const initialState = localStorage.getItem('country')
  const [country, setCountry] = useState(initialState)

  useEffect(() => {
    ;(async () => {
      try {
        const country = localStorage.getItem('country')

        if (!country) {
          const { data } = await axios.get(
            `http://api.ipstack.com/check?access_key=${process.env.REACT_APP_API_IPLOOKUP}`
          )

          setCountry(data.country_name)
        }
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  useEffect(() => {
    if (country) {
      localStorage.setItem('country', country)
    }
  }, [country])

  return (
    <LocationContext.Provider value={{ country, setCountry }}>
      {children}
    </LocationContext.Provider>
  )
}

export { LocationContext, LocationContextProvider }
