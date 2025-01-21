import { BrowserRouter as Router} from 'react-router-dom';  // Import de React Router
import './styles/App.scss';  // Import du fichier de styles global
import Login from './pages/Login';  // Import de la page Login


function App() {
  return (
    <Router>
      <div className="App">
        <Login />
        <main>
        </main>
      </div>
    </Router>
  );
}

export default App;
