import '../styles/Login.scss'
import LoginPicture from '../assets/images/LoginPicture.webp'
import ButtonGroup from '../components/ButtonGroup'

const Login = () => {
  return (
    <section className="login-container">
    <div className="picture">
        <img src={LoginPicture} alt="image d'une enfant qui lève le doigt"/>
    </div>
        <div className="form-container">
      <h2>Welcome to lorem..!</h2>
      <ButtonGroup />
      </div>
    </section>
  );
}

export default Login;
