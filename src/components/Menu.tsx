import reactLogo from '../assets/react.svg';

function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src={reactLogo}
              alt="React Logo"
              width="60"
              height="60"
            />
          </a>
        </div>
      </nav>
    </>
  );
}

export default Menu;
