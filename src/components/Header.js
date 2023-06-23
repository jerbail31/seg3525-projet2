
function Header() {
  return (
    <header className="header">
      <div className="header-logo">Logo</div>
      <nav className="header-nav">
        <ul>
          <li><a href="/Account">My account</a></li>
          {/* Add more menu items as needed */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;