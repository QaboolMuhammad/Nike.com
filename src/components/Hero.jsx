import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import "./Hero.css";
import ShoeCollection from "./ShoeCollection.jsx";
import FootballStories from "./FootballStories.jsx";
import CityCampaign from "./CityCampaign.jsx";
import HikeCategories from "./HikeCategories.jsx";

const firstCards = [
  {
    id: 1,
    title: "Maximum Breathability",
    description:
      "Lightweight material maximizes airflow and helps provide everyday comfort.",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 2,
    title: "Flexible Material",
    description:
      "Breathable fabric provides comfortable movement during active sessions.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 3,
    title: "Targeted Airflow",
    description:
      "Mesh zones provide focused ventilation where it is needed most.",
    image:
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1000&q=85",
  },
];

const runningCards = [
  {
    id: 1,
    name: "Aero Racer 4",
    description: "Speed-focused performance built to push you further.",
    to: "/product/aero-racer-4",
    image:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 2,
    name: "Velocity Pro 3",
    description: "Responsive comfort for your fastest training sessions.",
    to: "/product/velocity-pro-3",
    image:
      "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 3,
    name: "Zoom Motion 6",
    description: "Everyday technology meets comfortable road running.",
    to: "/product/zoom-motion-6",
    image:
      "https://images.unsplash.com/photo-1486218119243-13883505764c?auto=format&fit=crop&w=1000&q=85",
  },
];

function Hero() {
  const firstVideoRef = useRef(null);
  const secondVideoRef = useRef(null);
  const navigate = useNavigate();

  const [firstVideoPlaying, setFirstVideoPlaying] = useState(true);
  const [secondVideoPlaying, setSecondVideoPlaying] = useState(true);

  const toggleVideo = async (videoReference, updatePlayingState) => {
    const video = videoReference.current;

    if (!video) {
      return;
    }

    try {
      if (video.paused) {
        await video.play();
        updatePlayingState(true);
      } else {
        video.pause();
        updatePlayingState(false);
      }
    } catch (error) {
      console.log("Video play error:", error);
      updatePlayingState(false);
    }
  };

  return (
    <>
      <section className="video-hero">
        <video
          ref={firstVideoRef}
          className="hero-video"
          src={video2}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onPlay={() => setFirstVideoPlaying(true)}
          onPause={() => setFirstVideoPlaying(false)}
        >
          Your browser does not support video.
        </video>

        <div className="video-overlay"></div>

        <div className="video-content">
          <p>New Sports Collection</p>
          <h1>MOVE WITHOUT LIMITS</h1>

          <span>
            Built for speed, control and everyday movement.
          </span>

          <div className="video-buttons">
            <button type="button" onClick={() => navigate("/men")}>
              Shop Collection
            </button>

            <button
              type="button"
              className="watch-button"
              onClick={() =>
                toggleVideo(firstVideoRef, setFirstVideoPlaying)
              }
            >
              {firstVideoPlaying ? "❚❚ Pause" : "▶ Play"}
            </button>
          </div>
        </div>
      </section>

      <section className="feature-images" id="featured">
        {firstCards.map((card, index) => (
          <article
            className={`feature-card reveal reveal-${(index % 5) + 1}`}
            key={card.id}
          >
            <div className="feature-image-wrapper">
              <img src={card.image} alt={card.title} />
            </div>

            <div className="feature-card-content">
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="best-class-section reveal">
        <h2>BEST IN CLASS</h2>

        <p>
          From class to sport, discover everyday essentials
          designed for movement.
        </p>
      </section>

      <section className="second-video-section">
        <video
          ref={secondVideoRef}
          className="second-video"
          src={video1}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onPlay={() => setSecondVideoPlaying(true)}
          onPause={() => setSecondVideoPlaying(false)}
        >
          Your browser does not support video.
        </video>

        <div className="second-video-overlay"></div>

        <div className="second-video-content">
          <p>New Season Essentials</p>
          <h2>HEAVY ROTATION</h2>

          <span>
            Everyday sportswear designed to keep you moving.
          </span>

          <div className="second-video-buttons">
            <button type="button" onClick={() => navigate("/women")}>
              Shop
            </button>

            <button
              type="button"
              className="second-play-button"
              onClick={() =>
                toggleVideo(secondVideoRef, setSecondVideoPlaying)
              }
            >
              {secondVideoPlaying ? "❚❚ Pause" : "▶ Play"}
            </button>
          </div>
        </div>
      </section>

      <section className="running-heading reveal">
        <p>NIKE RUNNING</p>
        <h2>RUN BEYOND LIMITS</h2>

        <span>
          Performance footwear for training, racing and
          everyday movement.
        </span>
      </section>

      <section className="running-card-grid">
        {runningCards.map((card, index) => (
          <article
            className={`running-product-card reveal reveal-${
              (index % 5) + 1
            }`}
            key={card.id}
          >
            <Link to={card.to} className="running-image">
              <img src={card.image} alt={card.name} />
            </Link>

            <div className="running-card-information">
              <p>{card.name}</p>
              <h3>{card.description}</h3>

              <Link to={card.to} className="running-shop-button">
                Shop Running
              </Link>
            </div>
          </article>
        ))}
      </section>

      <ShoeCollection />
      <FootballStories />
      <CityCampaign />
      <HikeCategories />
    </>
  );
}

export default Hero;
