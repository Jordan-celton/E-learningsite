import { useNavigate } from "react-router-dom";
import BannerLogo from "../assets/images/logo.png";
import btnPlay from "../assets/images/btn-play.png";
import "../styles/BannerHome.scss";

const Header = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/login", { state: { activeButton: "register" } });
  };

  return (
    <section className="header">
      <div className="header-top">
        <div className="banner-logo">
          <img src={BannerLogo} alt="Bannière" />
        </div>
        <div className="banner-nav">
          <nav aria-label="Main navigation">
            <ul>
              <li>Home</li>
              <li>Courses</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>About Us</li>
            </ul>
          </nav>
        </div>
        <div className="banner-buttons">
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="signup-btn" onClick={handleSignUpClick}>
            Sign Up
          </button>
        </div>
      </div>
      <div className="banner-title">
        <h1>Studying Online is now much easier</h1>
        <p>
          TOTC is an interesting platform that will teach you in more an
          interactive way
        </p>
        <div className="banner-play-btn">
          <img src={btnPlay} alt="Play icon" />
          <span>Watch how it works</span>
        </div>
      </div>
    </section>
  );
};

export default Header;
