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
    </header>
  );
}

export default Header;