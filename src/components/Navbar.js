function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">Chase's Grass Cutting Service</div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/Services">Services</a></li>
        <li><a href="/Booking">Book a Service</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;