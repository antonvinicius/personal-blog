import Link from 'next/link'
import styles from '../../styles/Posts.module.css'

export default function Posts({ posts }) {
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