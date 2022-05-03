import { Container } from "../../components/Container/Container";
import './Login.scss'
import '../Register/Register.scss'
import { Link } from "react-router-dom";
export const LoginPage = () => {
  return (<div className="page">
      <Container name="Login" />
      <Link className="create" to="/register">Create New Account</Link>
  </div>);
};
