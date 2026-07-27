import { useRef } from "react";
import { Link } from "react-router-dom";
import "./FootballStories.css";
import boot1 from "../assets/shoes/boot1.png";
import boot2 from "../assets/shoes/boot2.png";
import boot3 from "../assets/shoes/boot3.png";
import boot4 from "../assets/shoes/boot4.png";
import boot5 from "../assets/shoes/boot5.png";
import boot6 from "../assets/shoes/boot6.png";

const footballStories = [
  {
    id: 1,
    name: "The Finisher",
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 2,
    name: "Midfield Engine",
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 3,
    name: "Game Changer",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 4,
    name: "Future Star",
    image:
      "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 5,
    name: "The Playmaker",
    image:
      "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1000&q=85",
  },
];

const footballBoots = [
  { id: 1, name: "Strike Elite", image: boot1, to: "/product/strike-elite" },
  { id: 2, name: "Phantom Control", image: boot2, to: "/product/phantom-control" },
  { id: 3, name: "Speed Motion", image: boot3, to: "/product/speed-motion" },
  { id: 4, name: "Field Pro", image: boot4, to: "/product/field-pro" },
  { id: 5, name: "Academy Touch", image: boot5, to: "/product/academy-touch" },
  { id: 6, name: "Match Ready", image: boot6, to: "/product/match-ready" },
];

function LeftArrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function RightArrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function FootballStories() {
  const footballTrackRef = useRef(null);
  const bootsTrackRef = useRef(null);

  const scrollFootballCards = (direction) => {
    const track = footballTrackRef.current;

    if (!track) {
      return;
    }

    const distance = track.clientWidth * 0.85;

    track.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  const scrollBoots = (direction) => {
    const track = bootsTrackRef.current;

    if (!track) {
      return;
    }

    const distance = track.clientWidth * 0.8;

    track.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  return (
    <section className="football-stories">
      <div className="football-heading reveal">
        <div>
          <p>Football Stories</p>
          <h2>Meet the Players</h2>
        </div>

        <div className="football-arrow-buttons">
          <button
            type="button"
            onClick={() => scrollFootballCards("left")}
            aria-label="Scroll football stories left"
          >
            <LeftArrow />
          </button>

          <button
            type="button"
            onClick={() => scrollFootballCards("right")}
            aria-label="Scroll football stories right"
          >
            <RightArrow />
          </button>
        </div>
      </div>

      <div className="football-track" ref={footballTrackRef}>
        {footballStories.map((story) => (
          <Link
            to="/jordan"
            className="football-story-card"
            key={story.id}
          >
            <img src={story.image} alt={story.name} loading="lazy" />

            <div className="football-card-overlay"></div>

            <p className="football-player-name">{story.name}</p>

            <div className="football-card-bottom">
              <span>Football</span>
              <button type="button">Explore</button>
            </div>
          </Link>
        ))}
      </div>

      <div className="street-collection-heading reveal">
        <h2>NIKE AVA EDGE ✓</h2>
        <span>STREET-READY PERFORMANCE.</span>
      </div>

      <section className="street-collection-grid">
        <article className="street-image-card street-large-card reveal">
          <img
            src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1400&q=90"
            alt="Football player training outdoors"
            loading="lazy"
          />

          <div className="street-image-overlay"></div>

          <div className="street-image-content">
            <p>Urban Football Collection</p>

            <h2>
              STREET-READY
              <br />
              PROTECTION
            </h2>

            <span>
              Strong on the outside and comfortable through
              every movement.
            </span>

            <Link to="/jordan">
              <button type="button">Explore Collection</button>
            </Link>
          </div>
        </article>

        <article className="street-image-card street-small-card reveal reveal-2">
          <img
            src="https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=1200&q=90"
            alt="Football boots and ball on a field"
            loading="lazy"
          />

          <div className="small-card-label">
            <p>Built for Control</p>
          </div>
        </article>

        <article className="street-image-card street-small-card reveal reveal-3">
          <img
            src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1200&q=90"
            alt="Football player moving on the field"
            loading="lazy"
          />

          <div className="small-card-label">
            <p>Ready for Movement</p>
          </div>
        </article>
      </section>

      <article className="collection-promotion reveal">
        <img
          src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1900&q=90"
          alt="Basketball player training on court"
          loading="lazy"
        />

        <div className="collection-promotion-overlay"></div>

        <div className="collection-promotion-content">
          <p>Performance Collection</p>

          <h2>
            THE BREAK
            <br />
            'EM PACK
          </h2>

          <span>
            Explore sportswear created for movement, training
            and competition.
          </span>

          <Link to="/jordan">
            <button type="button">Shop Collection</button>
          </Link>
        </div>
      </article>

      <section className="football-boots-section">
        <div className="football-boots-header reveal">
          <div>
            <p>Play Your Way</p>
            <h2>Football Boots</h2>
          </div>

          <div className="boots-arrow-buttons">
            <button
              type="button"
              onClick={() => scrollBoots("left")}
              aria-label="Scroll football boots left"
            >
              <LeftArrow />
            </button>

            <button
              type="button"
              onClick={() => scrollBoots("right")}
              aria-label="Scroll football boots right"
            >
              <RightArrow />
            </button>
          </div>
        </div>

        <div className="football-boots-track" ref={bootsTrackRef}>
          {footballBoots.map((boot) => (
            <Link
              to={boot.to}
              className="football-boot-card"
              key={boot.id}
            >
              <img src={boot.image} alt={boot.name} loading="lazy" />
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
}

export default FootballStories;
