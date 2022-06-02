import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from '../../styles/Posts.module.css'
import image from '../../../public/undraw_handcrafts_bookmark.svg'
import axios from 'axios'

export default function Posts() {
  const [posts, setPosts] = useState([])

  async function getPosts() {
    const { data } = await axios.get('/api/posts')
    setPosts(data)
  }

  useEffect(() => {
    getPosts()
  }, [])

  if (posts.length === 0) {
    return (
      <div className={styles.noPostsContainer}>
        <Image
          src={image}
          alt="Imagem de um livro"
          width={200}
          height={200}
        />
        <p className={styles.noPostsText}>Você ainda não tem nenhum <span className={styles.textDiff}>post.</span><br />
          <Link href="/posts/create">
            <span className={styles.actionText}>clique aqui </span>
          </Link>
          e crie um agora mesmo <span className={styles.emoji}>😁</span>
        </p>
      </div>
    )
  }

  return (
    <div className={styles.posts}>
      {posts.map(post => (
        <Link key={post.id} href={`/posts/${post.id}`}>
          <div className={styles.post} style={{ backgroundColor: post.color }}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}