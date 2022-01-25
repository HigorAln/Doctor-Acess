import styles from './styles.module.scss'

export function Header(){
  return(
    <header className={styles.container}>
      <div>
        <img src="/logo.svg" alt="logo" />
      </div>
    </header>
  )
}