import './ForgotPassword.scss';
import axios from "axios"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BasicModal from '../../components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';


export const ForgotPassword = () => {
  const password = useSelector(state => state.user.password);
  const [isClicked, setIsClicked] = useState(false);
  const [inputPassword, setInputPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = async () => {
    setIsClicked(true);
    const res = await axios.get("https://localhost:3001/forgot-password");
    if(res) {
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
    setIsOpen(true);
  }
}
  
  return <div className='forgot-password-page'>
    {isOpen ? <BasicModal text="Password is incorrect" handleClose={handleClose} /> : ''}
    <button disabled={isClicked} onClick={handleClick} className='btn'>I Forgot The Password</button>
    {isClicked ? <div>
      <input className='input-password' type="text" value={inputPassword} placeholder="Input Password Here" onChange={(e) => setInputPassword(e.target.value)} />
      <button className='btn' onClick={handleCheckPassword}>Check Password</button>
    </div>  : ''}
  </div>;
};
