import { useEffect, useState } from 'react'

import { api } from '../services/api'

export type UserAddressParams = {
  neighborhood: string
  street: string
  city: string
  estate: string
}

export const useSearchCEP = (cep: string) => {
  const [userAddress, setUserAddress] = useState({} as UserAddressParams)
  const [error, setError] = useState(false)

  useEffect(() => {
    //used for search on api when the user stop type
    const delay = setTimeout(async () => {
      try {
        const { data } = await api.get(`/${cep}/json`) //search cep api

        const userAddressDetails = {
          neighborhood: data.bairro,
          street: data.logradouro,
          estate: data.uf,
          city: data.localidade,
        }

        setUserAddress(userAddressDetails)
        setError(false)
      } catch (error) {
        setError(true)
      }
    }, 2000) // 2s

    return () => clearTimeout(delay)
  }, [cep])

  return { userAddress, error }
}
