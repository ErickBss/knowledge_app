import styles from './register.module.scss'

export default function Register() {
  return (
    <main className={styles.container}>
      <form className={styles.form}>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="CPF" />
        <input type="text" placeholder="CEP" />
        <input type="text" placeholder="Address" />
        <input type="text" placeholder="Neighborhood" />
        <input type="text" placeholder="City" />
        <input type="text" placeholder="Estate" />
        <input type="password" placeholder="..." />
        <div className={styles.register_button}>
          <button type="submit">Register</button>
        </div>
      </form>
    </main>
  )
}
