import { useMemo, useState } from "react";
import { getProductsByCategory } from "../data/products.js";
import ProductCard from "../components/ProductCard.jsx";
import "./CategoryPage.css";

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
];

function CategoryPage({ category, title, description }) {
  const [sort, setSort] = useState("featured");
  const products = getProductsByCategory(category);

  const sortedProducts = useMemo(() => {
    const list = [...products];

    const priceOf = (product) =>
      product.sale ? product.salePrice : product.price;

    if (sort === "price-low") {
      list.sort((a, b) => priceOf(a) - priceOf(b));
    } else if (sort === "price-high") {
      list.sort((a, b) => priceOf(b) - priceOf(a));
    }

    return list;
  }, [products, sort]);

  return (
    <main className="category-page route-fade">
      <section className="category-hero reveal">
        <p>{sortedProducts.length} Results</p>
        <h1>{title}</h1>
        {description && <span>{description}</span>}
      </section>

      <div className="category-toolbar reveal">
        <label htmlFor="sort-select">Sort By</label>

        <select
          id="sort-select"
          value={sort}
          onChange={(event) => setSort(event.target.value)}
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {sortedProducts.length > 0 ? (
        <div className="category-grid">
          {sortedProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
            />
          ))}
        </div>
      ) : (
        <div className="category-empty reveal">
          <h2>Nothing here yet</h2>
          <p>
            Check back soon — new styles land in this category
            regularly.
          </p>
        </div>
      )}
    </main>
  );
}

export default CategoryPage;
