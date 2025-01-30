import "../styles/Success.scss";

const Success = () => {
  const successData = [
    { value: "15K+", label: "Students" },
    { value: "75%", label: "Total success" },
    { value: "35", label: "Main questions" },
    { value: "26", label: "Chief experts" },
    { value: "16", label: "Years of experience" },
  ];

  return (
    <section className="success">
      <div className="success-top">
        <div className="success-top-text">
          <h1>Our Success</h1>
          <p>
            We take pride in our achievements, fostering success through
            experience, expertise, and commitment to excellence.
          </p>
        </div>
      </div>
      <div className="success-stories">
        <ul className="success-list">
          {successData.map((item, index) => (
            <li key={index} className="success-item">
              <span className="success-value">{item.value}</span>
              <p className="success-label">{item.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Success;
