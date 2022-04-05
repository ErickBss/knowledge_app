import { useRouter } from 'next/router'
import { RegisterDataParams } from '.'

import styles from './style.module.scss'

interface ShowDataProps {
  registerData: RegisterDataParams
  onClose: () => void
}

export function ShowData({ registerData, onClose }: ShowDataProps) {
  return (
    <section className={styles.container}>
      <h3>Confirm Data</h3>
      <ul>
        <li>{registerData.name}</li>
        <li>{registerData.cpf}</li>
        <li>{registerData.cep}</li>
        <li>{registerData.userAddress.street}</li>
        <li>{registerData.userAddress.neighborhood}</li>
        <li>{registerData.userAddress.city}</li>
        <li>{registerData.userAddress.estate}</li>
      </ul>

      <div className={styles.action_area}>
        <button onClick={onClose}>Change</button>
        <button
          onClick={() => {
            let route = window.location.href
            window.location.href = route.replace('register', '')
          }}
        >
          Ok
        </button>
      </div>
    </section>
  )
}
