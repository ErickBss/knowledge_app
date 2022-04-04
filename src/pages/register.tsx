import { FormEvent, useState } from 'react'
import { Modal } from '../components/modal'
import { useSearchCEP } from '../hooks/useSearchCEP'

import styles from './register.module.scss'

export default function Register() {
  const [cep, setCep] = useState('')
  const [name, setName] = useState('')
  const [cpf, setCPF] = useState('')
  const { userAddress } = useSearchCEP(cep)

  function handleOnSubmit(e: FormEvent) {
    e.preventDefault()
    const confirmData = {
      cep,
      name,
      cpf,
      userAddress,
    }

    Modal({ confirmData })
  }

  return (
    <main className={styles.container}>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="CPF"
          onChange={(e) => setCPF(e.target.value)}
        />
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
          <button
            type="submit"
            onClick={(e) => {
              handleOnSubmit(e)
            }}
          >
            Register
          </button>
        </div>
      </form>
    </main>
  )
}
