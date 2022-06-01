import styles from '../../styles/Posts.Create.module.css'

export default function Create() {
  return (
    <div className={styles.container}>
      <h2>Criar um novo post</h2>
      <div className={styles.form}>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="title">Title</label>
          <input className={styles.input} type="text" id="title" placeholder="Um ótimo título" />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="content">Conteúdo</label>
          <textarea className={styles.content} id="content" />
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.formButton} type="submit" id="submit">Cadastrar</button>
        </div>
      </div>
    </div>
  )
}