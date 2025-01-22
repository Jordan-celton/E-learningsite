import "../styles/ButtonGroupLogin.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importer useNavigate
import LoginPicture from "../assets/images/LoginPicture.webp";
import LoginPicture2 from "../assets/images/LoginPicture2.webp";

function LoginForm() {
  const [activeButton, setActiveButton] = useState("login");
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);

  // Créer une instance de navigate pour rediriger l'utilisateur
  const navigate = useNavigate();

  const handleButtonClick = (button) => {
    setActiveButton(button);
    setFormData({ email: "", username: "", password: "" });
    setRememberMe(false);
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
    console.log("Form submitted:", formData, "Remember Me:", rememberMe);

    // Redirection vers la page "Home" après un succès de connexion
    if (activeButton === "login") {
      navigate("/home"); // Redirige vers la page home
    }
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="form-and-image">
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

        <div className="form-container">
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
                      <i className="fas fa-eye-slash"></i>
                    ) : (
                      <i className="fas fa-eye"></i>
                    )}
                  </span>
                </div>
              </div>

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

export default LoginForm;
