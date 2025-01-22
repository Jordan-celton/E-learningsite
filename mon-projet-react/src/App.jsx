import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import Login from "./pages/Login";
import Home from "./pages/Home"; // Assure-toi que cette page est créée
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Page de login */}
        <Route path="/home" element={<Home />} />{" "}
        {/* Page d'accueil après la connexion */}
      </Routes>
    </Router>
  );
}

export default App;
