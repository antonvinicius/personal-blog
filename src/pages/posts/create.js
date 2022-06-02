import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Loader from "react-spinners/BeatLoader";
import Head from 'next/head'

import styles from '../../styles/Posts.Create.module.css'

const override = {
  display: "flex",
  justifyContent: 'center',
  alignItems: 'center',
  margin: "0 auto",
};

export default function Create() {
  const router = useRouter()

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [color, setColor] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit() {
    if (!title || !content || !color) {
      alert("Por favor, digite os valores")
      return
    }

    try {
      setLoading(true)
      await axios.post('/api/posts', { title, content, color })
    } catch (error) {
      throw new Error("failed creating post")
    } finally {
      setLoading(false)
      router.push('/posts')
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Criar Post</title>
      </Head>
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
          <button className={styles.formButton} disabled={loading} type="button" onClick={handleSubmit} id="submit">
            Cadastrar
          </button>
        </div>
      </div>
      <Loader color={"#a386f3"} css={override} loading={loading} size={40} />
    </div>
  )
}