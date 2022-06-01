import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Posts.module.css'
import image from '../../../public/undraw_handcrafts_bookmark.svg'

export default function Posts({ posts }) {
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
          <div className={styles.post}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}