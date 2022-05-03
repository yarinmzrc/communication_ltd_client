import { Container } from "../../components/Container/Container";
import './Login.scss'
import '../Register/Register.scss'
import { Link } from "react-router-dom";
import { useState } from "react";

const defaultDetails = {
  email: '',
  password: ''
}

export const LoginPage = () => {
  const [userDetails, setUserDetails] = useState(defaultDetails);

  const handleChange = (e) => {
    setUserDetails({...userDetails, [e.target.id]: e.target.value})
}
  return (<div className="page">
      <Container userDetails={userDetails} handleChange={handleChange} email={userDetails.email} password={userDetails.password} name="Login" />
      <Link className="create" to="/register">Create New Account</Link>
  </div>);
};
