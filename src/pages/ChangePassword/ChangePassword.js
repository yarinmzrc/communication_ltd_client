import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BasicModal from '../../components/Modal/Modal';
import './ChangePassword.scss';

const defaultData = {
    email: '',
    current: '',
    nextPassword: '',
}

export const ChangePassword = () => {
    const [passwordData, setPasswordData] = useState(defaultData);
    const [isOpen, setIsOpen] = useState(false);
    const [textToSend, SetTextToSend] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setPasswordData({...passwordData, [e.target.id] : e.target.value});
    }

    const handleClick = async (e) => {
        const {email, nextPassword} = passwordData; 
        e.preventDefault();
        const res = await axios.post("https://localhost:3001/change-password", {
            email, password: nextPassword
        });
        if(res.data === "Email is not registered") {
          SetTextToSend("Email is not registered");
          setIsOpen(true);
        } else if(res.data === "Password Already Used Before") {
          SetTextToSend("Password Already Used Before");
          setIsOpen(true);
        } 
        else if(res.data === "Password is not strong") {
          SetTextToSend("Password is not strong");
          setIsOpen(true);
        } else if(res.data === "Password in dictionary") {
          SetTextToSend("Password in dictionary");
          setIsOpen(true);
        }
        else if(res) {
          console.log(res.data);
          dispatch({type: "CHANGE_PASSWORD", payload: {password: res.data}});
          SetTextToSend("Password has changed")
          setIsOpen(true);
      }
    }

    const handleClose = () => {
      setIsOpen(false);
    }

  return <div className='change-password-page'>
    {isOpen ? <BasicModal text={textToSend} handleClose={handleClose} /> : ''}
      <h1>Change Password</h1>
      <form className='change-form'>
      <label htmlFor="email">Email</label>
        <input id="email" onChange={(e) => handleChange(e)} value={passwordData.email} name="email" type="email" placeholder="Email" />
        <label htmlFor="current">Current Password</label>
        <input id="current" onChange={(e) => handleChange(e)} value={passwordData.current} name="current" type="password" placeholder="Current Password" />
        <label htmlFor="nextPassword">Next Password</label>
        <input id="nextPassword" onChange={(e) => handleChange(e)} value={passwordData.nextPassword} name="nextPassword" type="password" placeholder="Next Password" />
        <button onClick={(e) => handleClick(e)} className='btn'>Change Password</button>
      </form>
  </div>;
};
