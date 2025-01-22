import { BrowserRouter as Router } from "react-router-dom"; // Import de React Router
import "./styles/App.scss"; // Import du fichier de styles global
import Login from "./pages/Login"; // Import de la page Login
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <Router>
      <Login />
    </Router>
  );
}

export default App;
