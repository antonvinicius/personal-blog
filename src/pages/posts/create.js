import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import styles from '../../styles/Posts.Create.module.css'

export default function Create() {
  const router = useRouter()

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [color, setColor] = useState("")

  function handleSubmit() {
    if (!title || !content || !color) {
      alert("Por favor, digite os valores")
      return
    }

    axios.post('/api/posts', { title, content, color })
    router.push('/posts')
  }

  return (
    <div className={styles.container}>
      <h2>Criar um novo post</h2>
      <div className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="color">Cor do cartão</label>
          <div className={styles.cardsColor}>
            <div
              className={styles.purpleCard}
              style={{
                border: color === '#a386f3' ? '3px solid' : 'none'
              }}
              onClick={() => setColor("#a386f3")}></div>
            <div
              className={styles.blueCard}
              style={{
                border: color === '#547BD9' ? '3px solid' : 'none'
              }}
              onClick={() => setColor("#547BD9")}></div>
            <div
              className={styles.yellowCard}
              style={{
                border: color === '#EC9C7F' ? '3px solid' : 'none'
              }}
              onClick={() => setColor("#EC9C7F")}></div>
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="title">Título do post</label>
          <input className={styles.input} type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
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