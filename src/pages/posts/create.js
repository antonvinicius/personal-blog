import { useRouter } from 'next/router'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import styles from '../../styles/Posts.Create.module.css'

export default function Create({ setPosts, posts }) {
  const router = useRouter()

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  function handleSubmit() {
    const newPosts = [...posts]
    newPosts.push({ title, content, id: uuid() })
    setPosts(newPosts)
    router.push('/posts')
  }

  return (
    <div className={styles.container}>
      <h2>Criar um novo post</h2>
      <div className={styles.form}>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="title">Title</label>
          <input className={styles.input} type="text" id="title" placeholder="Um ótimo título" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="content">Conteúdo</label>
          <textarea className={styles.content} id="content" value={content} onChange={(e) => setContent(e.target.value)} />
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.formButton} type="button" onClick={handleSubmit} id="submit">Cadastrar</button>
        </div>
      </div>
    </div>
  )
}