import styles from '../../styles/Posts.Edit.module.css'

export default function Edit() {
  return (
    <div className={styles.container}>
      <h2>Editar post</h2>
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
          <button className={styles.deleteButton} type="submit" id="submit">Excluir</button>
          <button className={styles.formButton} type="submit" id="submit">Editar</button>
        </div>
      </div>
    </div>
  )
}