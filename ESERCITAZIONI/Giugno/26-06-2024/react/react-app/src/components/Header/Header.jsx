import "./Header.css";

function Header(props) {
  const {brand, ...attrs} = props;
    return (
      // className = "header"
      <header {...attrs}> 
        <div className="container">
          <div className="wrapper">
            <div className="logo">{brand.name}</div>
            <Menu />
            {/* {children} in questo caso è undefined */}
          </div>
        </div>
      </header>
    );
  }
  
  function Menu() {
    const items = [
      { label: "About us", href: "https://google.it" },
      { label: "Blog", href: "https://google.it" },
      { label: "Shop", href: "https://google.it" },
    ];
  
    return (
      <nav className="nav">
        <ul className="list">
          {items.map((item, index) => (
            <MenuItem
              key={`${item.label}-${index}`}
              label={item.label}
              href={item.href}
            />
          ))}
        </ul>
      </nav>
    );
  }
  
  function MenuItem(props) {
    const { label, href } = props;
    return (
      <li className="item">
        <a href={href}>{label}</a>
      </li>
    );
  }
  
  export { Header };