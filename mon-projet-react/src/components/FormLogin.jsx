import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importation des icônes
import "../styles/FormLogin.scss";

const Login = () => {
  // État pour gérer les valeurs du formulaire
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  // État pour gérer la visibilité du mot de passe
  const [showPassword, setShowPassword] = useState(false);

  // Gestion des changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez ajouter ici une logique de validation et d'envoi de données
    console.log(formData);
  };

  // Fonction pour basculer la visibilité du mot de passe
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="login">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">User name</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your user name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"} // Toggle password visibility
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            <button
              type="button"
              className="toggle-password"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}{" "}
              {/* Affiche l'icône en fonction de la visibilité */}
            </button>
          </div>
        </div>

        <div className="bottom-links">
          <div className="form-group">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
            />
            <label htmlFor="remember">Remember me</label>
          </div>

          <a href="/forgot-password">Forgot password?</a>
        </div>

        <button className="btn-login" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
