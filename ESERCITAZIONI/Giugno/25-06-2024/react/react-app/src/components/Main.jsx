function Main() {
    const sidebarHTML = getSidebarHTML();

    const posts = [
      {
        title: 'Lorem ipsum',
        userId: 1,
        body: 'test'
      },
      {
        title: 'Lorem ipsum2',
        userId: 2,
        body: 'test2'
      },
      {
        title: 'Lorem ipsum3',
        userId: 3,
        body: 'test3'
      }
    ];
  
    const postsHTML = getPostsHTML({ posts });
  
    return (
      <main>
        <div className="container">
          <div className="main-grid">
            {sidebarHTML}
            {postsHTML}
          </div>
        </div>
      </main>
    );
}

function getSidebarHTML() {
  return (<aside>Sidebar</aside>);
}

function getPostsHTML({ posts }) {
    const postsSlice = posts.slice(0, 3); 
    return (
      <section>
        <h2>Lista post</h2>
        <div role="list">
          {postsSlice.map(post => (
            <article key={post.userId} role="listitem">
              <h3>{post.title}</h3>
              <div><small>by User {post.userId}</small></div>
              <p>{post.body}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }




export { Main};
