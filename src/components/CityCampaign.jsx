import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import cityLogo from "../assets/nikey.png";
import dangerousLogo from "../assets/danger.png";
import video2 from "../assets/video2.mp4";

import "./CityCampaign.css";

function CityCampaign() {
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
    <section className="city-campaign">
      <div className="city-campaign-logo reveal">
        <img src={cityLogo} alt="City campaign" />
      </div>

      <div className="city-campaign-images">
        <article className="city-panel city-left-panel reveal">
          <img
            src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1400&q=90"
            alt="Basketball player preparing for a game"
            loading="lazy"
          />

          <div className="city-panel-overlay"></div>

          <div className="city-panel-content">
            <p>Stride City Season</p>

            <h3>
              OWN THE COURT.
              <br />
              MOVE THE CITY.
            </h3>

            <span>
              Great players, memorable courts and one
              season built around movement and
              competition.
            </span>

            <div className="city-panel-buttons">
              <Link to="/men">
                <button type="button">Learn More</button>
              </Link>

              <button type="button">Follow Us</button>
            </div>
          </div>
        </article>

        <article className="city-panel city-right-panel reveal reveal-2">
          <img
            src="https://images.unsplash.com/photo-1518063319789-7217e6706b04?auto=format&fit=crop&w=1400&q=90"
            alt="Basketball player moving during a game"
            loading="lazy"
          />

          <div className="right-panel-label">
            <p>Play Anywhere</p>
          </div>
        </article>
      </div>

      <div className="danger-logo-section">
        <img src={dangerousLogo} alt="Dangerous collection" />
      </div>

      <section className="danger-video-section">
        <video
          ref={videoRef}
          className="danger-video"
          src={video2}
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

        <div className="danger-video-overlay"></div>

        <div className="danger-video-content">
          <p>New Performance Collection</p>
          <h3>FEELS. LIGHT HIKES HARD.</h3>

          <div className="danger-video-buttons">
            <button type="button" onClick={() => navigate("/men")}>
              Shop Collection
            </button>

            <button
              type="button"
              className="danger-play-button"
              onClick={toggleVideo}
            >
              {videoPlaying ? "❚❚ Pause" : "▶ Play"}
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default CityCampaign;
