import { useSearchParams } from "react-router-dom";
import { searchProducts } from "../data/products.js";
import ProductCard from "../components/ProductCard.jsx";
import "./CategoryPage.css";

function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const results = searchProducts(query);

  return (
    <main className="category-page route-fade">
      <section className="category-hero reveal">
        <p>{results.length} Results</p>
        <h1>
          {query ? `Search results for "${query}"` : "Search"}
        </h1>
      </section>

      {results.length > 0 ? (
        <div className="category-grid" style={{ marginTop: 32 }}>
          {results.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
            />
          ))}
        </div>
      ) : (
        <div className="category-empty reveal">
          <h2>No matches found</h2>
          <p>Try searching for a shoe name, category, or style.</p>
        </div>
      )}
    </main>
  );
}

export default SearchResults;
