import "./Main.css";
import posts from "../../data.json";

function Main() {
    const sidebarHTML = getSidebarHTML();
    console.log(posts);
    
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
  return (
    <aside className="sidebar">
      <div className="categories">
        <h3>Categories</h3>
        <ul>
          <li><a href="#category1">Category 1</a></li>
          <li><a href="#category2">Category 2</a></li>
          <li><a href="#category3">Category 3</a></li>
        </ul>
      </div>
    </aside>
  );
}

function getPostsHTML({ posts }) {
    const postsSlice = posts.slice(0, 6); 
    return (
      <section>
        <h2>Lista post</h2>
        <div role="list">
          {postsSlice.map(post => (
            <article key={post.userId} role="listitem">
              <img alt="" src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }




export { Main};
