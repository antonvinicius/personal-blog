import { useState } from 'react'

import { Layout } from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [posts, setPosts] = useState([])

  return (
    <Layout>
      <Component {...pageProps} posts={posts} setPosts={setPosts} />
    </Layout>
  )
}

export default MyApp
