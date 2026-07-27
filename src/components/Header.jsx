import { Link, NavLink } from "react-router-dom";
import nikeLogo from "../assets/nike.png";
import "./Header.css";

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m16 16 5 5" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 0 0 0-7.6Z" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 8h14l-1 13H6L5 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

const navLinks = [
  { label: "Men", to: "/men" },
  { label: "Women", to: "/women" },
  { label: "Kids", to: "/kids" },
  { label: "Jordan", to: "/jordan" },
  { label: "Nike SKIMS", to: "/women" },
  { label: "Back to School", to: "/back-to-school" },
  { label: "Sale", to: "/sale" },
];

function Header({
  bagCount = 0,
  menuOpen,
  onMenuToggle,
  searchTerm = "",
  onSearchChange = () => {},
  onSearchSubmit = () => {},
}) {
  const navClassName = ({ isActive }) =>
    isActive ? "is-active" : undefined;

  return (
    <>
      <div className="header-topbar">
        <div className="topbar-brands">
          <span className="topbar-brand-symbol">J</span>
          <span className="topbar-arrow">➤</span>
        </div>

        <div className="topbar-links">
          <a href="#store">Find a Store</a>
          <span className="topbar-divider"></span>

          <a href="#help">Help</a>
          <span className="topbar-divider"></span>

          <a href="#membership">Join Us</a>
          <span className="topbar-divider"></span>

          <a href="#signin">Sign In</a>
        </div>
      </div>

      <header className="store-main-header">
        <Link to="/" className="header-logo-link" aria-label="Homepage">
          <img
            src={nikeLogo}
            alt="Homepage logo"
            className="header-logo-image"
          />
        </Link>

        <nav
          className={
            menuOpen
              ? "store-navigation menu-open"
              : "store-navigation"
          }
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={navClassName}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="store-actions">
          <form
            className="header-search"
            role="search"
            onSubmit={(event) => {
              event.preventDefault();
              onSearchSubmit(searchTerm);
            }}
          >
            <SearchIcon />

            <input
              type="search"
              placeholder="Search"
              value={searchTerm}
              onChange={(event) =>
                onSearchChange(event.target.value)
              }
            />
          </form>

          <Link
            to="/wishlist"
            className="header-icon-button"
            aria-label="View favorites"
          >
            <HeartIcon />
          </Link>

          <Link
            to="/bag"
            className="header-icon-button"
            aria-label={`Shopping bag with ${bagCount} items`}
          >
            <BagIcon />

            {bagCount > 0 && (
              <span className="header-bag-count">{bagCount}</span>
            )}
          </Link>

          <button
            type="button"
            className="header-menu-button"
            onClick={onMenuToggle}
            aria-label="Open navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      <section className="header-promotion">
        <p>BACK TO SCHOOL SALE</p>

        <p className="promotion-discount">
          EXTRA 25% OFF
          <span>SELECT STYLES</span>
        </p>

        <div className="promotion-logo-box">
          <img
            src={nikeLogo}
            alt="Promotion logo"
            className="promotion-logo"
          />
        </div>

        <p>CODE: DAYONE</p>
      </section>
    </>
  );
}

export default Header;
