import { Link } from "react-router-dom";
import { useBag } from "../context/BagContext.jsx";
import "./ProductCard.css";

function ProductCard({ product, index = 0 }) {
  const { addToBag, toggleWishlist, isWishlisted } = useBag();
  const favorited = isWishlisted(product.id);

  return (
    <article
      className={`product-card reveal reveal-${(index % 5) + 1}`}
    >
      <Link
        to={`/product/${product.id}`}
        className="product-card-media"
      >
        <img src={product.image} alt={product.name} loading="lazy" />

        {product.sale && (
          <span className="product-card-badge">Sale</span>
        )}
      </Link>

      <button
        type="button"
        className={
          favorited
            ? "product-card-favorite is-active"
            : "product-card-favorite"
        }
        aria-label={
          favorited
            ? `Remove ${product.name} from favorites`
            : `Add ${product.name} to favorites`
        }
        onClick={(event) => {
          event.preventDefault();
          toggleWishlist(product.id);
        }}
      >
        {favorited ? "♥" : "♡"}
      </button>

      <div className="product-card-details">
        <Link to={`/product/${product.id}`}>
          <h3>{product.name}</h3>
          <p>{product.type}</p>
        </Link>

        <div className="product-card-footer">
          {product.sale ? (
            <span className="product-card-price">
              <strong>${product.salePrice}</strong>
              <s>${product.price}</s>
            </span>
          ) : (
            <span className="product-card-price">
              <strong>${product.price}</strong>
            </span>
          )}

          <button
            type="button"
            className="product-card-add"
            onClick={() => addToBag(product.id)}
          >
            Add to Bag
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
