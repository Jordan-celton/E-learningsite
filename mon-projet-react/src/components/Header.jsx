import { useNavigate } from "react-router-dom";
import BannerLogo from "../assets/images/logo.png";
import btnPlay from "../assets/images/btn-play.png";
import TeenageGirl from "../assets/images/teenage-girl.webp";
import IconHeader from "../assets/images/icon-header.png";
import IconHeader2 from "../assets/images/icon-header2.png";
import IconHeader3 from "../assets/images/icon-header3.png";
import "../styles/Header.scss";

const Header = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/login", { state: { activeButton: "register" } });
  };

  return (
    <section className="header">
      <div className="header-top">
        <div className="banner-logo">
          <img src={BannerLogo} alt="TOTC Logo" />
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
      <section className="banner">
        <div className="banner-title">
          <h1>
            <span>Studying</span> Online is now much easier
          </h1>
          <p>
            TOTC is an interesting platform that will teach you in a more
            interactive way
          </p>
          <div className="banner-play-btn">
            <button>Join for free</button>
            <img src={btnPlay} alt="Play icon" />
            <span>Watch how it works</span>
          </div>
        </div>
        <div className="banner-info">
          <div className="banner-info-img">
            <img src={TeenageGirl} alt="Teenage Girl" />
            <img className="icon" src={IconHeader} alt="Class Icon" />
          </div>
          <div className="banner-info-item banner-info-item1">
            <img src={IconHeader2} alt="Student Icon" />
            <h2>250k</h2>
            <p>Assisted Student</p>
          </div>

          <div className="banner-info-item banner-info-item2">
            <i className="fa-solid fa-envelope" aria-hidden="true"></i>
            <h2>Congratulations</h2>
            <p>Your admission completed</p>
          </div>
          <div className="banner-info-item banner-info-item3">
            <img src={IconHeader3} alt="Class Icon" />
            <h2>User Experience Class</h2>
            <p>Today at 12.00 PM</p>
            <button>Join Now</button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Header;
