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

  useEffect(() => {
    const delay = setTimeout(async () => {
      try {
        const { data } = await api.get(`/${cep}/json`)

        const userAddressDetails = {
          neighborhood: data.bairro,
          street: data.logradouro,
          estate: data.uf,
          city: data.localidade,
        }
        console.log(data)

        console.log(userAddressDetails)
        setUserAddress(userAddressDetails)
      } catch (error) {}
    }, 2000) // 2s

    return () => clearTimeout(delay)
  }, [cep])

  return { userAddress, setUserAddress }
}
