import '../styles/Login.scss'
import LoginPicture from '../assets/images/LoginPicture.webp'
import ButtonGroupLogin from '../components/ButtonGroupLogin'
import FormLogin from '../components/FormLogin';

const Login = () => {
  return (
    <section className="login-container">
    <div className="picture">
        <img src={LoginPicture} alt="image d'une enfant qui lève le doigt"/>
    </div>
        <div className="form-container">
      <h2>Welcome to lorem..!</h2>
      <ButtonGroupLogin />
      <FormLogin />
      </div>
    </section>
  );
}

export default Login;
