import '../styles/ButtonGroupLogin.scss';
import { useState } from 'react';

function ButtonGroup() {
  const [activeButton, setActiveButton] = useState('login'); // Etat pour gérer le bouton actif

  const handleButtonClick = (button) => {
    setActiveButton(button); // Mise à jour de l'état avec le bouton cliqué
  };

  return (
    <div className="btn-group">
      <button
        className={`btn ${activeButton === 'login' ? 'active' : ''}`}
        onClick={() => handleButtonClick('login')}
      >
        Login
      </button>
      <button
        className={`btn ${activeButton === 'register' ? 'active' : ''}`}
        onClick={() => handleButtonClick('register')}
      >
        Register
      </button>
    </div>
  );
}

export default ButtonGroup;
