import Link from 'next/link'
import styles from '../styles/components/Layout.module.css'

export function Layout({ children }) {
  return (
    <>
      <div className={styles.outMenu}>
        <div className={styles.menu}>
          <h1 className={styles.menuTitle}>Meu Blog</h1>
          <nav>
            <Link href="/">
              <a className={styles.navLink}>Posts</a>
            </Link>
            <Link href="#">
              <a className={styles.navLink}>Criar novo post</a>
            </Link>
          </nav>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.innerContent}>
          {children}
        </div>
      </div>
    </>
  )
}