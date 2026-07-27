import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProductById, PRODUCTS } from "../data/products.js";
import { useBag } from "../context/BagContext.jsx";
import ProductCard from "../components/ProductCard.jsx";
import "./ProductDetail.css";

const SIZES = ["6", "7", "8", "9", "10", "11", "12"];

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const { addToBag, toggleWishlist, isWishlisted } = useBag();
  const [selectedSize, setSelectedSize] = useState(null);
  const [sizeError, setSizeError] = useState(false);

  if (!product) {
    return (
      <main className="product-detail-missing route-fade">
        <h1>We couldn&apos;t find that product</h1>
        <p>It may have sold out or the link may be incorrect.</p>
        <Link to="/">Back to home</Link>
      </main>
    );
  }

  const favorited = isWishlisted(product.id);

  const related = PRODUCTS.filter(
    (item) =>
      item.category === product.category && item.id !== product.id
  ).slice(0, 4);

  const handleAddToBag = () => {
    if (!selectedSize) {
      setSizeError(true);
      return;
    }

    setSizeError(false);
    addToBag(product.id);
  };

  return (
    <main className="product-detail route-fade">
      <button
        type="button"
        className="product-detail-back"
        onClick={() => navigate(-1)}
      >
        ‹ Back
      </button>

      <div className="product-detail-layout">
        <div className="product-detail-media reveal">
          <img src={product.image} alt={product.name} />

          {product.sale && (
            <span className="product-detail-badge">Sale</span>
          )}
        </div>

        <div className="product-detail-info reveal reveal-2">
          <p className="product-detail-eyebrow">{product.type}</p>
          <h1>{product.name}</h1>

          {product.sale ? (
            <div className="product-detail-price">
              <strong>${product.salePrice}</strong>
              <s>${product.price}</s>
            </div>
          ) : (
            <div className="product-detail-price">
              <strong>${product.price}</strong>
            </div>
          )}

          <p className="product-detail-description">
            {product.description}
          </p>

          <div className="product-detail-sizes">
            <p>Select Size</p>

            <div className="product-detail-size-grid">
              {SIZES.map((size) => (
                <button
                  type="button"
                  key={size}
                  className={
                    selectedSize === size
                      ? "size-button is-selected"
                      : "size-button"
                  }
                  onClick={() => {
                    setSelectedSize(size);
                    setSizeError(false);
                  }}
                >
                  {size}
                </button>
              ))}
            </div>

            {sizeError && (
              <p className="product-detail-size-error">
                Please select a size before adding to bag.
              </p>
            )}
          </div>

          <div className="product-detail-actions">
            <button
              type="button"
              className="product-detail-add"
              onClick={handleAddToBag}
            >
              Add to Bag
            </button>

            <button
              type="button"
              className={
                favorited
                  ? "product-detail-wishlist is-active"
                  : "product-detail-wishlist"
              }
              onClick={() => toggleWishlist(product.id)}
            >
              {favorited ? "♥ Favorited" : "♡ Favorite"}
            </button>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="product-detail-related">
          <h2>You Might Also Like</h2>

          <div className="product-detail-related-grid">
            {related.map((item, index) => (
              <ProductCard
                key={item.id}
                product={item}
                index={index}
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

export default ProductDetail;
