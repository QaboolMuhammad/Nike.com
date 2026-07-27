import { Link } from "react-router-dom";
import "./Footer.css";
import nikeLogo from "../assets/nike.png";

const topFooterColumns = [
  {
    heading: "Featured",
    links: [
      { label: "Air Force 1", to: "/men" },
      { label: "Jordan 1", to: "/jordan" },
      { label: "Air Max 90", to: "/men" },
      { label: "Air Max 95", to: "/men" },
    ],
  },
  {
    heading: "Shoes",
    links: [
      { label: "All Shoes", to: "/men" },
      { label: "Jordan Shoes", to: "/jordan" },
      { label: "Running Shoes", to: "/men" },
      { label: "Basketball Shoes", to: "/men" },
    ],
  },
  {
    heading: "Clothing",
    links: [
      { label: "All Clothing", to: "/women" },
      { label: "Tops & T-Shirts", to: "/women" },
      { label: "Shorts", to: "/women" },
      { label: "Hoodies & Pullovers", to: "/women" },
    ],
  },
  {
    heading: "Kids",
    links: [
      { label: "Infant & Toddler Shoes", to: "/kids" },
      { label: "Kids Shoes", to: "/kids" },
      { label: "Kids Basketball Shoes", to: "/kids" },
      { label: "Kids Running Shoes", to: "/kids" },
    ],
  },
];

const bottomFooterColumns = [
  {
    heading: "Resources",
    links: [
      { label: "Gift Cards", to: "/sale" },
      { label: "Corporate Sales", to: "/sale" },
      { label: "Find a Store", to: "/" },
      { label: "Membership", to: "/" },
      { label: "Nike Journal", to: "/" },
      { label: "Site Feedback", to: "/" },
    ],
  },
  {
    heading: "Help",
    links: [
      { label: "Get Help", to: "/bag" },
      { label: "Order Status", to: "/bag" },
      { label: "Shipping and Delivery", to: "/" },
      { label: "Returns", to: "/" },
      { label: "Order Cancellation", to: "/" },
      { label: "Payment Options", to: "/" },
      { label: "Gift Card Balance", to: "/" },
      { label: "Contact Us", to: "/" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Nike", to: "/" },
      { label: "News", to: "/" },
      { label: "Careers", to: "/" },
      { label: "Investors", to: "/" },
      { label: "Purpose", to: "/" },
      { label: "Sustainability", to: "/" },
      { label: "Accessibility", to: "/" },
    ],
  },
  {
    heading: "Promotions & Discounts",
    links: [
      { label: "Student", to: "/sale" },
      { label: "Military", to: "/sale" },
      { label: "Teacher", to: "/sale" },
      { label: "First Responders & Medical Professionals", to: "/sale" },
      { label: "Birthday", to: "/sale" },
    ],
  },
];

function FooterColumn({ column }) {
  return (
    <div className="footer-column">
      <h3>{column.heading}</h3>

      <ul>
        {column.links.map((link) => (
          <li key={link.label}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer className="store-footer">
      <div className="footer-logo-banner">
        <img src={nikeLogo} alt="Nike logo" />
      </div>

      <nav className="footer-main-links" aria-label="Main footer links">
        <Link to="/">Find a Store</Link>
        <Link to="/bag">Help</Link>
        <Link to="/">Join Us</Link>
        <Link to="/">Sign In</Link>
      </nav>

      <div className="footer-columns">
        {topFooterColumns.map((column) => (
          <FooterColumn key={column.heading} column={column} />
        ))}
      </div>

      <section className="footer-information">
        <div className="footer-divider"></div>

        <div className="footer-information-grid">
          {bottomFooterColumns.map((column) => (
            <FooterColumn key={column.heading} column={column} />
          ))}

          <span className="footer-country">
            <span aria-hidden="true">◎</span>
            United States
          </span>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
