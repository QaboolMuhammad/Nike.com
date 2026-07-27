import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/products.js";
import { useBag } from "../context/BagContext.jsx";
import ProductCard from "../components/ProductCard.jsx";
import "./CategoryPage.css";

function WishlistPage() {
  const { wishlist } = useBag();
  const favorites = PRODUCTS.filter((product) =>
    wishlist.has(product.id)
  );

  return (
    <main className="category-page route-fade">
      <section className="category-hero reveal">
        <p>{favorites.length} Saved</p>
        <h1>Your Favorites</h1>
      </section>

      {favorites.length > 0 ? (
        <div className="category-grid" style={{ marginTop: 32 }}>
          {favorites.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
            />
          ))}
        </div>
      ) : (
        <div className="category-empty reveal">
          <h2>No favorites yet</h2>
          <p>
            Tap the heart on any product to save it here.{" "}
            <Link to="/">Start browsing</Link>
          </p>
        </div>
      )}
    </main>
  );
}

export default WishlistPage;
