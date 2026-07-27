import { Routes, Route } from "react-router-dom";
import "./App.css";
import { BagProvider } from "./context/BagContext.jsx";
import Layout from "./components/Layout.jsx";
import Hero from "./components/Hero.jsx";
import BackToSchool from "./components/BackToSchool.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import BagPage from "./pages/BagPage.jsx";
import SearchResults from "./pages/SearchResults.jsx";
import WishlistPage from "./pages/WishlistPage.jsx";

function Home() {
  return <Hero />;
}

function BackToSchoolPage() {
  return (
    <main className="route-fade">
      <BackToSchool />
    </main>
  );
}

function App() {
  return (
    <BagProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="men"
            element={
              <CategoryPage
                category="men"
                title="Men's Shoes & Clothing"
                description="Performance and lifestyle essentials for every kind of movement."
              />
            }
          />

          <Route
            path="women"
            element={
              <CategoryPage
                category="women"
                title="Women's Shoes & Clothing"
                description="From the track to the street, gear built for how you move."
              />
            }
          />

          <Route
            path="kids"
            element={
              <CategoryPage
                category="kids"
                title="Kids' Shoes & Gear"
                description="Durable, comfortable essentials for school, sport, and everything after."
              />
            }
          />

          <Route
            path="jordan"
            element={
              <CategoryPage
                category="jordan"
                title="Jordan Collection"
                description="Precision-built football boots and lifestyle icons."
              />
            }
          />

          <Route
            path="sale"
            element={
              <CategoryPage
                category="sale"
                title="Sale"
                description="Final styles, marked down while they last."
              />
            }
          />

          <Route path="back-to-school" element={<BackToSchoolPage />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="search" element={<SearchResults />} />
          <Route path="wishlist" element={<WishlistPage />} />
          <Route path="bag" element={<BagPage />} />

          <Route
            path="*"
            element={
              <main style={{ padding: "160px 20px", textAlign: "center" }}>
                <h1>Page not found</h1>
                <p>The page you're looking for doesn't exist.</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BagProvider>
  );
}

export default App;
