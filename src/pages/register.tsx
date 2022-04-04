import { useEffect, useState } from 'react'
import { api } from '../services/api'
import styles from './register.module.scss'

type ApiAddressResponse = {
  data: UserAddress
}

type UserAddress = {
  neighborhood: string
  street: string
  city: string
  estate: string
}

export default function Register() {
  const [cep, setCep] = useState('')
  const [userAddress, setUserAddress] = useState({} as UserAddress)

  console.log(userAddress)

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
      } catch (error) {
        console.log('error')
        setUserAddress({} as UserAddress)
        console.log(userAddress)
      }
    }, 2000) // 2s

    return () => clearTimeout(delay)
  }, [cep])

  return (
    <main className={styles.container}>
      <form className={styles.form}>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="CPF" />
        <input
          type="text"
          placeholder="CEP"
          onChange={(e) => setCep(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          value={userAddress ? userAddress.street : null}
        />
        <input
          type="text"
          placeholder="Neighborhood"
          value={userAddress ? userAddress.neighborhood : null}
        />
        <input
          type="text"
          placeholder="City"
          value={userAddress ? userAddress.city : null}
        />
        <input
          type="text"
          placeholder="Estate"
          value={userAddress ? userAddress.estate : null}
        />
        <input type="password" placeholder="..." />
        <div className={styles.register_button}>
          <button type="submit">Register</button>
        </div>
      </form>
    </main>
  )
}
