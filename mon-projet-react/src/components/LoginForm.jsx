import "../styles/ButtonGroupLogin.scss";
import { useState } from "react";
import LoginPicture from "../assets/images/LoginPicture.webp";
import LoginPicture2 from "../assets/images/LoginPicture2.webp";

function ButtonGroup() {
  const [activeButton, setActiveButton] = useState("login");
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);

  const handleButtonClick = (button) => {
    setActiveButton(button);
    // Réinitialiser le formulaire lorsqu'on passe d'un formulaire à l'autre
    setFormData({ email: "", username: "", password: "" });
    setRememberMe(false); // Réinitialiser la case "Remember Me" lors du changement
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traitement du formulaire (par exemple, envoi des données à une API)
    console.log("Form submitted:", formData, "Remember Me:", rememberMe);
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="form-and-image">
      {/* Image */}
      {activeButton === "login" && (
        <div className="form-image-container">
          <img src={LoginPicture} alt="Login" className="form-image" />
        </div>
      )}

      {activeButton === "register" && (
        <div className="form-image-container">
          <img src={LoginPicture2} alt="Register" className="form-image" />
        </div>
      )}

      {/* Form */}
      <div className="btn-group-container">
        <h1>Welcome to lorem..!</h1>
        <div className="btn-group">
          <button
            className={`btn ${activeButton === "login" ? "active" : ""}`}
            onClick={() => handleButtonClick("login")}
          >
            Login
          </button>
          <button
            className={`btn ${activeButton === "register" ? "active" : ""}`}
            onClick={() => handleButtonClick("register")}
          >
            Register
          </button>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        {/* Form Content */}
        <div className="form-container-login">
          <div className="form-content">
            <form onSubmit={handleSubmit}>
              {activeButton === "register" && (
                <div>
                  <label htmlFor="email">Email Address:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              )}
              <div>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  id="username"
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <div className="password-wrapper">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    id="password"
                    placeholder="Enter your password"
                    required
                  />
                  <span
                    className="password-toggle-icon"
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? (
                      <i className="fas fa-eye-slash"></i> // Icône d’œil masqué
                    ) : (
                      <i className="fas fa-eye"></i> // Icône d’œil affiché
                    )}
                  </span>
                </div>
              </div>

              {/* Remember Me and Forgot Password div */}
              {activeButton === "login" && (
                <div className="remember-forgot-container">
                  <div className="remember-me">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={rememberMe}
                      onChange={handleRememberMeChange}
                      id="rememberMe"
                    />
                    <label htmlFor="rememberMe">Remember Me</label>
                  </div>

                  {/* Forgot Password link */}
                  <div className="forgot-password">
                    <a href="/forgot-password">Forgot Password?</a>
                  </div>
                </div>
              )}

              <button type="submit" className="submit-btn">
                {activeButton === "login" ? "Login" : "Register"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ButtonGroup;
