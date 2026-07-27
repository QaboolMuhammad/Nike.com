import { useRef } from "react";
import { Link } from "react-router-dom";
import "./ShoeCollection.css";
import { getProductsByCategory } from "../data/products.js";
import { useBag } from "../Context/BagContext.jsx";

const collectionItems = getProductsByCategory("men").slice(0, 6);

function LeftArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function RightArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function ShoeCollection() {
  const collectionRef = useRef(null);
  const { addToBag, toggleWishlist, isWishlisted } = useBag();

  const handleScroll = (direction) => {
    const collection = collectionRef.current;

    if (!collection) {
      return;
    }

    const scrollDistance = collection.clientWidth * 0.8;

    collection.scrollBy({
      left: direction === "left" ? -scrollDistance : scrollDistance,
      behavior: "smooth",
    });
  };

  return (
    <section className="shoe-collection" id="products">
      <div className="collection-header reveal">
        <div>
          <p>New this week</p>
          <h2>Shop the Latest</h2>
        </div>

        <div className="collection-buttons">
          <button
            type="button"
            onClick={() => handleScroll("left")}
            aria-label="Scroll collection left"
          >
            <LeftArrowIcon />
          </button>

          <button
            type="button"
            onClick={() => handleScroll("right")}
            aria-label="Scroll collection right"
          >
            <RightArrowIcon />
          </button>
        </div>
      </div>

      <div className="collection-track" ref={collectionRef}>
        {collectionItems.map((item, index) => {
          const favorited = isWishlisted(item.id);
          const price = item.sale ? item.salePrice : item.price;

          return (
            <article
              className={`collection-card reveal reveal-${
                (index % 5) + 1
              }`}
              key={item.id}
            >
              <div className="collection-image">
                <Link to={`/product/${item.id}`}>
                  <img src={item.image} alt={item.name} loading="lazy" />
                </Link>

                <button
                  type="button"
                  className="collection-favorite"
                  aria-label={`Add ${item.name} to favorites`}
                  onClick={() => toggleWishlist(item.id)}
                  style={favorited ? { color: "#d51c42" } : undefined}
                >
                  {favorited ? "♥" : "♡"}
                </button>
              </div>

              <div className="collection-card-details">
                <Link to={`/product/${item.id}`} style={{ color: "inherit", textDecoration: "none" }}>
                  <h3>{item.name}</h3>
                  <p>{item.type}</p>
                </Link>
                <strong>${price}</strong>
                <button
                  type="button"
                  className="collection-card-add"
                  onClick={() => addToBag(item.id)}
                >
                  Add to Bag
                </button>
              </div>
            </article>
          );
        })}
      </div>

      <article className="collection-promotion">
        <img
          src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1900&q=90"
          alt="Basketball player training on court"
          loading="lazy"
        />

        <div className="collection-promotion-overlay"></div>

        <div className="collection-promotion-content">
          <p>Performance Collection</p>

          <h2>
            MORE THAN
            <br />
            ALL STARS
          </h2>

          <span>
            Explore sportswear created for movement, training
            and competition.
          </span>

          <Link to="/men">
            <button type="button">Shop Collection</button>
          </Link>
        </div>
      </article>
    </section>
  );
}

export default ShoeCollection;
