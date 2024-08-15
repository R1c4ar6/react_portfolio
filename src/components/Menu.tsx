import reactLogo from "../assets/react.svg";

function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid p-2 d-flex justify-content-between">
          <a className="navbar-brand" href="#" id="menu-logo">
            <img src={reactLogo} alt="React Logo" width="60" height="60" /> Portfolio Richard Jiménez
          </a>
          <div className="collapse navbar-collapse" id="menu-content">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Menu;
