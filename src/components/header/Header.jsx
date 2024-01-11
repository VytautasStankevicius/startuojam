import User from "../user/User";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar brand">
          Holiday snap
        </a>
        <div className='collapse navbar-collapse justify-content-end' id='navbarNavDropdown'>
          <User/>
        </div>
      </div>
    </nav>
  );
};
export default Header;
