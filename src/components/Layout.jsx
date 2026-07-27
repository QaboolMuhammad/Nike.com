import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { useBag } from "../Context/BagContext.jsx";
import { useScrollReveal } from "../hooks/useScrollReveal.js";

function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { bagCount, toast } = useBag();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useScrollReveal(location.pathname);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    setMenuOpen(false);
  }, [location.pathname]);

  const handleSearchSubmit = (term) => {
    const trimmed = term.trim();

    if (trimmed) {
      navigate(`/search?q=${encodeURIComponent(trimmed)}`);
    }
  };

  return (
    <>
      <Header
        bagCount={bagCount}
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((open) => !open)}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onSearchSubmit={handleSearchSubmit}
      />

      <Outlet />

      <Footer />

      {toast && <div className="app-toast">{toast}</div>}
    </>
  );
}

export default Layout;
