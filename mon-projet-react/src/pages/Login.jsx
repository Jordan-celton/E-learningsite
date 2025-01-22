import "../styles/Login.scss";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <section className="login-container">
      <div className="form-container">
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
