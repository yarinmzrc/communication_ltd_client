import { Container } from "../../components/Container/Container";
import './Login.scss'
import '../Register/Register.scss'
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const defaultDetails = {
  email: '',
  password: ''
}

export const LoginPage = () => {
  const [userDetails, setUserDetails] = useState(defaultDetails);
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem("token")) {
      navigate('/system');
    }
  },[])

  const handleChange = (e) => {
    setUserDetails({...userDetails, [e.target.id]: e.target.value})
}
  return (<div className="page">
      <Container userDetails={userDetails} handleChange={handleChange} email={userDetails.email} password={userDetails.password} name="Login" />
      <Link className="create" to="/register">Create New Account</Link>
      <Link className="create" to="/forgot-password">Forgot Password? Click Here</Link>
  </div>);
};
