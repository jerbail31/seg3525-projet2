import { FaEnvelope, FaPhone, FaFacebook } from 'react-icons/fa';


function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="header-item">
          <FaEnvelope />
          <span>chase@chasesgrass.com</span>
        </div>
        <div className="header-item">
          <FaPhone />
          <span>613-413-9808</span>
        </div>
        <div className="header-item">
          <FaFacebook />
          <span>Facebook</span>
        </div>
      </div>
      <nav className="header-nav">
        <ul>
          <li><a href="/seg3525-projet2/Account">My account</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;