import { useRouter } from 'next/router'
import { FormEvent } from 'react'
import styles from './style.module.scss'

export function Login() {
  const router = useRouter()

  function handleSubmit(event: FormEvent) {
    // treat the form action
    event.preventDefault() // disable the feature to reload the page on submit

    router.push('/register')
  }

  return (
    <main className={styles.container}>
      <form className={styles.form}>
        <input type="text" placeholder="Username" />

        <input type="password" placeholder="Password" />
        <button
          type="submit"
          onClick={(e) => {
            handleSubmit(e)
          }}
        >
          Login
        </button>
      </form>
    </main>
  )
}
