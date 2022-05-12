import './ForgotPassword.scss';
import axios from "axios"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BasicModal from '../../components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';


export const ForgotPassword = () => {
  const password = useSelector(state => state.user.password);
  const [isClicked, setIsClicked] = useState(false);
  const [email,setEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [textToSend, SetTextToSend] = useState("");
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = async () => {
    const res = await axios.post("https://localhost:3001/forgot-password", {
      email
    });
    if(res.data === "Email Not Found!") {
      setIsClicked(false);
      SetTextToSend("Email Not Found!");
      setIsOpen(true);
    }
    else if(res) {
      setIsClicked(true);
      console.log(res.data);
      dispatch({type: "CHANGE_PASSWORD", payload: {password: res.data}});
  }
}

const handleClose = () => {
  setIsOpen(false);
}

const handleCheckPassword = () => {
  if(inputPassword === password) {
    navigate('/change-password');
  } else {
    SetTextToSend("Password is incorrect")
    setIsOpen(true);
  }
}
  
  return <div className='forgot-password-page'>
    {isOpen ? <BasicModal text={textToSend} handleClose={handleClose} /> : ''}
    <button disabled={isClicked} onClick={handleClick} className='btn'>I Forgot The Password</button>
    {!isClicked ? <input className='input-password' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Input Email Here" />  : ""}
    {isClicked ? <div>
      <input className='input-password' type="text" value={inputPassword} placeholder="Input Password Here" onChange={(e) => setInputPassword(e.target.value)} />
      <button className='btn' onClick={handleCheckPassword}>Check Password</button>
    </div>  : ''}
  </div>;
};
