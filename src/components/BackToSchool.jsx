import { useRef } from "react";
import { Link } from "react-router-dom";
import "./BackToSchool.css";

import schoolLogo from "../assets/school-logo.png";

import boot1 from "../assets/shoes/boot1.png";
import boot2 from "../assets/shoes/boot2.png";
import boot3 from "../assets/shoes/boot3.png";
import boot4 from "../assets/shoes/boot4.png";
import boot5 from "../assets/shoes/boot5.png";

const schoolShoes = [
  { id: 1, image: boot1, alt: "Black training shoe" },
  { id: 2, image: boot2, alt: "Cream training shoe" },
  { id: 3, image: boot3, alt: "Blue training shoe" },
  { id: 4, image: boot4, alt: "White training shoe" },
  { id: 5, image: boot5, alt: "Light blue training shoe" },
];

const schoolCards = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=90",
    alt: "Kids shoes for school",
    description: "Bring serious style to their everyday game.",
    buttonText: "Jordan Kids",
    to: "/kids",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=90",
    alt: "School backpack",
    description:
      "Find the perfect bag for carrying their gear comfortably.",
    buttonText: "Bags & Backpacks",
    to: "/kids",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=90",
    alt: "Kids ready for school",
    description:
      "Elevate their school style with essentials for the classroom and sport.",
    buttonText: "Nike Kids",
    to: "/kids",
  },
];

function BackToSchool() {
  const shoesSliderRef = useRef(null);

  const scrollSchoolShoes = (direction) => {
    const slider = shoesSliderRef.current;

    if (!slider) {
      return;
    }

    const scrollAmount = slider.clientWidth * 0.75;

    slider.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="back-to-school">
      <div className="back-to-school-heading reveal">
        <h2>BACK TO SCHOOL</h2>
        <p>Mix and match with ease, because every piece plays.</p>
      </div>

      <div className="school-card-grid">
        {schoolCards.map((card, index) => (
          <article
            className={`school-card reveal reveal-${(index % 5) + 1}`}
            key={card.id}
          >
            <img src={card.image} alt={card.alt} loading="lazy" />

            <div className="school-card-overlay"></div>

            <div className="school-card-content">
              <p>{card.description}</p>

              <Link to={card.to}>
                <button type="button">{card.buttonText}</button>
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="school-logo-banner">
        <img src={schoolLogo} alt="Nike logo" />
      </div>

      <div className="training-category-grid">
        <Link to="/men" className="training-category-card reveal">
          <img
            src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1400&q=90"
            alt="Men training collection"
            loading="lazy"
          />

          <div className="training-card-overlay"></div>

          <div className="training-card-content">
            <p>New season. New kit.</p>
            <h3>Shop Men</h3>
          </div>
        </Link>

        <Link
          to="/women"
          className="training-category-card reveal reveal-2"
        >
          <img
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1400&q=90"
            alt="Women training collection"
            loading="lazy"
          />

          <div className="training-card-overlay"></div>

          <div className="training-card-content">
            <p>Get the gear that goes harder.</p>
            <h3>Shop Women</h3>
          </div>
        </Link>
      </div>

      <section className="school-shoes-section">
        <div className="school-shoes-navigation">
          <button
            type="button"
            aria-label="Previous shoes"
            onClick={() => scrollSchoolShoes("previous")}
          >
            ‹
          </button>

          <button
            type="button"
            aria-label="Next shoes"
            onClick={() => scrollSchoolShoes("next")}
          >
            ›
          </button>
        </div>

        <div className="school-shoes-slider" ref={shoesSliderRef}>
          {schoolShoes.map((shoe) => (
            <Link to="/kids" className="school-shoe-card" key={shoe.id}>
              <img src={shoe.image} alt={shoe.alt} loading="lazy" />
            </Link>
          ))}
        </div>

        <Link to="/kids">
          <button type="button" className="school-shoes-shop-button">
            Shop Free Metcon 7
          </button>
        </Link>
      </section>
    </section>
  );
}

export default BackToSchool;
