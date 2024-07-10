import PropTypes from 'prop-types';

function Footer() {
    const menuHTML = getMenuHTML();
  
    return (<footer className="footer">
          <div className="container">
              <div className="wrapper">
                  <nav className="nav">
                      {menuHTML}
                  </nav>
              </div>
          </div>
      </footer>);
  }
  
  function getMenuHTML() {
    const menuItems = [
      {
        label: "About us",
        children: [
          { label: "Company info" },
          { label: "Careers" },
          { label: "Altre cose" },
        ],
      },
      {
        label: "Services",
        children: [
          { label: "Service 1" },
          { label: "Service 2" },
        ],
      },
    ];
  
    return (
      <ul className="menu">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            label={item.label}
            children={item.children}
          />
        ))}
      </ul>
    );
  }

  function MenuItem({ label, href = "#", children }) {
    const subitems = children.map((item, index) => (
      <li key={index} className="item subitem">{item.label}</li>
    ));
  
    return (
      <li className="item">
        <a href={href}>{label}</a>
        {children.length > 0 && (
          <ul>
            {subitems}
          </ul>
        )}
      </li>
    );
  }
  
  MenuItem.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired
    }))
  };
  


export {Footer}