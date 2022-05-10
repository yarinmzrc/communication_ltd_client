import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './ChangePassword.scss';

const defaultData = {
    email: '',
    current: '',
    nextPassword: '',
    verify: ''
}

export const ChangePassword = () => {
    const [passwordData, setPasswordData] = useState(defaultData);
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
        if(res) {
          console.log(res.data);
          dispatch({type: "CHANGE_PASSWORD", payload: {password: res.data}});
          navigate('/');
      }
    }

  return <div className='change-password-page'>
      <h1>Change Password</h1>
      <form className='change-form'>
      <label htmlFor="email">Email</label>
        <input id="email" onChange={(e) => handleChange(e)} value={passwordData.email} name="email" type="email" placeholder="Email" />
        <label htmlFor="current">Current Password</label>
        <input id="current" onChange={(e) => handleChange(e)} value={passwordData.current} name="current" type="password" placeholder="Current Password" />
        <label htmlFor="nextPassword">Next Password</label>
        <input id="nextPassword" onChange={(e) => handleChange(e)} value={passwordData.nextPassword} name="nextPassword" type="password" placeholder="Next Password" />
        <label htmlFor="VerifyPassword">Verify Password</label>
        <input id="verify" onChange={(e) => handleChange(e)} value={passwordData.verify} name="VerifyPassword" type="password" placeholder="Verify Password" />
        <button onClick={(e) => handleClick(e)} className='btn'>Change Password</button>
      </form>
  </div>;
};
