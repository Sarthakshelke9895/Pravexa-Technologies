import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { label: "Home", to: "/#home" },
  { label: "Services", to: "/#services" },
  { label: "Portfolio", to: "/#portfolio" },
  { label: "Internship", to: "/#internship" },
  { label: "About", to: "/#about" },
  { label: "Contact", to: "/#contact" }
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <Link to="/" className="logo" onClick={closeMenu} aria-label="Pravexa Technologies home">
        <span>PX</span>
        Pravexa Technologies
      </Link>
      <button
        className="menu-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <FiX /> : <FiMenu />}
      </button>
      <nav className={open ? "nav-links open" : "nav-links"} aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.label} href={item.to} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <NavLink className="nav-admin" to="/admin" onClick={closeMenu}>
          Admin
        </NavLink>
        <Link className="btn btn-primary nav-cta" to="/project-request" onClick={closeMenu}>
          Get Started
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
