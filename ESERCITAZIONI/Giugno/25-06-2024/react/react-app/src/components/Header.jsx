function Header() {
    return (
      <header>
        <div className="container">
          <div className="wrapper">
            <div className="logo">Logo</div>
            <Menu />
          </div>
        </div>
      </header>
    );
  }
  
  function Menu() {
    return (
      <nav className="nav">
        <ul className="list">
          <MenuItem />
        </ul>
      </nav>
    );
  }
  
  function MenuItem() {
    return (
      <li className="item">
        <a href="#">About us</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </li>
    );
  }
  
  export { Header};