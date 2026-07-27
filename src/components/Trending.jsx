import { Link } from "react-router-dom";
import "./Trending.css";

import boot1 from "../assets/shoes/boot1.png";
import boot2 from "../assets/shoes/boot2.png";
import boot3 from "../assets/shoes/boot3.png";
import boot4 from "../assets/shoes/boot4.png";
import boot5 from "../assets/shoes/boot5.png";

const trendingItems = [
  { id: 1, title: "Air Jordan 1", image: boot1, to: "/jordan" },
  { id: 2, title: "Air Max", image: boot2, to: "/men" },
  { id: 3, title: "Graphic Tees", image: boot3, to: "/women" },
  { id: 4, title: "Dunk", image: boot4, to: "/jordan" },
  { id: 5, title: "Air Force 1", image: boot5, to: "/men" },
  { id: 6, title: "24.7 Collection", image: boot1, to: "/women" },
  { id: 7, title: "Vomero 5", image: boot2, to: "/men" },
  { id: 8, title: "Sport Ready", image: boot3, to: "/women" },
  { id: 9, title: "ACG", image: boot4, to: "/men" },
  { id: 10, title: "Pegasus", image: boot5, to: "/men" },
  { id: 11, title: "Vomero Plus", image: boot1, to: "/women" },
  { id: 12, title: "Metcon", image: boot2, to: "/men" },
  { id: 13, title: "School Essential", image: boot3, to: "/kids" },
  { id: 14, title: "Jordan Retro", image: boot4, to: "/jordan" },
  { id: 15, title: "Sabrina 4", image: boot5, to: "/women" },
  { id: 16, title: "Tatum 4", image: boot1, to: "/men" },
];

function Trending() {
  return (
    <section className="trending-section">
      <div className="trending-heading reveal">
        <h2>TRENDING</h2>

        <p>
          Classic silhouettes and cutting-edge innovation
          to build your game from the ground up.
        </p>
      </div>

      <div className="trending-grid">
        {trendingItems.map((item, index) => (
          <Link
            to={item.to}
            className={`trending-item reveal reveal-${(index % 5) + 1}`}
            key={item.id}
          >
            <div className="trending-image-wrapper">
              <img src={item.image} alt={item.title} loading="lazy" />
            </div>

            <span>{item.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Trending;
