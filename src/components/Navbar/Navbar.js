import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Navbar.scss';

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    dispatch({type: "LOG_OUT"});
    navigate('/')
  }

  return <nav className='navbar'> 
     <h1 className='logo' onClick={() => navigate('/')}>CommunicationLTD</h1>
     <button className='btn' onClick={handleLogOut}>Log out</button>
  </nav>;
};
