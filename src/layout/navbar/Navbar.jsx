import logo from "../../assets/icons/logo.svg";
import  "./navbar.css"

const Navbar = () => {
  return (
    <header>
      <section className="c-container header-wrapper">
        <div className="logo">
          <img src={logo} alt=" A logo" />
        </div>

        <nav>
          <ul className="nav-list">
            <li>About Us</li>
            <li>Login</li>
            <li>Sign Up</li>
          </ul>
          <div className="nav-button">
            <button>Create Quick Invoice</button>
          </div>
        </nav>
      </section>
    </header>
  );
};

export default Navbar;
