import { Link } from "react-router-dom";
import { useBag } from "../context/BagContext.jsx";
import "./BagPage.css";

function BagPage() {
  const { bagEntries, bagTotal, removeFromBag, updateQuantity } =
    useBag();

  if (bagEntries.length === 0) {
    return (
      <main className="bag-page bag-page-empty route-fade">
        <h1>Your bag is empty</h1>
        <p>Looks like you haven&apos;t added anything yet.</p>
        <Link to="/" className="bag-continue-link">
          Continue Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="bag-page route-fade">
      <h1 className="reveal">Your Bag</h1>

      <div className="bag-layout">
        <div className="bag-items">
          {bagEntries.map(({ product, quantity }, index) => {
            const price = product.sale
              ? product.salePrice
              : product.price;

            return (
              <article
                className={`bag-item reveal reveal-${
                  (index % 5) + 1
                }`}
                key={product.id}
              >
                <Link
                  to={`/product/${product.id}`}
                  className="bag-item-media"
                >
                  <img src={product.image} alt={product.name} />
                </Link>

                <div className="bag-item-info">
                  <Link to={`/product/${product.id}`}>
                    <h3>{product.name}</h3>
                  </Link>

                  <p>{product.type}</p>

                  <div className="bag-item-controls">
                    <div className="bag-quantity">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(product.id, quantity - 1)
                        }
                        aria-label={`Decrease quantity of ${product.name}`}
                      >
                        −
                      </button>

                      <span>{quantity}</span>

                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(product.id, quantity + 1)
                        }
                        aria-label={`Increase quantity of ${product.name}`}
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      className="bag-remove"
                      onClick={() => removeFromBag(product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <div className="bag-item-price">
                  ${(price * quantity).toFixed(2)}
                </div>
              </article>
            );
          })}
        </div>

        <aside className="bag-summary reveal reveal-2">
          <h2>Order Summary</h2>

          <div className="bag-summary-row">
            <span>Subtotal</span>
            <strong>${bagTotal.toFixed(2)}</strong>
          </div>

          <div className="bag-summary-row">
            <span>Estimated Shipping</span>
            <strong>Free</strong>
          </div>

          <div className="bag-summary-total">
            <span>Total</span>
            <strong>${bagTotal.toFixed(2)}</strong>
          </div>

          <button
            type="button"
            className="bag-checkout"
            onClick={() =>
              window.alert(
                "This is a demo storefront — checkout isn't wired up yet."
              )
            }
          >
            Checkout
          </button>
        </aside>
      </div>
    </main>
  );
}

export default BagPage;
