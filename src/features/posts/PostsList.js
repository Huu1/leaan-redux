import React from 'react'
import { useSelector } from 'react-redux'

export const PostsList = () => {
  //  useSelector选择器函数接收整个 state 对象，并且返回需要的部分数据
  // 每当 Redux store 更新时，选择器将重新运行，如果它们返回的数据发生更改，则组件将重新渲染
  const posts = useSelector(state => state.posts);

  const renderedPosts = posts.map(post => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
    </article>
  ))

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}