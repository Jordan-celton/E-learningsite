import { useState } from "react";
import "../styles/WhatIsTotc.scss";
import Image1 from "../assets/images/whatistotc1.png";
import Image2 from "../assets/images/whatistotc2.png";

const WhatIsTotc = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (button) => {
    setSelectedButton(selectedButton === button ? null : button);
  };

  return (
    <section>
      <div className="what-is-totc">
        <h1 className="what-is-totc__title">
          <span className="what-is-totc__title--primary">What is</span>
          <span className="what-is-totc__title--secondary"> TOTC?</span>
        </h1>

        <p className="what-is-totc__text">
          TOTC is a platform that allows educators to create online classes...
        </p>
      </div>

      {/* ✅ Conteneur Flexbox pour aligner les images en desktop */}
      <div className="what-is-totc__container">
        {/* Section FOR INSTRUCTORS */}
        <div className="what-is-totc__image">
          <h2>FOR INSTRUCTORS</h2>
          <button
            className={`custom-button ${
              selectedButton === "instructor" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("instructor")}
          >
            Start a class today
          </button>
          <img
            src={Image1}
            className="what-is-totc__image--img"
            alt="Instructors"
          />
        </div>

        {/* Section FOR STUDENTS */}
        <div className="what-is-totc__image">
          <h2>FOR STUDENTS</h2>
          <button
            className={`custom-button ${
              selectedButton === "student" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("student")}
          >
            Enter access code
          </button>
          <img
            src={Image2}
            className="what-is-totc__image--img"
            alt="Students"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatIsTotc;
