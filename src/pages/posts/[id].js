import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import styles from '../../styles/Posts.Edit.module.css'

export default function Edit({ posts, setPosts }) {
  const router = useRouter()
  const { id } = router.query

  const [post, setPost] = useState({})
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  function handleEdit() {

  }

  function handleDelete() {
    const dbPosts = [...posts]
    const postToRemove = dbPosts.findIndex(post => post.id === id)
    dbPosts.splice(postToRemove, 1)
    setPosts(dbPosts)
    router.push('/posts')
  }

  useEffect(() => {
    const dbPost = posts.find(post => post.id === id)
    if (dbPost) {
      setPost(dbPost)
      setTitle(dbPost.title)
      setDescription(dbPost.content)
    }

  }, [id, posts])

  return (
    <div className={styles.container}>
      <h2>Editar post</h2>
      <div className={styles.form}>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="title">Title</label>
          <input className={styles.input} value={title} onChange={(e) => setTitle(e.target.value)} type="text" id="title" placeholder="Um ótimo título" />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="content">Conteúdo</label>
          <textarea className={styles.content} value={description} onChange={(e) => setDescription(e.target.value)} id="content" />
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.deleteButton} type="button" onClick={handleDelete} id="submit">Excluir</button>
          <button className={styles.formButton} type="button" onClick={handleEdit} id="submit">Editar</button>
        </div>
      </div>
    </div>
  )
}