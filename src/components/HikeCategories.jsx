import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import outdoorLogo from "../assets/polo.png";
import hikeVideo from "../assets/video1.mp4";
import BackToSchool from "./BackToSchool";
import "./HikeCategories.css";
import Trending from "./Trending";

const hikeCategories = [
  {
    id: 1,
    title: "Clothing",
    to: "/men",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 2,
    title: "Accessories & Equipment",
    to: "/men",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 3,
    title: "Shoes",
    to: "/men",
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=1200&q=90",
  },
];

function HikeCategories() {
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const [videoPlaying, setVideoPlaying] = useState(true);

  const toggleVideo = async () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    try {
      if (video.paused) {
        await video.play();
        setVideoPlaying(true);
      } else {
        video.pause();
        setVideoPlaying(false);
      }
    } catch (error) {
      console.log("Video play error:", error);
      setVideoPlaying(false);
    }
  };

  return (
    <section className="hike-categories">
      <div className="hike-container">
        <h2 className="reveal">Shop Trail Essentials</h2>

        <div className="hike-category-grid">
          {hikeCategories.map((category, index) => (
            <Link
              to={category.to}
              className={`hike-category-card reveal reveal-${
                (index % 5) + 1
              }`}
              key={category.id}
            >
              <div className="hike-image-wrapper">
                <img
                  src={category.image}
                  alt={category.title}
                  loading="lazy"
                />
              </div>

              <h3>{category.title}</h3>
            </Link>
          ))}
        </div>
      </div>

      <div className="hike-logo-banner">
        <img src={outdoorLogo} alt="Outdoor collection logo" />
      </div>

      <section className="hike-campaign-video">
        <video
          ref={videoRef}
          className="hike-campaign-video-element"
          src={hikeVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onPlay={() => setVideoPlaying(true)}
          onPause={() => setVideoPlaying(false)}
        >
          Your browser does not support video.
        </video>

        <div className="hike-video-overlay"></div>

        <div className="hike-video-content">
          <p>New Outdoor Collection</p>
          <h3>NO FAIR.</h3>

          <span>
            Lightweight comfort designed for outdoor
            movement and everyday trails.
          </span>

          <div className="hike-video-buttons">
            <button type="button" onClick={() => navigate("/men")}>
              Shop Collection
            </button>

            <button
              type="button"
              className="hike-play-button"
              onClick={toggleVideo}
            >
              {videoPlaying ? "❚❚ Pause" : "▶ Play"}
            </button>
          </div>
        </div>
      </section>

      <BackToSchool />
      <Trending />
    </section>
  );
}

export default HikeCategories;
